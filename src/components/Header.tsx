import Link from 'next/link';
import Image from 'next/image';

const Header = () => {
  return (
    <header className="bg-gray-900 border-b border-gray-700 sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <nav className="flex items-center justify-between py-4">
          <div>
            <Link href="/">
              <Image src="/images/logo.png" alt="Starseeds Logo" width={160} height={40} />
            </Link>
          </div>
          <ul className="flex items-center space-x-6">
            <li><Link href="/treasury" className="text-gray-300 hover:text-white transition-colors">トレジャリー</Link></li>
            <li><Link href="/news" className="text-gray-300 hover:text-white transition-colors">ニュース</Link></li>
            <li><Link href="/about" className="text-gray-300 hover:text-white transition-colors">会社概要</Link></li>
            <li><Link href="/contact" className="text-gray-300 hover:text-white transition-colors">お問い合わせ</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
