'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';

const Navigation = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const menuItems = [
    {
      title: '10の魅力',
      href: '/attractions',
    },
    {
      title: '幼稚園のこと',
      href: '/about',
      submenu: [
        { title: '園概要', href: '/about/overview' },
        { title: '施設紹介', href: '/about/facilities' },
        { title: '歴史', href: '/about/history' },
        { title: '卒園生・保護者の声', href: '/about/voices' },
      ],
    },
    {
      title: '教育と保育',
      href: '/education',
      submenu: [
        { title: '理念', href: '/education/philosophy' },
        { title: '園での1日', href: '/education/daily-life' },
        { title: '年間行事', href: '/education/events' },
        { title: 'カリキュラム', href: '/education/curriculum' },
        { title: '先生紹介', href: '/education/teachers' },
      ],
    },
    {
      title: '入園案内',
      href: '/admission',
      submenu: [
        { title: '募集要項', href: '/admission/requirements' },
        { title: '認定区分', href: '/admission/classification' },
        { title: '保育時間・料金', href: '/admission/schedule-fees' },
        { title: '一時預かり', href: '/admission/temporary-care' },
      ],
    },
    {
      title: '子育て支援',
      href: '/support',
    },
    {
      title: 'お知らせ',
      href: '/news',
    },
    {
      title: 'FAQ',
      href: '/faq',
    },
    {
      title: 'お問い合わせ',
      href: '/contact',
    },
  ];

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-12 h-12 bg-gradient-to-br from-sky-400 to-blue-500 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-xl">愛</span>
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold text-gray-900">愛宕幼稚園</span>
                <span className="text-xs text-gray-600">ATAGO KINDERGARTEN</span>
              </div>
            </Link>
          </div>

          <div className="hidden lg:flex items-center space-x-1">
            {menuItems.map((item) => (
              <div
                key={item.title}
                className="relative"
                onMouseEnter={() => item.submenu && setOpenDropdown(item.title)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                {item.submenu ? (
                  <>
                    <button className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-sky-600 hover:bg-sky-50 rounded-md transition-colors flex items-center">
                      {item.title}
                      <ChevronDown className="ml-1 w-4 h-4" />
                    </button>
                    {openDropdown === item.title && (
                      <div className="absolute top-full left-0 mt-1 w-56 bg-white rounded-lg shadow-lg border border-gray-100 py-2">
                        {item.submenu.map((subitem) => (
                          <Link
                            key={subitem.href}
                            href={subitem.href}
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-sky-50 hover:text-sky-600 transition-colors"
                          >
                            {subitem.title}
                          </Link>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <Link
                    href={item.href}
                    className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-sky-600 hover:bg-sky-50 rounded-md transition-colors inline-block"
                  >
                    {item.title}
                  </Link>
                )}
              </div>
            ))}
          </div>

          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-gray-700 hover:text-sky-600 p-2"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100">
          <div className="px-4 py-4 space-y-2">
            {menuItems.map((item) => (
              <div key={item.title}>
                {item.submenu ? (
                  <>
                    <button
                      onClick={() =>
                        setOpenDropdown(openDropdown === item.title ? null : item.title)
                      }
                      className="w-full text-left px-4 py-2 text-sm font-medium text-gray-700 hover:bg-sky-50 rounded-md flex items-center justify-between"
                    >
                      {item.title}
                      <ChevronDown
                        className={`w-4 h-4 transition-transform ${
                          openDropdown === item.title ? 'rotate-180' : ''
                        }`}
                      />
                    </button>
                    {openDropdown === item.title && (
                      <div className="ml-4 mt-1 space-y-1">
                        {item.submenu.map((subitem) => (
                          <Link
                            key={subitem.href}
                            href={subitem.href}
                            className="block px-4 py-2 text-sm text-gray-600 hover:bg-sky-50 rounded-md"
                            onClick={() => setMobileMenuOpen(false)}
                          >
                            {subitem.title}
                          </Link>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <Link
                    href={item.href}
                    className="block px-4 py-2 text-sm font-medium text-gray-700 hover:bg-sky-50 rounded-md"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.title}
                  </Link>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
