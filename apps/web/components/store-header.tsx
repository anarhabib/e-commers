import Link from "next/link";

export function StoreHeader() {
  return (
    <header className="site-header">
      <div className="section-shell header-content">
        <Link className="brand" href="/" aria-label="Flame Lenses home">
          <span className="brand-mark" aria-hidden="true">
            F
          </span>
          Flame Lenses
        </Link>
        <nav className="main-nav" aria-label="Main navigation">
          <Link href="/#products">Shop</Link>
          <a href="mailto:support@flamelenses.com">Contact</a>
        </nav>
      </div>
    </header>
  );
}
