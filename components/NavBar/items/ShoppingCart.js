import ShoppingCartIcon from "@/vectors/shopping-cart.svg";

export default function ShoppingCart() {
  return (
    <div className="flex items-center justify-center h-full cursor-pointer w-13 bg-branding-accent-primary-darker">
      <ShoppingCartIcon className="w-8 h-8 text-white" />
    </div>
  );
}
