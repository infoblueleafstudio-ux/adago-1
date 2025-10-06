'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';
import { Menu, X, ChevronDown } from 'lucide-react';

const Navigation = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [hoveredMenu, setHoveredMenu] = useState<string | null>(null);
  const [isClickFixed, setIsClickFixed] = useState(false);
  const hoverTimers = useRef<{ open?: NodeJS.Timeout; close?: NodeJS.Timeout }>({});
  const subMenuHovered = useRef(false);
  const pathname = usePathname();

  // ページごとのグラデーション色を設定
  const getGradientColor = (path: string) => {
    if (path.startsWith('/about')) return 'from-[#f7a9a1] to-[#f28d7b]'; // ピンク系
    if (path.startsWith('/education')) return 'from-[#9fd9b9] to-[#6bbf91]'; // グリーン系
    if (path.startsWith('/admission')) return 'from-[#f9c87a] to-[#e6a64b]'; // オレンジ系
    if (path.startsWith('/support')) return 'from-[#9cc6f1] to-[#73a9e5]'; // ブルー系
    if (path.startsWith('/news')) return 'from-[#e8d4e6] to-[#c1a0bc]'; // ラベンダー系
    if (path.startsWith('/faq')) return 'from-[#c4c4c4] to-[#a5a5a5]'; // グレー系
    if (path.startsWith('/contact')) return 'from-[#f7a9a1] to-[#f28d7b]'; // ピンク系
    if (path === '/') return 'from-[#f9c87a] to-[#e6a64b]'; // ホームはオレンジ系
    return 'from-[#f9c87a] to-[#e6a64b]'; // デフォルトはオレンジ系
  };

  // 親メニューごとのサブメニュー背景グラデーション
  const getSubmenuGradientByTitle = (title: string | null) => {
    switch (title) {
      case '幼稚園のこと':
        return 'from-[#f7b6b2] to-[#eb9358]'; // オレンジ〜ピンク
      case '教育と保育':
        return 'from-[#6fb79e] to-[#3c9b85]'; // グリーン系
      case '入園案内':
        return 'from-[#f2c94c] to-[#e1a42b]'; // イエロー〜オレンジ
      case '子育て支援':
        return 'from-[#6b8fdc] to-[#8d6fc9]'; // ブルー〜パープル
      default:
        return 'from-[#f2c94c] to-[#e1a42b]';
    }
  };

  // サブメニューの遅延制御（開く: 150ms, 閉じる: 250ms）
  const handleMouseEnter = (itemTitle: string) => {
    // 既存のタイマーをクリア
    if (hoverTimers.current.open) {
      clearTimeout(hoverTimers.current.open);
    }
    if (hoverTimers.current.close) {
      clearTimeout(hoverTimers.current.close);
    }

    // クリック固定モードの場合は即座に開く
    if (isClickFixed && openDropdown === itemTitle) {
      return;
    }

    // 150ms後に開く
    hoverTimers.current.open = setTimeout(() => {
      setHoveredMenu(itemTitle);
      setOpenDropdown(itemTitle);
    }, 150);
  };

  const handleMouseLeave = (e: React.MouseEvent) => {
    // 開くタイマーをクリア
    if (hoverTimers.current.open) {
      clearTimeout(hoverTimers.current.open);
    }

    // サブメニュー領域内の場合は閉じない
    if (e.relatedTarget instanceof HTMLElement && e.relatedTarget.closest('.submenu-container')) {
      return;
    }

    // クリック固定モードの場合は閉じない
    if (isClickFixed) {
      return;
    }

    // 250ms後に閉じる
    hoverTimers.current.close = setTimeout(() => {
      if (!subMenuHovered.current) {
        setHoveredMenu(null);
        setOpenDropdown(null);
      }
    }, 250);
  };

  // サブメニュー上でのマウス操作
  const handleSubMenuMouseEnter = () => {
    subMenuHovered.current = true;
    // 閉じるタイマーをクリア
    if (hoverTimers.current.close) {
      clearTimeout(hoverTimers.current.close);
    }
  };

  const handleSubMenuMouseLeave = () => {
    subMenuHovered.current = false;
    // クリック固定モードでない場合のみ閉じる
    if (!isClickFixed) {
      hoverTimers.current.close = setTimeout(() => {
        setHoveredMenu(null);
        setOpenDropdown(null);
      }, 250);
    }
  };

  // クリック固定機能
  const handleClickMenu = (title: string) => {
    if (openDropdown === title && isClickFixed) {
      // 既に開いている場合は閉じる
      setOpenDropdown(null);
      setHoveredMenu(null);
      setIsClickFixed(false);
    } else {
      // 開く
      setOpenDropdown(title);
      setHoveredMenu(title);
      setIsClickFixed(true);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      // クリーンアップ
      if (hoverTimers.current.open) {
        clearTimeout(hoverTimers.current.open);
      }
      if (hoverTimers.current.close) {
        clearTimeout(hoverTimers.current.close);
      }
    };
  }, []);

  const menuItems = [
    { title: '10の魅力', href: '/attractions' },
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
      title: '入園のご案内',
      href: '/admission',
      submenu: [
        { title: '入園までの流れ', href: '/admission/process' },
        { title: '募集要項', href: '/admission/requirements' },
        { title: '費用について', href: '/admission/fees' },
        { title: '見学・お問い合わせ', href: '/admission/visit' },
      ],
    },
    {
      title: '子育て支援',
      href: '/support',
      submenu: [
        { title: '子育て支援サービス', href: '/support/service' },
        { title: '認定こども園について', href: '/support/about' },
      ],
    },
    { title: 'よくある質問', href: '/faq' },
  ];

  return (
    <nav className={`sticky top-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/95 backdrop-blur-md shadow-md' 
        : 'bg-white'
    }`}>
      <div className="w-full px-10 lg:px-16">
        <div className="flex justify-between items-center h-[84px]">
          <div className="flex items-center w-full lg:w-auto justify-center lg:justify-start">
            <Link href="/" className="flex items-center space-x-3">
              <Image
                src="/logo3.jpg"
                alt="こどもの森 幼稚園 ロゴ"
                width={56}
                height={56}
                priority
                className="rounded-full object-contain h-[48px] w-[56px]"
              />
              <div className="hidden sm:flex flex-col">
                <span className="text-2xl font-bold text-atago-blue">こどもの森 幼稚園</span>
                <span className="text-sm text-gray-500">KODOMO NO MORI KINDERGARTEN</span>
              </div>
            </Link>
          </div>

          <div className="hidden lg:flex items-center justify-center space-x-12 flex-1">
            {menuItems.map((item) => (
              <div
                key={item.title}
                className="relative"
                onMouseEnter={() => item.submenu && handleMouseEnter(item.title)}
                onMouseLeave={handleMouseLeave}
              >
                {item.submenu ? (
                  <>
                    <button 
                      onClick={() => handleClickMenu(item.title)}
                      className="group relative px-3 py-[6px] text-[16px] font-medium text-atago-text tracking-wide leading-[1.6] transition-all duration-300 ease-out flex flex-col items-center justify-center whitespace-nowrap"
                    >
                      <div className="flex flex-col items-center space-y-[3px]">
                        {/* アイコン */}
                        <div className="w-[21px] h-[21px] md:w-[22px] md:h-[22px] flex items-center justify-center">
                          {item.title === '10の魅力' && (
                            <svg className="w-full h-full transition-all duration-200 ease-out group-hover:opacity-75" viewBox="0 0 24 24" fill="#f9c87a">
                              <circle cx="12" cy="12" r="8" />
                            </svg>
                          )}
                          {item.title === '幼稚園のこと' && (
                            <svg className="w-full h-full transition-all duration-200 ease-out group-hover:opacity-75" viewBox="0 0 24 24" fill="#f7a9a1">
                              <polygon points="12,2 22,8.5 22,15.5 12,22 2,15.5 2,8.5" />
                            </svg>
                          )}
                          {item.title === '教育と保育' && (
                            <svg className="w-full h-full transition-all duration-200 ease-out group-hover:opacity-75" viewBox="0 0 24 24" fill="#6bbf91">
                              <path d="M12,2C6.48,2 2,6.48 2,12s4.48,10 10,10s10,-4.48 10,-10S17.52,2 12,2zM12,20c-4.41,0 -8,-3.59 -8,-8s3.59,-8 8,-8s8,3.59 8,8S16.41,20 12,20zM12,6c-3.31,0 -6,2.69 -6,6s2.69,6 6,6s6,-2.69 6,-6S15.31,6 12,6z" />
                            </svg>
                          )}
                          {item.title === '入園のご案内' && (
                            <svg className="w-full h-full transition-all duration-200 ease-out group-hover:opacity-75" viewBox="0 0 24 24" fill="#f2c94c">
                              <path d="M2 12c2 1.5 4 1.5 6 0s4-1.5 6 0 4 1.5 6 0 4-1.5 6 0" stroke="#f2c94c" strokeWidth="2" fill="none" />
                            </svg>
                          )}
                          {item.title === '子育て支援' && (
                            <svg className="w-full h-full transition-all duration-200 ease-out group-hover:opacity-75" viewBox="0 0 24 24" fill="#73a9e5">
                              <path d="M12,2C6.48,2 2,6.48 2,12s4.48,10 10,10s10,-4.48 10,-10S17.52,2 12,2zM12,20c-4.41,0 -8,-3.59 -8,-8s3.59,-8 8,-8s8,3.59 8,8S16.41,20 12,20zM12,6c-3.31,0 -6,2.69 -6,6s2.69,6 6,6s6,-2.69 6,-6S15.31,6 12,6z" />
                            </svg>
                          )}
                        </div>
                        {/* テキスト */}
                        <span className="relative after:content-[''] after:absolute after:left-1/2 after:-translate-x-1/2 after:bottom-0 after:h-[2px] after:w-0 after:bg-[#e6a64b] after:transition-all after:duration-300 after:ease-out hover:after:w-full">
                          {item.title}
                        </span>
                      </div>
                    </button>
                  </>
                ) : (
                  <Link
                    href={item.href}
                    className="group relative px-3 py-[6px] text-[16px] font-medium text-atago-text tracking-wide leading-[1.6] transition-all duration-300 ease-out flex flex-col items-center justify-center whitespace-nowrap"
                  >
                    <div className="flex flex-col items-center space-y-[3px]">
                      {/* アイコン */}
                      <div className="w-[21px] h-[21px] md:w-[22px] md:h-[22px] flex items-center justify-center">
                        {item.title === '10の魅力' && (
                          <svg className="w-full h-full transition-all duration-200 ease-out group-hover:opacity-75" viewBox="0 0 24 24" fill="#f9c87a">
                            <circle cx="12" cy="12" r="8" />
                          </svg>
                        )}
                        {item.title === 'よくある質問' && (
                          <svg className="w-full h-full transition-all duration-200 ease-out group-hover:opacity-75" viewBox="0 0 24 24" fill="#c1a0bc">
                            <polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26" />
                          </svg>
                        )}
                      </div>
                      {/* テキスト */}
                      <span className="relative after:content-[''] after:absolute after:left-1/2 after:-translate-x-1/2 after:bottom-0 after:h-[2px] after:w-0 after:bg-[#e6a64b] after:transition-all after:duration-300 after:ease-out hover:after:w-full">
                        {item.title}
                      </span>
                    </div>
                  </Link>
                )}
              </div>
            ))}
          </div>

          {/* CTAボタン（お問い合わせ） */}
          <div className="hidden lg:flex items-center">
            <Link
              href="/contact"
              className="ml-10 px-6 py-[10px] rounded-full text-sm font-semibold text-white bg-gradient-to-r from-[#f9c87a] to-[#e6a64b] shadow-sm hover:opacity-90 transition-all duration-300 ease-out whitespace-nowrap"
            >
              お問い合わせ
            </Link>
          </div>

          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-atago-text hover:text-[#e6a64b] p-2"
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
                      onClick={() => handleClickMenu(item.title)}
                      className="w-full text-left px-4 py-2 text-base font-medium text-atago-text hover:underline hover:underline-offset-4 hover:text-[#e6a64b] transition-all duration-300 ease-out flex items-center justify-between"
                    >
                      {item.title}
                      <ChevronDown
                        className={`w-4 h-4 transition-transform duration-300 ease-out ${
                          openDropdown === item.title ? 'rotate-180' : ''
                        }`}
                      />
                    </button>
                    {openDropdown === item.title && (
                      <div className="ml-4 mt-1 space-y-1 bg-gray-50 rounded-md p-2">
                        {item.submenu.map((subitem) => (
                          <Link
                            key={subitem.href}
                            href={subitem.href}
                            className="block px-4 py-2 text-sm text-atago-text hover:bg-white hover:text-[#e6a64b] rounded-md transition-colors"
                            onClick={() => {
                              setMobileMenuOpen(false);
                              setOpenDropdown(null);
                            }}
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
                    className="block px-4 py-2 text-base font-medium text-atago-text hover:underline hover:underline-offset-4 hover:text-[#e6a64b] transition-all duration-300 ease-out"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.title}
                  </Link>
                )}
              </div>
            ))}
            {/* モバイルメニューにお問い合わせボタンを追加 */}
            <div className="pt-4 border-t border-gray-200">
              <Link
                href="/contact"
                className="block w-full text-center px-6 py-3 text-sm font-semibold text-white bg-gradient-to-r from-[#f9c87a] to-[#e6a64b] rounded-full hover:opacity-90 transition-all duration-300 ease-out"
                onClick={() => setMobileMenuOpen(false)}
              >
                お問い合わせ
              </Link>
            </div>
          </div>
        </div>
      )}
      
      {/* サブメニュー（ナビゲーション直下に全幅表示） */}
      {openDropdown && (
        <div 
          className="relative w-full"
          onMouseEnter={handleSubMenuMouseEnter}
          onMouseLeave={handleSubMenuMouseLeave}
        >
          <div className={`submenu-container w-full border-t border-white/20 bg-gradient-to-r py-3 transition-all duration-300 ease-out ${
            hoveredMenu === openDropdown ? 'opacity-100 translate-y-0 visible' : 'opacity-0 translate-y-1 invisible'
          }`}
               style={{
                 background: `linear-gradient(to right, ${getSubmenuGradientByTitle(openDropdown).includes('from-[#f7b6b2]') ? '#f7b6b2, #eb9358' : 
                   getSubmenuGradientByTitle(openDropdown).includes('from-[#6fb79e]') ? '#6fb79e, #3c9b85' :
                   getSubmenuGradientByTitle(openDropdown).includes('from-[#f2c94c]') ? '#f2c94c, #e1a42b' :
                   getSubmenuGradientByTitle(openDropdown).includes('from-[#6b8fdc]') ? '#6b8fdc, #8d6fc9' : '#f2c94c, #e1a42b'})`
               }}>
            <div className="w-full px-10 lg:px-16">
              <div className="flex justify-center items-center space-x-8">
                {menuItems.find(item => item.title === openDropdown)?.submenu?.map((subitem) => (
                  <Link
                    key={subitem.href}
                    href={subitem.href}
                    className="relative px-6 py-2 text-[15px] font-medium text-white leading-[1.6] after:content-[''] after:absolute after:left-1/2 after:-translate-x-1/2 after:bottom-0 after:h-[2px] after:w-0 after:bg-white/80 after:transition-all after:duration-300 after:ease-out hover:after:w-full transition-all duration-300 ease-out whitespace-nowrap"
                  >
                    {subitem.title}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
      
      {/* ページごとのグラデーションバー（常時のオレンジ線は廃止） */}
    </nav>
  );
};

export default Navigation;
