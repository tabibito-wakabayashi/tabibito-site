import { NextResponse } from 'next/server';
import { Resend } from 'resend';

export const runtime = 'nodejs';

const TO_EMAIL = 'tabibito.company@gmail.com';
const FROM_EMAIL = 'Tabibito お問い合わせ <onboarding@resend.dev>';

export async function POST(req: Request) {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    return NextResponse.json(
      { ok: false, error: 'RESEND_API_KEY is not configured.' },
      { status: 500 },
    );
  }

  let payload: Record<string, string>;
  try {
    payload = await req.json();
  } catch {
    return NextResponse.json({ ok: false, error: 'Invalid JSON.' }, { status: 400 });
  }

  const name = (payload.name ?? '').trim();
  const company = (payload.company ?? '').trim();
  const email = (payload.email ?? '').trim();
  const tel = (payload.tel ?? '').trim();
  const inquiry = (payload.inquiry ?? '').trim();
  const message = (payload.message ?? '').trim();

  if (!name || !email || !inquiry || !message) {
    return NextResponse.json(
      { ok: false, error: '必須項目が入力されていません。' },
      { status: 400 },
    );
  }

  const subject = `【お問い合わせ】${inquiry}（${name} 様）`;
  const text = [
    'Webサイトのお問い合わせフォームより、以下のお問い合わせを受け付けました。',
    '',
    `お名前: ${name}`,
    `会社名: ${company || '（未入力）'}`,
    `メールアドレス: ${email}`,
    `電話番号: ${tel || '（未入力）'}`,
    `お問い合わせ種別: ${inquiry}`,
    '',
    'お問い合わせ内容:',
    message,
  ].join('\n');

  const resend = new Resend(apiKey);
  const { error } = await resend.emails.send({
    from: FROM_EMAIL,
    to: [TO_EMAIL],
    replyTo: email,
    subject,
    text,
  });

  if (error) {
    return NextResponse.json(
      { ok: false, error: error.message ?? 'メール送信に失敗しました。' },
      { status: 502 },
    );
  }

  return NextResponse.json({ ok: true });
}
