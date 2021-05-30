export default function DisplayCard({ title, imageSrc }) {
  return (
    <div className="overflow-hidden bg-white shadow-xl rounded-xl cursor-pointer flex flex-col justify-center p-2">
      {/* Image */}
      <img src={imageSrc} alt={title}></img>
      {/* Body */}
      <div className="flex flex-col items-center justify-center font-primary text-branding-accent-secondary py-2 lg:py-4">
        <p className="text-center">{title}</p>
      </div>
    </div>
  );
}
