import Link from "next/link";

export default function NavLinkMenu() {
  return (
    <Link href="/menus">
      <a className="text-3xl text-white lg:text-xl font-primary">
        <p className="lg:leading-3">
          <span className="block text-lg lg:text-xs text-branding-accent-primary">
            delivery
          </span>
          order
        </p>
      </a>
    </Link>
  );
}
