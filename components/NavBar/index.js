import Link from "next/link";
import { useState } from "react";

import HamburgerMenu from "./items/HamburgerMenu";
import ShoppingCart from "./items/ShoppingCart";
import NavLinkHome from "./items/NavLinkHome";
import NavLinkLogin from "./items/NavLinkLogin";
import NavLinkMenus from "./items/NavLinkMenus";
import NavLinkPromotions from "./items/NavLinkPromotions";

import Overlay from "@/components/Overlay";
import OffCanvasAnimation from "@/components/animations/OffcanvasAnimation";

export default function NavBar() {
  const [isOverlayShown, setIsOverlayShown] = useState(false);

  // TODO: Make the Overlay toggler to be generic component
  const onToggleOverlay = () => {
    setIsOverlayShown((prev) => !prev);
  };

  return (
    <>
      {/* Navigation */}
      <header
        className={`sticky top-0 z-50 lg:static ${
          !isOverlayShown ? "shadow-lg" : ""
        }`}>
        <nav className="flex items-center justify-between h-13 bg-branding-dark lg:hidden">
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

        <nav className="hidden h-20 bg-branding-dark lg:block">
          <div className="flex justify-between h-full center-container">
            {/* Left items */}
            <div className="flex items-center space-x-8">
              {/* Delivery Order */}
              <NavLinkMenus />

              {/* Get Fresh Promotions */}
              <NavLinkPromotions />
            </div>

            {/* Right items */}
            <div className="flex items-center space-x-8">
              {/* Login */}
              <NavLinkLogin />
            </div>
          </div>
        </nav>
      </header>

      {/* Overlay */}
      <OffCanvasAnimation show={isOverlayShown}>
        <Overlay>
          <>
            {/* Home */}
            <NavLinkHome />

            {/* Delivery Order */}
            <NavLinkMenus />

            {/* Get Fresh Promotions */}
            <NavLinkPromotions />

            <hr className="border-gray" />

            {/* Login */}
            <NavLinkLogin />
          </>
        </Overlay>
      </OffCanvasAnimation>
    </>
  );
}
