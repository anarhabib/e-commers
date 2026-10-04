import type { ReactNode } from "react";
import Link from "next/link";
import { ShoppingCart, User } from "lucide-react";
import { navLinks } from "./nav-links";
import { MobileNav } from "./mobile-nav";
import { SearchForm } from "./search-form";

const iconLink =
  "relative rounded-lg p-2 text-slate-700 transition hover:bg-slate-100 hover:text-blue-600";

// `cart` is a slot: the layout can pass a cart icon with a live count later.
export function Header({ cart }: { cart?: ReactNode }) {
  return (
    <header className="sticky top-0 z-40 border-b border-slate-200 bg-white/90 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        {/* Left: menu button (phones) + logo */}
        <div className="flex items-center gap-2">
          <MobileNav />
          <Link
            href="/"
            className="text-xl font-black tracking-tight text-slate-900"
          >
            Flame Lenses
          </Link>
        </div>

        {/* Center: navigation (desktop) */}
        <nav aria-label="Main" className="hidden md:block">
          <ul className="flex items-center gap-6 text-sm font-medium text-slate-600">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="transition hover:text-blue-600"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Right: search, cart, profile */}
        <div className="flex items-center gap-1">
          <SearchForm className="mr-2 hidden w-56 sm:block" />
          {cart ?? (
            <Link href="/cart" aria-label="Cart" className={iconLink}>
              <ShoppingCart className="h-5 w-5" />
            </Link>
          )}
          <Link href="/login" aria-label="Account" className={iconLink}>
            <User className="h-5 w-5" />
          </Link>
        </div>
      </div>
    </header>
  );
}
