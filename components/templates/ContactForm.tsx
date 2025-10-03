'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    address: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <Card className="border-sky-100">
      <CardHeader>
        <CardTitle className="text-2xl">お問い合わせフォーム</CardTitle>
        <CardDescription>
          下記のフォームに必要事項をご記入の上、送信してください。
          2〜3営業日以内にご返信いたします。
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="name" className="text-base">
              お名前 <span className="text-red-500">*</span>
            </Label>
            <Input
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder="山田 太郎"
              className="border-sky-200"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="phone" className="text-base">
              電話番号 <span className="text-red-500">*</span>
            </Label>
            <Input
              id="phone"
              name="phone"
              type="tel"
              value={formData.phone}
              onChange={handleChange}
              required
              placeholder="03-1234-5678"
              className="border-sky-200"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="address" className="text-base">
              住所
            </Label>
            <Input
              id="address"
              name="address"
              value={formData.address}
              onChange={handleChange}
              placeholder="東京都○○区○○"
              className="border-sky-200"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="email" className="text-base">
              メールアドレス <span className="text-red-500">*</span>
            </Label>
            <Input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="example@email.com"
              className="border-sky-200"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="message" className="text-base">
              お問い合わせ内容 <span className="text-red-500">*</span>
            </Label>
            <Textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              placeholder="お問い合わせ内容をご記入ください"
              rows={6}
              className="border-sky-200"
            />
          </div>

          <Button
            type="submit"
            size="lg"
            className="w-full bg-sky-500 hover:bg-sky-600 text-white text-lg py-6"
          >
            送信する
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default ContactForm;
