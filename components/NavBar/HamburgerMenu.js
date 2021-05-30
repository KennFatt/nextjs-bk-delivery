import HamburgerMenuIcon from "@/vectors/hamburger-menu.svg";

export default function HamburgerMenu() {
  return (
    <div className="flex items-center justify-center h-full w-13 cursor-pointer">
      <HamburgerMenuIcon className="w-7 h-7 text-branding-accent-primary-darker" />
    </div>
  );
}
