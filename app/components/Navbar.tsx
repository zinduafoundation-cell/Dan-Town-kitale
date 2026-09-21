"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

const navItems = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Products", href: "/products" },
  { name: "Services", href: "/services" },
  { name: "Brands", href: "/brands" },
  { name: "Gallery", href: "/gallery" },
  { name: "Blog", href: "/blog" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    function handleScroll() {
      setScrolled(window.scrollY > 30);
    }

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  function isActive(href: string) {
    if (href === "/") {
      return pathname === "/";
    }

    return pathname.startsWith(href);
  }

  return (
    <>
      {/* ================= NAVBAR ================= */}

      <header className="fixed left-0 right-0 top-0 z-50 px-3 py-3 md:px-6">
        <nav
          className={`mx-auto max-w-7xl rounded-2xl border transition-all duration-300 ${
            scrolled
              ? "border-orange-500/20 bg-black/95"
              : "border-white/10 bg-black/80"
          }`}
        >
          <div className="flex h-16 items-center justify-between px-4 md:h-20 md:px-6">

            {/* LOGO */}

            <Link href="/" className="flex items-center gap-3">

              <div className="flex h-10 w-10 items-center justify-center rounded-full border border-orange-500/40 bg-orange-500/10">
                <span className="text-lg font-black text-orange-400">
                  D
                </span>
              </div>

              <div className="hidden sm:block">
                <div className="text-sm font-black tracking-wide text-white">
                  DANTOWN
                </div>

                <div className="text-[7px] font-bold tracking-[3px] text-orange-400">
                  ELECTRICAL KITALE
                </div>
              </div>

            </Link>


            {/* DESKTOP NAV */}

            <div className="hidden items-center gap-1 lg:flex">

              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`relative rounded-lg px-3 py-3 text-[10px] font-bold uppercase tracking-wide transition-colors ${
                    isActive(item.href)
                      ? "text-orange-400"
                      : "text-white/60 hover:text-white"
                  }`}
                >
                  {item.name}

                  {isActive(item.href) && (
                    <span className="absolute bottom-1 left-1/2 h-0.5 w-5 -translate-x-1/2 rounded-full bg-orange-500" />
                  )}
                </Link>
              ))}

            </div>


            {/* DESKTOP QUOTE */}

            <Link
              href="/request-quote"
              className="hidden rounded-full bg-orange-500 px-5 py-3 text-[9px] font-black tracking-wider text-black transition hover:bg-orange-400 lg:block"
            >
              REQUEST QUOTE
            </Link>


            {/* MOBILE MENU BUTTON */}

            <button
              type="button"
              aria-label="Toggle menu"
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen(!menuOpen)}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 lg:hidden"
            >
              <div className="flex flex-col gap-1.5">

                <span
                  className={`h-0.5 w-5 bg-white transition ${
                    menuOpen ? "translate-y-2 rotate-45" : ""
                  }`}
                />

                <span
                  className={`h-0.5 w-5 bg-orange-400 transition ${
                    menuOpen ? "opacity-0" : ""
                  }`}
                />

                <span
                  className={`h-0.5 w-5 bg-white transition ${
                    menuOpen ? "-translate-y-2 -rotate-45" : ""
                  }`}
                />

              </div>
            </button>

          </div>
        </nav>
      </header>


      {/* ================= MOBILE MENU ================= */}

      {menuOpen && (
        <div className="fixed inset-0 z-40 bg-black lg:hidden">

          <div className="h-full overflow-y-auto px-6 pb-10 pt-28">

            <div className="mb-8">
              <p className="text-[9px] font-bold tracking-[4px] text-orange-400">
                DANTOWN ELECTRICAL KITALE
              </p>

              <p className="mt-2 text-xs text-white/40">
                Electrical • Solar • Energy Solutions
              </p>
            </div>


            {/* LINKS */}

            <div className="border-t border-white/10">

              {navItems.map((item, index) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`flex items-center justify-between border-b border-white/10 py-5 ${
                    isActive(item.href)
                      ? "text-orange-400"
                      : "text-white"
                  }`}
                >

                  <div className="flex items-center gap-5">

                    <span className="text-[9px] text-white/20">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <span className="text-xl font-bold">
                      {item.name}
                    </span>

                  </div>

                  <span className="text-white/30">
                    →
                  </span>

                </Link>
              ))}

            </div>


            {/* REQUEST QUOTE */}

            <Link
              href="/request-quote"
              className="mt-8 flex items-center justify-between rounded-full bg-orange-500 px-6 py-4 text-xs font-black text-black"
            >
              <span>REQUEST A QUOTE</span>
              <span>→</span>
            </Link>


            {/* CONTACT */}

            <div className="mt-6 grid grid-cols-2 gap-3">

              <a
                href="tel:0745917655"
                className="rounded-xl border border-white/10 bg-white/5 p-4"
              >
                <span className="text-[8px] font-bold tracking-widest text-white/30">
                  CALL
                </span>

                <div className="mt-2 text-xs font-bold text-orange-400">
                  0745917655
                </div>
              </a>


              <a
                href="mailto:dluxsolars@gmail.com"
                className="rounded-xl border border-white/10 bg-white/5 p-4"
              >
                <span className="text-[8px] font-bold tracking-widest text-white/30">
                  EMAIL
                </span>

                <div className="mt-2 truncate text-xs font-bold text-orange-400">
                  Email Us
                </div>
              </a>

            </div>

          </div>
        </div>
      )}


      {/* MOBILE CALL BUTTON */}

      <a
        href="tel:0745917655"
        aria-label="Call Dantown Electrical Kitale"
        className="fixed bottom-5 left-5 z-30 flex h-12 w-12 items-center justify-center rounded-full border border-orange-500/30 bg-black text-orange-400 lg:hidden"
      >
        ☎
      </a>
    </>
  );
}