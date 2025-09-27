import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Bitcoin, History, Landmark } from "lucide-react";
import { AnimatedNumber } from "@/components/ui/AnimatedNumber";
import { AuroraBackground } from "@/components/ui/aurora-background";

export default function Home() {
  // モックデータ (文字列からカンマを除去し、数値に変換)
  const treasurySummary = {
    btcAmount: 1234.5678,
    currentValueJpy: 12345678901,
    lastPurchaseDate: "2025/09/15",
  };

  return (
    <AuroraBackground>
      <main className="container relative z-10 mx-auto flex h-screen flex-col items-center justify-center px-4">
        {/* New Hero Section */}
        <section className="w-full text-center">
          <h1 className="mb-4 text-sm font-medium uppercase tracking-widest text-primary">
            Starseeds Bitcoin Treasury
          </h1>

          <div className="mb-8 flex items-center justify-center">
            <Bitcoin className="mr-4 h-16 w-16 text-primary" />
            <div className="font-bold tracking-tight text-white sm:text-8xl md:text-9xl">
              <AnimatedNumber
                value={treasurySummary.btcAmount}
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
                  <AnimatedNumber
                    value={treasurySummary.currentValueJpy}
                    prefix="¥"
                  />
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
                  {treasurySummary.lastPurchaseDate}
                </p>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>
    </AuroraBackground>
  );
}
