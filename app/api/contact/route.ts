import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, emailConfirm, phone, message } = body;

    // バリデーション
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: '必須フィールドが不足しています' },
        { status: 400 }
      );
    }

    if (email !== emailConfirm) {
      return NextResponse.json(
        { error: 'メールアドレスが一致しません' },
        { status: 400 }
      );
    }

    if (message.length < 10) {
      return NextResponse.json(
        { error: 'メッセージは10文字以上で入力してください' },
        { status: 400 }
      );
    }

    // Formrunエンドポイントに送信
    const formrunEndpoint = process.env.FORMRUN_ENDPOINT;
    
    if (formrunEndpoint) {
      try {
        const formrunResponse = await fetch(formrunEndpoint, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            name,
            email,
            phone: phone || '',
            message,
            timestamp: new Date().toISOString(),
          }),
        });

        if (!formrunResponse.ok) {
          console.error('Formrun submission failed:', formrunResponse.status);
          // Formrun送信に失敗しても、ローカルログは出力して成功レスポンスを返す
        }
      } catch (formrunError) {
        console.error('Formrun submission error:', formrunError);
        // Formrun送信に失敗しても、ローカルログは出力して成功レスポンスを返す
      }
    }

    // ローカルログ出力（開発・本番共通）
    console.log('Contact form submission:', {
      name,
      email,
      phone: phone || '',
      message,
      timestamp: new Date().toISOString(),
    });

    return NextResponse.json(
      { message: 'お問い合わせを受け付けました' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { error: 'サーバーエラーが発生しました' },
      { status: 500 }
    );
  }
}
