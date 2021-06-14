import Link from "next/link";

export default function DisplayCard({
  navigateTo,
  title,
  imageSrc,
  productPrice,
}) {
  const cardTypeClass = productPrice ? "card__product" : "card__category";

  return (
    <Link href={navigateTo}>
      <a className="block">
        <div className={`card ${cardTypeClass}`}>
          {/* Image */}
          <img src={imageSrc} alt={title}></img>
          {/* Body */}
          <div>
            {/* Title */}
            <h3>{title}</h3>

            {/* Price */}
            {productPrice && <p>{productPrice}</p>}

            {/* Button */}
            {!productPrice && (
              <button className="lg:block bg-branding-accent-primary-darker font-secondary active:bg-branding-accent-primary-darker hover:bg-branding-accent-primary hidden px-8 py-1 font-semibold text-white rounded-md">
                ORDER
              </button>
            )}
          </div>
        </div>
      </a>
    </Link>
  );
}
