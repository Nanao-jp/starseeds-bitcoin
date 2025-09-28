"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  ChartConfig,
} from "@/components/ui/chart";
import { Area, AreaChart, CartesianGrid, XAxis, YAxis, ResponsiveContainer } from "recharts";
import { AnimatedNumber } from "@/components/ui/AnimatedNumber";
import { Bitcoin, Milestone, TrendingUp } from "lucide-react";

// --- Mock Data ---

const summaryData = {
  totalBtc: 1234.5678,
  totalCostJpy: 7_500_000_000,
  averagePriceJpy: 6_075_031,
};

const chartData = [
  { month: "2024-01", btc: 150.0, price: 6100000 },
  { month: "2024-02", btc: 250.0, price: 6800000 },
  { month: "2024-03", btc: 400.0, price: 8500000 },
  { month: "2024-04", btc: 550.0, price: 9500000 },
  { month: "2024-05", btc: 780.0, price: 10200000 },
  { month: "2024-06", btc: 950.0, price: 11000000 },
  { month: "2024-07", btc: 1100.0, price: 10500000 },
  { month: "2024-08", btc: 1234.5678, price: 12500000 },
];

const transactionsData = [
  { id: 1, date: "2024-08-15", btcAmount: 134.5678, pricePerBtcJpy: 12500000 },
  { id: 2, date: "2024-07-20", btcAmount: 150.0, pricePerBtcJpy: 10500000 },
  { id: 3, date: "2024-06-05", btcAmount: 170.0, pricePerBtcJpy: 11000000 },
  { id: 4, date: "2024-05-10", btcAmount: 230.0, pricePerBtcJpy: 10200000 },
  { id: 5, date: "2024-04-12", btcAmount: 150.0, pricePerBtcJpy: 9500000 },
  { id: 6, date: "2024-03-18", btcAmount: 150.0, pricePerBtcJpy: 8500000 },
  { id: 7, date: "2024-02-25", btcAmount: 100.0, pricePerBtcJpy: 6800000 },
  { id: 8, date: "2024-01-30", btcAmount: 150.0, pricePerBtcJpy: 6100000 },
];

const chartConfig = {
  btc: {
    label: "BTC",
    color: "hsl(var(--primary))",
  },
} satisfies ChartConfig;

export default function TreasuryPage() {
  return (
    <div className="min-h-screen w-full bg-background text-foreground">
      <main className="container mx-auto px-4 py-12 md:py-16">
        <header className="mb-12 text-center">
          <h1 className="font-orbitron text-4xl md:text-5xl font-bold tracking-tight text-primary">
            Bitcoin Treasury
          </h1>
          <p className="mt-2 text-lg text-muted-foreground">
            Starseedsのビットコイン保有資産に関する詳細データ
          </p>
        </header>

        {/* Summary Cards */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <Card className="bg-white/5 backdrop-blur-sm">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">合計保有BTC</CardTitle>
              <Bitcoin className="h-5 w-5 text-primary" />
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold">
                <AnimatedNumber value={summaryData.totalBtc} decimals={4} />
              </div>
            </CardContent>
          </Card>
          <Card className="bg-white/5 backdrop-blur-sm">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">合計取得費用 (JPY)</CardTitle>
              <Milestone className="h-5 w-5 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold">
                <AnimatedNumber value={summaryData.totalCostJpy} prefix="¥" />
              </div>
            </CardContent>
          </Card>
          <Card className="bg-white/5 backdrop-blur-sm">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">平均取得単価 (JPY)</CardTitle>
              <TrendingUp className="h-5 w-5 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold">
                <AnimatedNumber value={summaryData.averagePriceJpy} prefix="¥" />
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Holdings Chart */}
        <section className="mb-12">
          <Card className="bg-white/5 backdrop-blur-sm">
            <CardHeader>
              <CardTitle>保有BTC推移</CardTitle>
            </CardHeader>
            <CardContent>
              <ChartContainer config={chartConfig} className="h-[400px] w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={chartData} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                    <defs>
                      <linearGradient id="colorBtc" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="var(--color-primary)" stopOpacity={0.8}/>
                        <stop offset="95%" stopColor="var(--color-primary)" stopOpacity={0}/>
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border) / 0.5)" />
                    <XAxis dataKey="month" stroke="hsl(var(--muted-foreground))" fontSize={12} />
                    <YAxis stroke="hsl(var(--muted-foreground))" fontSize={12} domain={['dataMin - 100', 'dataMax + 100']} />
                    <ChartTooltip
                      cursor={false}
                      content={<ChartTooltipContent 
                        labelClassName="font-bold"
                        className="bg-background/80 backdrop-blur-sm"
                        formatter={(value, name, props) => [`${Number(value).toFixed(4)} BTC`, `(当時の参考価格: ¥${props.payload.price.toLocaleString()})`]}
                      />}
                    />
                    <Area type="monotone" dataKey="btc" stroke="var(--color-primary)" fillOpacity={1} fill="url(#colorBtc)" />
                  </AreaChart>
                </ResponsiveContainer>
              </ChartContainer>
            </CardContent>
          </Card>
        </section>

        {/* Transactions Table */}
        <section>
          <Card className="bg-white/5 backdrop-blur-sm">
            <CardHeader>
              <CardTitle>取引履歴</CardTitle>
            </CardHeader>
            <CardContent>
              {/* Desktop Table */}
              <div className="hidden md:block">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>取引日</TableHead>
                      <TableHead className="text-right">購入量 (BTC)</TableHead>
                      <TableHead className="text-right">取得単価 (JPY)</TableHead>
                      <TableHead className="text-right">取得費用 (JPY)</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {transactionsData.map((tx) => (
                      <TableRow key={tx.id}>
                        <TableCell>{tx.date}</TableCell>
                        <TableCell className="text-right font-mono">{tx.btcAmount.toFixed(4)}</TableCell>
                        <TableCell className="text-right font-mono">¥{tx.pricePerBtcJpy.toLocaleString()}</TableCell>
                        <TableCell className="text-right font-mono">¥{(tx.btcAmount * tx.pricePerBtcJpy).toLocaleString()}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>

              {/* Mobile Card List */}
              <div className="md:hidden space-y-4">
                {transactionsData.map((tx) => (
                  <Card key={tx.id} className="bg-white/10 p-4">
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-semibold">{tx.date}</span>
                      <span className="font-mono text-lg font-bold text-primary">{tx.btcAmount.toFixed(4)} BTC</span>
                    </div>
                    <div className="text-sm text-muted-foreground space-y-1">
                      <div className="flex justify-between">
                        <span>取得単価:</span>
                        <span className="font-mono">¥{tx.pricePerBtcJpy.toLocaleString()}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>取得費用:</span>
                        <span className="font-mono">¥{(tx.btcAmount * tx.pricePerBtcJpy).toLocaleString()}</span>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </CardContent>
          </Card>
        </section>

      </main>
    </div>
  );
}
