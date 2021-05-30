export default function DisplayCard({ title, imageSrc }) {
  return (
    <div className="w-56 mx-1 my-1 overflow-hidden bg-white shadow-xl rounded-xl cursor-pointer">
      {/* Image */}
      <img src={imageSrc} alt={title}></img>
      {/* Body */}
      <div className="flex flex-col items-center justify-center h-16 text-xl font-primary text-branding-accent-secondary">
        <p className="text-center">{title}</p>
      </div>
    </div>
  );
}
