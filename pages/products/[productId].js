import { useState } from "react";
import { fetchData, transformData } from "@/lib/data-handler";

import MenuContainer from "@/components/MenuContainer";

export default function ProductPage({ menuList, productDetail }) {
  const [productQuantity, setProductQuantity] = useState(1);

  const quantityButtonHandler = (action) => {
    return () => {
      setProductQuantity((prevValue) => {
        const newValue = action < 0 ? prevValue - 1 : prevValue + 1;

        return Math.max(newValue, 1);
      });
    };
  };
  const decreaseQuantity = quantityButtonHandler(-1);
  const increaseQuantity = quantityButtonHandler(1);

  return (
    <MenuContainer title={productDetail.name} menuList={menuList}>
      <div className="rounded-xl flex px-5 py-10 overflow-hidden bg-white shadow-lg">
        {/* Product detail card */}
        <div className="lg:w-2/3 flex flex-col items-center w-full space-y-8">
          <h2 className="font-primary text-branding-accent-secondary text-2xl text-center">
            {productDetail.name}
          </h2>
          <img
            className="object-scale-down"
            src={productDetail.imageUrl}
            alt={productDetail.name}
          />
        </div>

        {/* Product quantity selector @ desktop */}
        <div className="lg:block font-secondary hidden w-1/3 px-4 space-y-4">
          {/* Price */}
          <h3 className="text-2xl">{productDetail.price}</h3>

          <div className="flex items-center justify-center overflow-hidden border border-gray-200 rounded-md">
            <button
              className="text-branding-accent-primary-darker focus:outline-none w-2/5 py-1 text-lg"
              onClick={decreaseQuantity}>
              -
            </button>
            <input
              className="w-1/5 text-center bg-transparent border-none outline-none"
              type="text"
              maxLength="2"
              disabled
              value={productQuantity}
            />
            <button
              className="text-branding-accent-primary-darker focus:outline-none w-2/5 py-1 text-lg"
              onClick={increaseQuantity}>
              +
            </button>
          </div>
          {/* Add to cart Button */}
          <button className="bg-branding-accent-primary-darker hover:bg-branding-accent-primary active:bg-branding-accent-primary-darker sm:text-base w-full py-2 text-sm text-white rounded-md">
            ADD TO CART
          </button>
        </div>
      </div>

      {/* Fixed quantity selector @ mobile */}
      <div className="lg:hidden font-secondary fixed bottom-0 left-0 flex items-center justify-between w-full h-16 p-4 text-gray-600 bg-white border-t border-gray-300">
        {/* Price */}
        <p>{productDetail.price}</p>

        {/* Counter */}
        <div className="flex items-center justify-end space-x-2">
          <div className="flex items-center justify-center w-1/3 overflow-hidden border border-gray-200 rounded-md">
            <button
              className="text-branding-accent-primary-darker focus:outline-none flex-1 py-1 text-lg border border-gray-200"
              onClick={decreaseQuantity}>
              -
            </button>
            <input
              className="w-1/5 text-center bg-transparent border-none outline-none"
              type="text"
              maxLength="2"
              disabled
              value={productQuantity}
            />
            <button
              className="text-branding-accent-primary-darker focus:outline-none flex-1 py-1 text-lg border border-gray-200"
              onClick={increaseQuantity}>
              +
            </button>
          </div>
          {/* Add to cart Button */}
          <button className="bg-branding-accent-primary-darker hover:bg-branding-accent-primary active:bg-branding-accent-primary-darker sm:text-base px-2 py-1 text-sm text-white rounded-md">
            ADD TO CART
          </button>
        </div>
      </div>
    </MenuContainer>
  );
}

export async function getStaticPaths() {
  const productIds = transformData(await fetchData()).products.map(
    ({ id }) => ({ params: { productId: id } })
  );

  return {
    paths: productIds,
    fallback: false,
  };
}

export async function getStaticProps(context) {
  const data = await fetchData();
  if (!data) {
    return { notFound: true };
  }

  const { menus, products } = transformData(data);

  const productDetail = products.find(
    ({ id }) => context.params.productId === id
  );
  if (!productDetail) {
    return { notFound: true };
  }

  const menuList = menus.map(({ id, displayName }) => {
    return productDetail.menuId === id
      ? { id, displayName, isSelected: true }
      : { id, displayName };
  });

  return {
    props: { menuList, productDetail },
    revalidate: 60,
  };
}
