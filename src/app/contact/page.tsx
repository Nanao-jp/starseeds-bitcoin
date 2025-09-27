"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Mail } from "lucide-react";

export default function ContactPage() {
  const [status, setStatus] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("送信中...");

    // フォーム送信ロジックのシミュレーション
    setTimeout(() => {
      setStatus("メッセージが送信されました。ありがとうございました。");
      // e.target.reset(); // フォームをリセットする場合
    }, 1500);
  };

  return (
    <div className="min-h-screen w-full bg-background text-foreground">
      <main className="container mx-auto px-4 py-12 md:py-16">
        <header className="mb-12 text-center">
          <h1 className="font-orbitron text-4xl md:text-5xl font-bold tracking-tight text-primary">
            Contact Us
          </h1>
          <p className="mt-2 text-lg text-muted-foreground">
            事業に関するお問い合わせはこちらから
          </p>
        </header>

        <section className="max-w-2xl mx-auto">
          <Card className="bg-white/5 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Mail className="mr-2 h-5 w-5" />
                お問い合わせフォーム
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name">お名前</Label>
                  <Input id="name" type="text" placeholder="田中 太郎" required className="bg-transparent" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">メールアドレス</Label>
                  <Input id="email" type="email" placeholder="taro.tanaka@example.com" required className="bg-transparent" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="subject">件名</Label>
                  <Input id="subject" type="text" placeholder="事業に関するご質問" required className="bg-transparent" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">お問い合わせ内容</Label>
                  <Textarea id="message" placeholder="お問い合わせ内容をこちらにご記入ください。" required rows={6} className="bg-transparent" />
                </div>
                <Button type="submit" className="w-full font-bold">送信</Button>
              </form>
              {status && (
                <p className="mt-6 text-center text-sm text-muted-foreground">{status}</p>
              )}
            </CardContent>
          </Card>
        </section>

      </main>
    </div>
  );
}
