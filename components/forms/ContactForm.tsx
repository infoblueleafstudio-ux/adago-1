'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Loader2, CheckCircle, AlertCircle } from 'lucide-react';

const contactSchema = z.object({
  name: z.string().min(1, 'お名前は必須です'),
  phone: z.string().min(1, '電話番号は必須です'),
  email: z.string().email('有効なメールアドレスを入力してください'),
  emailConfirm: z.string().email('有効なメールアドレスを入力してください'),
  message: z.string().min(10, 'メッセージは10文字以上で入力してください'),
  honeypot: z.string().optional(), // スパム対策
}).refine((data) => data.email === data.emailConfirm, {
  message: 'メールアドレスが一致しません',
  path: ['emailConfirm'],
});

type ContactFormData = z.infer<typeof contactSchema>;

interface ContactFormProps {
  onSubmit: (data: ContactFormData) => Promise<void>;
}

export default function ContactForm({ onSubmit }: ContactFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const handleFormSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    setSubmitStatus('idle');
    setErrorMessage('');

    try {
      await onSubmit(data);
      setSubmitStatus('success');
      reset();
    } catch (error) {
      setSubmitStatus('error');
      setErrorMessage(error instanceof Error ? error.message : '送信に失敗しました');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitStatus === 'success') {
    return (
      <Card className="max-w-2xl mx-auto">
        <CardContent className="p-8 text-center">
          <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-gray-900 mb-2">送信完了</h2>
          <p className="text-gray-600 mb-6">
            お問い合わせありがとうございます。<br />
            3営業日以内にご連絡いたします。
          </p>
          <Button onClick={() => setSubmitStatus('idle')} variant="outline">
            新しいお問い合わせを送信
          </Button>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle>お問い合わせフォーム</CardTitle>
        <CardDescription>
          ご質問やご相談がございましたら、お気軽にお問い合わせください。
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit(handleFormSubmit)} className="space-y-6">
          {/* Honeypot - スパム対策 */}
          <div className="hidden">
            <Label htmlFor="honeypot">Website</Label>
            <Input
              id="honeypot"
              {...register('honeypot')}
              tabIndex={-1}
              autoComplete="off"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="name">お名前 *</Label>
              <Input
                id="name"
                {...register('name')}
                className={errors.name ? 'border-red-500' : ''}
                placeholder="山田 太郎"
              />
              {errors.name && (
                <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
              )}
            </div>

            <div>
              <Label htmlFor="phone">電話番号 *</Label>
              <Input
                id="phone"
                {...register('phone')}
                className={errors.phone ? 'border-red-500' : ''}
                placeholder="03-1234-5678"
                type="tel"
              />
              {errors.phone && (
                <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>
              )}
            </div>
          </div>

          <div>
            <Label htmlFor="email">メールアドレス *</Label>
            <Input
              id="email"
              {...register('email')}
              className={errors.email ? 'border-red-500' : ''}
              placeholder="example@email.com"
              type="email"
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
            )}
          </div>

          <div>
            <Label htmlFor="emailConfirm">メールアドレス（確認） *</Label>
            <Input
              id="emailConfirm"
              {...register('emailConfirm')}
              className={errors.emailConfirm ? 'border-red-500' : ''}
              placeholder="example@email.com"
              type="email"
            />
            {errors.emailConfirm && (
              <p className="text-red-500 text-sm mt-1">{errors.emailConfirm.message}</p>
            )}
          </div>

          <div>
            <Label htmlFor="message">メッセージ *</Label>
            <Textarea
              id="message"
              {...register('message')}
              className={errors.message ? 'border-red-500' : ''}
              placeholder="お問い合わせ内容をご記入ください"
              rows={5}
            />
            {errors.message && (
              <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>
            )}
          </div>

          {submitStatus === 'error' && (
            <Alert variant="destructive">
              <AlertCircle className="h-4 w-4" />
              <AlertDescription>{errorMessage}</AlertDescription>
            </Alert>
          )}

          <Button
            type="submit"
            disabled={isSubmitting}
            className="w-full"
            size="lg"
          >
            {isSubmitting ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                送信中...
              </>
            ) : (
              '送信する'
            )}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
