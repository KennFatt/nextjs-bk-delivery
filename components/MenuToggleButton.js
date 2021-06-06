import MagnifierIcon from "@/vectors/magnifier.svg";
import ChevronLeft from "@/vectors/chevron-left.svg";

export default function MenuToggleButton({ onButtonClick, isOnSearch }) {
  return (
    <button
      className="bg-branding-accent-primary-darker rounded-xl lg:hidden focus:outline-none flex items-center justify-center w-1/6 h-12 text-white"
      onClick={onButtonClick}>
      {!isOnSearch ? (
        <MagnifierIcon className="w-6 h-8" />
      ) : (
        <ChevronLeft className="w-6 h-8" />
      )}
    </button>
  );
}
