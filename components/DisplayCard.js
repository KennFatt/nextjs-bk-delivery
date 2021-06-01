export default function DisplayCard({ title, imageSrc }) {
  return (
    <div className="flex flex-col justify-center p-2 overflow-hidden bg-white shadow-xl rounded-xl lg:p-4">
      {/* Image */}
      <img src={imageSrc} alt={title}></img>
      {/* Body */}
      <div className="flex items-start justify-center py-2 lg:justify-between font-primary text-branding-accent-secondary lg:py-4">
        <p className="text-center lg:text-left lg:text-lg lg:pr-4">{title}</p>
        <button className="hidden px-10 py-1 font-semibold text-white rounded-md lg:block bg-branding-accent-primary-darker font-secondary active:bg-branding-accent-primary">
          ORDER
        </button>
      </div>
    </div>
  );
}
