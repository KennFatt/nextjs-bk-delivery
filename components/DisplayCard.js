import Link from "next/link";

export default function DisplayCard({ navigateTo, title, imageSrc }) {
  return (
    <Link href={navigateTo}>
      <a className="block">
        <div className="rounded-xl lg:p-4 flex flex-col justify-center h-full p-2 overflow-hidden bg-white shadow-xl cursor-pointer">
          {/* Image */}
          <img src={imageSrc} alt={title}></img>
          {/* Body */}
          <div className="lg:justify-between font-primary text-branding-accent-secondary lg:py-4 flex items-start justify-center py-2 space-x-2">
            <h3 className="lg:text-left lg:text-lg text-center">{title}</h3>
            <button className="lg:block bg-branding-accent-primary-darker font-secondary active:bg-branding-accent-primary-darker hover:bg-branding-accent-primary hidden px-8 py-1 font-semibold text-white rounded-md">
              ORDER
            </button>
          </div>
        </div>
      </a>
    </Link>
  );
}
