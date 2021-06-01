import Link from "next/link";

export default function NavLinkPromotions() {
  return (
    <Link href="/promotions">
      <a className="text-3xl text-white lg:text-xl font-primary">
        <p className="lg:leading-3">
          <span className="block text-lg lg:text-xs text-branding-accent-primary">
            get fresh
          </span>
          promotions
        </p>
      </a>
    </Link>
  );
}
