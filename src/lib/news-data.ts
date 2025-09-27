// --- Mock Data ---
export const newsArticles = [
  {
    id: 1,
    category: "Press Release",
    title: "Starseeds、財務資産としてビットコインの追加購入を完了",
    date: "2025-09-20",
    excerpt: "本日、Starseeds株式会社は、長期的な価値保存戦略の一環として、追加で150 BTCを取得したことを発表しました。これにより、当社のビットコイン総保有量は1234.5678 BTCとなります。",
    slug: "/news/additional-btc-purchase",
  },
  {
    id: 2,
    category: "Technology",
    title: "Lightning Networkを活用した決済システムの社内実証実験を開始",
    date: "2025-09-05",
    excerpt: "当社は、ビットコインのセカンドレイヤー技術であるLightning Networkを活用した、即時かつ低コストな決済システムのプロトタイプ開発および社内実証実験を開始しました。",
    slug: "/news/lightning-network-poc",
  },
  {
    id: 3,
    category: "Corporate",
    title: "2025年度 第2四半期 財務報告およびトレジャリー戦略説明会のお知らせ",
    date: "2025-08-28",
    excerpt: "2025年度第2四半期の財務報告と、当社のビットコイントレジャリー戦略に関するオンライン説明会を、10月15日に開催いたします。参加登録はこちらから。",
    slug: "/news/q2-financial-report-briefing",
  },
];

export const getLatestArticle = () => {
  return [...newsArticles].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())[0];
};

export const getOlderArticles = () => {
  return [...newsArticles].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()).slice(1);
};
