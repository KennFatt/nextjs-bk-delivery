import ShoppingCartIcon from "@/vectors/shopping-cart.svg";

export default function ShoppingCart() {
  return (
    <div className="w-13 lg:w-full bg-branding-accent-primary-darker flex items-center justify-center h-full cursor-pointer">
      <ShoppingCartIcon className="lg:w-10 lg:h-10 w-8 h-8 text-white" />
    </div>
  );
}
