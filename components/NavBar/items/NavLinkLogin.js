import Link from "next/link";

export default function NavLinkLogin() {
  return (
    <Link href="/login">
      <a className="text-xl text-white font-primary">login</a>
    </Link>
  );
}
