export default function DisplayCard({ title, imageSrc }) {
  return (
    <div className="overflow-hidden bg-white shadow-xl rounded-xl flex flex-col justify-center p-2 lg:p-4">
      {/* Image */}
      <img src={imageSrc} alt={title}></img>
      {/* Body */}
      <div className="flex justify-center lg:justify-between items-start font-primary text-branding-accent-secondary py-2 lg:py-4">
        <p className="text-center lg:text-left lg:text-lg lg:pr-4">{title}</p>
        <button className="hidden lg:block py-1 px-10 rounded-md bg-branding-accent-primary-darker font-secondary text-white font-semibold active:bg-branding-accent-primary">
          ORDER
        </button>
      </div>
    </div>
  );
}
