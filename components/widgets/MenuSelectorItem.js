import Link from "next/link";

export default function MenuSelectorItem({
  navigateTo,
  displayName,
  isSelected,
}) {
  return (
    <Link href={navigateTo}>
      <a
        className={`rounded-xl block w-full px-3 hover:bg-opacity-75 transition duration-200 min-h-[48px] ${
          isSelected
            ? "bg-branding-accent-primary text-white"
            : "bg-branding-accent-secondary-lighter"
        }`}>
        <div className="flex items-center h-full py-3">{displayName}</div>
      </a>
    </Link>
  );
}
