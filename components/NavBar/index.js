import Link from "next/link";

import HamburgerMenu from "./HamburgerMenu";
import ShoppingCart from "./ShoppingCart";

export default function NavBar() {
  return (
    <header className="sticky top-0">
      <nav className="flex items-center justify-between shadow-lg h-13 bg-branding-dark">
        {/* Hamburger Button */}
        <HamburgerMenu />

        {/* Branding Logo */}
        <Link href="/">
          <a>
            <img
              className="w-10 h-10"
              src="https://bkdelivery.co.id/static/website/img/BK_TopLogo1x.df8014631c65.png"></img>
          </a>
        </Link>

        {/* Shopping Cart */}
        <ShoppingCart />
      </nav>
    </header>
  );
}
