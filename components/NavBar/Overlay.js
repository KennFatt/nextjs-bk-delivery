import Link from "next/dist/client/link";

export default function Overlay({ show }) {
  return (
    <section className="min-h-[calc(100vh-3.25rem)] flex flex-col justify-center space-y-8 px-4 bg-branding-dark font-primary text-white text-3xl">
      {/* Home */}
      <Link href="/">
        <a className="">home</a>
      </Link>

      {/* Delivery Order */}
      <Link href="/menus">
        <a className="">
          <span className="block text-branding-accent-primary text-lg">
            delivery
          </span>
          order
        </a>
      </Link>

      {/* Get Fresh Promotions */}
      <Link href="/promotions">
        <a className="">
          <span className="block text-branding-accent-primary text-lg">
            get fresh
          </span>
          promotions
        </a>
      </Link>

      <hr className="border-gray" />

      {/* Login */}
      <Link href="/login">
        <a className=" text-xl">login</a>
      </Link>
    </section>
  );
}
