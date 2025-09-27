import Link from 'next/link';
import Image from 'next/image';

const Header = () => {
  return (
    <header className="bg-gray-900 border-b border-gray-700 sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <nav className="flex items-center justify-between py-4">
          <div>
            <Link href="/" className="text-2xl font-orbitron font-bold tracking-wider text-primary">
              Starseeds Bitcoin Treasury
            </Link>
          </div>
          <ul className="flex items-center space-x-6">
            <li><Link href="/" className="text-gray-300 hover:text-white transition-colors">HOME</Link></li>
            <li><Link href="/treasury" className="text-gray-300 hover:text-white transition-colors">Treasury</Link></li>
            <li><Link href="/news" className="text-gray-300 hover:text-white transition-colors">News</Link></li>
            <li><Link href="/about" className="text-gray-300 hover:text-white transition-colors">About</Link></li>
            <li><Link href="/contact" className="text-gray-300 hover:text-white transition-colors">Contact</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
