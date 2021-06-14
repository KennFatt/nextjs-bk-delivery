import MagnifierIcon from "@/vectors/magnifier.svg";

export default function SearchBox({ onInputChange, isForDesktop }) {
  const conditionalClasses = !isForDesktop
    ? "lg:hidden flex"
    : "lg:flex hidden";

  // TODO: re-sync the input's value with local state?
  return (
    <div
      className={`rounded-xl lg:shadow-lg w-full h-12 overflow-hidden bg-white ${conditionalClasses}`}>
      <input
        type="text"
        className="font-secondary w-4/5 h-full p-2 placeholder-gray-300 outline-none"
        placeholder="Search menu..."
        onChange={onInputChange}
      />

      {/* TODO: Impl a handler when button got clicked? */}
      <button className="lg:bg-branding-accent-primary-darker focus:outline-none flex items-center justify-center w-1/5 h-full">
        <MagnifierIcon className="lg:text-white w-5 h-6 text-gray-400" />
      </button>
    </div>
  );
}
