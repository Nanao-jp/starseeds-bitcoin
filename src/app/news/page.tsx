"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import { ArrowRight, Calendar, Tag } from "lucide-react";
import { getOlderArticles } from "@/lib/news-data";
import { LatestNews } from "@/components/LatestNews";

const olderArticles = getOlderArticles();

export default function NewsPage() {
  return (
    <div className="min-h-screen w-full bg-background text-foreground">
      <main className="container mx-auto px-4 py-12 md:py-16">
        <header className="mb-12 text-center">
          <h1 className="font-orbitron text-4xl md:text-5xl font-bold tracking-tight text-primary">
            News & Updates
          </h1>
          <p className="mt-2 text-lg text-muted-foreground">
            プレスリリース、お知らせ、技術ブログなど最新情報
          </p>
        </header>

        {/* Latest Article Highlight */}
        <LatestNews />

        {/* Separator */}
        <div className="my-12">
          <hr className="border-t border-white/10" />
        </div>

        {/* Older Articles List */}
        <Card className="bg-white/5 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-primary">過去のニュース</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              {olderArticles.map((article) => (
                <Link href={article.slug} key={article.id} className="block group">
                  <Card className="bg-white/10 backdrop-blur-sm p-4 hover:bg-white/20 transition-colors">
                    <div className="flex flex-col sm:flex-row justify-between sm:items-center">
                      <div>
                        <h3 className="text-lg font-bold group-hover:text-primary transition-colors">{article.title}</h3>
                        <div className="flex items-center gap-4 text-xs text-muted-foreground mt-1">
                          <span className="flex items-center gap-1.5"><Tag className="h-3 w-3" /> {article.category}</span>
                          <span className="flex items-center gap-1.5"><Calendar className="h-3 w-3" /> {article.date}</span>
                        </div>
                      </div>
                      <div className="mt-2 sm:mt-0">
                        <ArrowRight className="h-5 w-5 text-muted-foreground transition-transform group-hover:translate-x-1 group-hover:text-primary" />
                      </div>
                    </div>
                  </Card>
                </Link>
              ))}
            </div>
          </CardContent>
        </Card>

      </main>
    </div>
  );
}
