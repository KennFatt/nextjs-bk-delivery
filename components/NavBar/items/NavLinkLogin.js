import Link from "next/link";

export default function NavLinkLogin() {
  return (
    <Link href="/accounts/login">
      <a className="font-primary text-xl text-white">login</a>
    </Link>
  );
}
