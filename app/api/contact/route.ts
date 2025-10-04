import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, emailConfirm, phone, message } = body;

    // バリデーション
    if (!name || !email || !phone || !message) {
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

    // 開発環境ではコンソールログに出力
    console.log('Contact form submission:', {
      name,
      email,
      phone,
      message,
      timestamp: new Date().toISOString(),
    });

    // 本番環境では外部サービスに送信
    // await submitToFormService({ name, email, phone, message });

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
