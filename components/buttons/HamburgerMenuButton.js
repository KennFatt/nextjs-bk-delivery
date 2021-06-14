import HamburgerMenuIcon from "@/vectors/hamburger-menu.svg";
import HamburgerMenuCloseIcon from "@/vectors/hamburger-close.svg";

export default function HamburgerMenuButton({
  isOverlayShown,
  onToggleOverlay,
}) {
  return (
    <div
      className="w-13 flex items-center justify-center h-full cursor-pointer"
      onClick={onToggleOverlay}>
      {isOverlayShown ? (
        <HamburgerMenuCloseIcon className="w-7 h-7 text-branding-accent-primary-darker" />
      ) : (
        <HamburgerMenuIcon className="w-7 h-7 text-branding-accent-primary-darker" />
      )}
    </div>
  );
}
