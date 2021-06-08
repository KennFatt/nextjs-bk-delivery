import Link from "next/link";
import { useState } from "react";

import HamburgerMenuButton from "./items/HamburgerMenuButton";
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
        {/* Navigation @ mobile */}
        <nav className="h-13 bg-branding-dark lg:hidden flex items-center justify-between">
          {/* Hamburger Button */}
          <HamburgerMenuButton
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

        {/* Navigation @ desktop */}
        <nav className="bg-branding-dark lg:block hidden h-20">
          <div className="center-container relative flex justify-between h-full">
            {/* Branding logo overflow container */}
            <div className="-left-24 top-2 absolute w-24 h-24">
              {/* Branding Logo */}
              <Link href="/">
                <a>
                  <img
                    className="w-full h-full"
                    src="https://bkdelivery.co.id/static/website/img/BK_TopLogo1x.df8014631c65.png"></img>
                </a>
              </Link>
            </div>
            {/* Shopping cart overflow container */}
            <div className="-right-16 absolute w-20 h-full">
              <ShoppingCart />
            </div>

            {/* Actual navigation items (flex) */}
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
          <div className="flex flex-col w-full h-full space-y-8">
            {/* Home */}
            <NavLinkHome />

            {/* Delivery Order */}
            <NavLinkMenus />

            {/* Get Fresh Promotions */}
            <NavLinkPromotions />

            <hr className="border-gray" />

            {/* Login */}
            <NavLinkLogin />
          </div>
        </Overlay>
      </OffCanvasAnimation>
    </>
  );
}
