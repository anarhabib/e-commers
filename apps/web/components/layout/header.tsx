import type { ReactNode } from "react";
import Link from "next/link";
import { ShoppingCart, User } from "lucide-react";
import { navLinks } from "./nav-links";
import { MobileNav } from "./mobile-nav";
import { SearchForm } from "./search-form";

const iconLink =
  "relative rounded-sm p-2 text-secondary transition hover:bg-primary-soft hover:text-primary focus-visible:outline-2 focus-visible:outline-primary";

// `cart` is a slot: the layout can pass a cart icon with a live count later.
export function Header({ cart }: { cart?: ReactNode }) {
  return (
    <header className="sticky top-0 z-40 border-b border-secondary/10 bg-white/90 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        {/* Left: menu button (phones) + logo */}
        <div className="flex items-center gap-2">
          <MobileNav />
          <Link
            href="/"
            className="font-headline text-3xl font-black tracking-tight text-secondary"
          >
            Flame<span className="text-primary">Lenses</span>
          </Link>
        </div>

        {/* Center: navigation (desktop) */}
        <nav aria-label="Main" className="hidden md:block">
          <ul className="flex items-center gap-6 font-mono text-xs font-bold uppercase tracking-wider text-muted">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="transition hover:text-primary"
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
