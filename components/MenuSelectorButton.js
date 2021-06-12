/**
 * @param {{ selectedMenuName: "" }} props Selected menu's display name
 */
export default function MenuSelectorButton({
  selectedMenuName,
  onButtonClicked,
}) {
  return (
    <button
      className="lg:hidden bg-branding-accent-primary rounded-xl focus:outline-none flex items-center justify-between w-full h-12 px-2"
      onClick={onButtonClicked}>
      <h2 className="font-primary text-sm text-white">{selectedMenuName}</h2>

      {/* Triangle decoration */}
      <span
        style={{
          display: "inline-block",
          borderWidth: "10px 10px 0 10px",
          borderColor: "#fff transparent transparent transparent",
        }}
      />
    </button>
  );
}
