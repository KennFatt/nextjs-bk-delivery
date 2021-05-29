import Link from "next/link";

import HamburgerMenuIcon from "@/vectors/hamburger-menu.svg";
import ShoppingCartIcon from "@/vectors/shopping-cart.svg";

export default function NavBar() {
  return (
    <header className="sticky top-0">
      <nav className="flex items-center justify-between shadow-lg h-13 bg-branding-dark">
        {/* Hamburger Button */}
        <div className="flex items-center justify-center h-full w-13 cursor-pointer">
          <HamburgerMenuIcon className="w-7 h-7 text-branding-accent-primary-darker" />
        </div>

        {/* Branding Logo */}
        <Link href="/">
          <a>
            <img
              className="w-10 h-10"
              src="https://bkdelivery.co.id/static/website/img/BK_TopLogo1x.df8014631c65.png"></img>
          </a>
        </Link>

        {/* Shopping Cart */}
        <div className="flex items-center justify-center h-full w-13 bg-branding-accent-primary-darker cursor-pointer">
          <ShoppingCartIcon className="w-8 h-8 text-white" />
        </div>
      </nav>
    </header>
  );
}
