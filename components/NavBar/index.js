import Link from "next/link";
import { useState } from "react";

import HamburgerMenu from "./HamburgerMenu";
import ShoppingCart from "./ShoppingCart";
import Overlay from "./Overlay";
import OffCanvasAnimation from "@/components/animations/OffcanvasAnimation";

export default function NavBar() {
  const [isOverlayShown, setIsOverlayShown] = useState(false);

  const onToggleOverlay = () => {
    setIsOverlayShown((prev) => !prev);
  };

  return (
    <>
      {/* Navigation */}
      <header className="sticky top-0 z-50">
        <nav
          className={`flex items-center justify-between h-13 bg-branding-dark ${
            !isOverlayShown ? "shadow-lg" : ""
          }`}>
          {/* Hamburger Button */}
          <HamburgerMenu
            isOverlayShown={isOverlayShown}
            onToggleOverlay={onToggleOverlay}
          />

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

      {/* Overlay */}
      <OffCanvasAnimation show={isOverlayShown}>
        <Overlay />
      </OffCanvasAnimation>
    </>
  );
}
