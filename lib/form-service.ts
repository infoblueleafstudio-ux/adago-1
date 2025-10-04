// 外部フォームサービス統合
// Formrun, Vercel Forms, Basin などに対応

export interface FormSubmissionData {
  name: string;
  phone: string;
  email: string;
  message: string;
  honeypot?: string;
}

export async function submitToFormService(data: FormSubmissionData): Promise<void> {
  // Honeypot チェック
  if (data.honeypot && data.honeypot.trim() !== '') {
    throw new Error('スパムと判定されました');
  }

  // 環境変数からフォームサービス設定を取得
  const formService = process.env.NEXT_PUBLIC_FORM_SERVICE || 'vercel';
  const webhookUrl = process.env.FORM_WEBHOOK_URL;
  const apiKey = process.env.FORM_API_KEY;

  if (!webhookUrl && !apiKey) {
    // 開発環境ではコンソールログのみ
    console.log('Form submission (dev mode):', {
      name: data.name,
      email: data.email,
      phone: data.phone,
      message: data.message,
    });
    return;
  }

  try {
    const payload = {
      name: data.name,
      email: data.email,
      phone: data.phone,
      message: data.message,
      timestamp: new Date().toISOString(),
      source: 'website',
    };

    if (formService === 'vercel' && webhookUrl) {
      // Vercel Forms 互換
      await fetch(webhookUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });
    } else if (formService === 'formrun' && apiKey) {
      // Formrun 互換
      await fetch('https://formrun.jp/api/v1/forms/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${apiKey}`,
        },
        body: JSON.stringify(payload),
      });
    } else if (formService === 'basin' && webhookUrl) {
      // Basin 互換
      await fetch(webhookUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });
    } else {
      throw new Error('フォームサービスが設定されていません');
    }
  } catch (error) {
    console.error('Form submission error:', error);
    throw new Error('フォーム送信に失敗しました。しばらくしてから再度お試しください。');
  }
}
