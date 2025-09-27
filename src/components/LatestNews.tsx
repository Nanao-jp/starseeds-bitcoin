import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import Link from "next/link";
import { ArrowRight, Calendar, Tag, Newspaper } from "lucide-react";
import { getLatestArticle } from "@/lib/news-data";

interface LatestNewsProps {
  title?: string;
  variant?: 'full' | 'compact';
}

export const LatestNews = ({ title = "最新ニュース", variant = 'full' }: LatestNewsProps) => {
  const latestArticle = getLatestArticle();

  if (variant === 'compact') {
    return (
      <section>
        <h2 className="text-2xl font-bold mb-6 border-b pb-2 text-primary">{title}</h2>
        <Link href={latestArticle.slug} className="block group h-full">
          <Card className="bg-white/5 backdrop-blur-sm hover:border-primary/50 transition-colors flex flex-col h-full">
            <CardHeader>
              <div className="flex items-center gap-4 text-xs text-muted-foreground mb-2">
                <span className="flex items-center gap-1.5"><Tag className="h-3 w-3" /> {latestArticle.category}</span>
                <span className="flex items-center gap-1.5"><Calendar className="h-3 w-3" /> {latestArticle.date}</span>
              </div>
              <CardTitle className="text-xl font-bold group-hover:text-primary transition-colors">{latestArticle.title}</CardTitle>
            </CardHeader>
            <CardContent className="flex-grow">
              <p className="text-sm text-muted-foreground line-clamp-2">{latestArticle.excerpt}</p>
            </CardContent>
            <div className="p-6 pt-0 mt-auto">
              <div className="font-semibold text-foreground">
                続きを読む <ArrowRight className="inline-block h-4 w-4 transition-transform group-hover:translate-x-1" />
              </div>
            </div>
          </Card>
        </Link>
      </section>
    );
  }

  // Full variant (default)
  return (
    <section>
      <h2 className="text-2xl font-bold mb-6 border-b pb-2 text-primary">{title}</h2>
      <Card className="bg-white/5 backdrop-blur-sm relative overflow-hidden group transition-all hover:border-primary/50">
        <div className="absolute top-4 right-4 bg-primary text-primary-foreground text-xs font-bold uppercase px-3 py-1 rounded-full z-10">
          Latest News
        </div>
        <Link href={latestArticle.slug} className="block">
          <div className="grid md:grid-cols-2">
            {/* Image Placeholder */}
            <div className="flex items-center justify-center bg-black/10 p-8 min-h-[250px] md:min-h-0">
              <Newspaper className="h-24 w-24 text-muted-foreground/30" />
            </div>
            
            {/* Content */}
            <div className="p-6 sm:p-8 flex flex-col">
              <div className="flex items-center gap-4 text-xs text-muted-foreground mb-2">
                <span className="flex items-center gap-1.5"><Tag className="h-3 w-3" /> {latestArticle.category}</span>
                <span className="flex items-center gap-1.5"><Calendar className="h-3 w-3" /> {latestArticle.date}</span>
              </div>
              <h2 className="text-2xl lg:text-3xl font-bold group-hover:text-primary transition-colors flex-grow">
                {latestArticle.title}
              </h2>
              <p className="mt-4 text-muted-foreground text-sm line-clamp-3">{latestArticle.excerpt}</p>
              <div className="mt-6 font-semibold text-foreground">
                続きを読む <ArrowRight className="inline-block h-4 w-4 transition-transform group-hover:translate-x-1" />
              </div>
            </div>
          </div>
        </Link>
      </Card>
    </section>
  );
};
