import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Bitcoin, History, Landmark, ArrowRight } from "lucide-react";
import { AnimatedNumber } from "@/components/ui/AnimatedNumber";
import { AuroraBackground } from "@/components/ui/aurora-background";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { LatestNews } from "@/components/LatestNews";

async function getBtcPriceInJpy() {
  try {
    const response = await fetch('https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=jpy', {
      next: { revalidate: 60 } // 60秒ごとにデータを再検証
    });
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    return data.bitcoin.jpy;
  } catch (error) {
    console.error("Failed to fetch Bitcoin price:", error);
    return null; // エラー時はnullを返す
  }
}

export default async function Home() {
  const btcPriceJpy = await getBtcPriceInJpy();

  // モックデータ
  const btcAmount = 1234.5678;
  const lastPurchaseDate = "2025/09/15";

  const currentValueJpy = btcPriceJpy ? btcAmount * btcPriceJpy : 0;

  return (
    <AuroraBackground>
      <main className="container relative z-10 mx-auto flex min-h-screen flex-col items-center justify-center px-4 py-20">
        {/* New Hero Section */}
        <section className="w-full text-center max-w-4xl">
          <h1 className="mb-4 text-sm font-medium uppercase tracking-widest text-primary">
            TREASURY HOLDINGS
          </h1>

          <div className="mb-8 flex items-center justify-center">
            <Bitcoin className="mr-4 h-16 w-16 text-primary" />
            <div className="font-bold tracking-tight text-white sm:text-8xl md:text-9xl">
              <AnimatedNumber
                value={btcAmount}
                decimals={4}
              />
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            <Card className="bg-white/5 backdrop-blur-sm">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">
                  現在の評価額 (JPY)
                </CardTitle>
                <Landmark className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">
                  {currentValueJpy > 0 ? (
                    <AnimatedNumber
                      value={currentValueJpy}
                      prefix="¥"
                    />
                  ) : (
                    <span className="text-muted-foreground">価格取得エラー</span>
                  )}
                </div>
              </CardContent>
            </Card>
            <Card className="bg-white/5 backdrop-blur-sm">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">
                  最終購入日
                </CardTitle>
                <History className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <p className="text-2xl font-bold">
                  {lastPurchaseDate}
                </p>
              </CardContent>
            </Card>
          </div>

          {/* CTA Button */}
          <div className="mt-8">
            <Button asChild variant="outline" className="bg-transparent backdrop-blur-sm text-muted-foreground hover:text-white group">
              <Link href="/treasury">
                トレジャリー詳細を見る
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>

          {/* Latest News Section */}
          <div className="mt-16 w-full">
            <LatestNews title="Recent Updates" variant="compact" />
          </div>

          {/* Data Source */}
          <div className="mt-12 text-center">
             <p className="text-xs text-muted-foreground/50">
               価格データ: CoinGecko
             </p>
           </div>
        </section>
      </main>
    </AuroraBackground>
  );
}
