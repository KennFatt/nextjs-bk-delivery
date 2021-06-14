import Link from "next/link";

export default function NavLinkPromotions() {
  return (
    <Link href="/promotions">
      <a className="lg:text-xl font-primary text-3xl text-white">
        <p className="lg:leading-3">
          <span className="lg:text-xs text-branding-accent-primary block text-lg">
            get fresh
          </span>
          promotions
        </p>
      </a>
    </Link>
  );
}
