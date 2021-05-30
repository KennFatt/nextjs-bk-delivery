import HamburgerMenuIcon from "@/vectors/hamburger-menu.svg";
import HamburgerMenuCloseIcon from "@/vectors/hamburger-close.svg";

export default function HamburgerMenu({ isOverlayShown, onToggleOverlay }) {
  return (
    <div
      className="flex items-center justify-center h-full w-13 cursor-pointer"
      onClick={onToggleOverlay}>
      {isOverlayShown ? (
        <HamburgerMenuCloseIcon className="w-7 h-7 text-branding-accent-primary-darker" />
      ) : (
        <HamburgerMenuIcon className="w-7 h-7 text-branding-accent-primary-darker" />
      )}
    </div>
  );
}
