import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-gray-900 border-t border-gray-700">
      <div className="container mx-auto px-4 py-8">
        <div className="flex justify-between items-center">
          <div>
            <p className="text-gray-400">&copy; {new Date().getFullYear()} Starseeds Inc. All rights reserved.</p>
          </div>
          <div>
            <ul className="flex items-center space-x-6">
              <li><Link href="/treasury" className="text-gray-300 hover:text-white transition-colors">トレジャリー</Link></li>
              <li><Link href="/news" className="text-gray-300 hover:text-white transition-colors">ニュース</Link></li>
              <li><Link href="/about" className="text-gray-300 hover:text-white transition-colors">会社概要</Link></li>
              <li><Link href="/contact" className="text-gray-300 hover:text-white transition-colors">お問い合わせ</Link></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
