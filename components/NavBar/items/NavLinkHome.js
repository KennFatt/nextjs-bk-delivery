import Link from "next/link";

export default function NavLinkHome() {
  return (
    <Link href="/">
      <a className="text-xl text-white font-primary">home</a>
    </Link>
  );
}
