"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Building, Gem, Scale, Users } from "lucide-react";

// --- Mock Data ---
const companyInfo = {
  name: "Starseeds株式会社 (Starseeds Inc.)",
  founded: "2023年10月",
  ceo: "田中 太郎",
  address: "東京都渋谷区道玄坂1-2-3",
  capital: "10,000,000円",
  business: "デジタルアセット管理、ブロックチェーン技術の研究開発",
};

const mission = {
  title: "Our Mission",
  statement: "私たちは、ブロックチェーン技術と分散型金融の可能性を信じ、デジタルアセットを通じて新たな価値創造の時代をリードします。透明性と先進性を両立させ、すべてのステークホルダーと共に持続可能な未来を築くことを目指します。",
};

const values = [
  { icon: Gem, title: "先進性", description: "常に技術の最前線を走り、革新的なソリューションを追求します。" },
  { icon: Scale, title: "透明性", description: "ブロックチェーンの原則に基づき、オープンで公正な情報公開を徹底します。" },
  { icon: Users, title: "共創", description: "コミュニティやパートナーと共に、分散型の未来を築き上げます。" },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen w-full bg-background text-foreground">
      <main className="container mx-auto px-4 py-12 md:py-16">
        <header className="mb-12 text-center">
          <h1 className="font-orbitron text-4xl md:text-5xl font-bold tracking-tight text-primary">
            About Us
          </h1>
          <p className="mt-2 text-lg text-muted-foreground">
            私たちのビジョンと会社情報
          </p>
        </header>

        {/* Mission Section */}
        <section className="mb-16 text-center">
          <h2 className="text-3xl font-bold mb-4">{mission.title}</h2>
          <p className="max-w-3xl mx-auto text-muted-foreground">{mission.statement}</p>
        </section>

        {/* Values Section */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {values.map((value) => (
            <div key={value.title} className="text-center">
              <div className="flex justify-center mb-4">
                <div className="p-4 bg-primary/10 rounded-full">
                  <value.icon className="h-8 w-8 text-primary" />
                </div>
              </div>
              <h3 className="text-xl font-bold mb-2">{value.title}</h3>
              <p className="text-muted-foreground">{value.description}</p>
            </div>
          ))}
        </section>

        {/* Company Info Table */}
        <section>
          <Card className="bg-white/5 backdrop-blur-sm max-w-4xl mx-auto">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Building className="mr-2 h-5 w-5" />
                会社概要
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="divide-y divide-border">
                {Object.entries(companyInfo).map(([key, value]) => {
                  const label = {
                    name: "法人名",
                    founded: "設立",
                    ceo: "代表取締役",
                    address: "所在地",
                    capital: "資本金",
                    business: "事業内容",
                  }[key];
                  return (
                    <div key={key} className="grid grid-cols-1 md:grid-cols-3 gap-x-4 gap-y-1 py-4">
                      <dt className="font-semibold text-muted-foreground">{label}</dt>
                      <dd className="md:col-span-2">{value}</dd>
                    </div>
                  );
                })}
              </div>
            </CardContent>
          </Card>
        </section>

      </main>
    </div>
  );
}
