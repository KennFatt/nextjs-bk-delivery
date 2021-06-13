import { useState } from "react";
import { useRouter } from "next/router";
import { transformData, fetchData } from "@/lib/data-handler";

import FallbackContainer from "@/components/FallbackContainer";
import MenuContainer from "@/components/MenuContainer";
import DisplayCard from "@/components/DisplayCard";

// TODO: both this page and `/menus` share the exact same similarity
// find out how to eliminate and prevent code duplication
export default function MenuPage({ selectedMenu, menuList }) {
  const router = useRouter();
  const [searchValue, setSearchValue] = useState("");

  if (router.isFallback) {
    return <FallbackContainer />;
  }

  const onSearch = (lowerCasedValue) => {
    setSearchValue(lowerCasedValue);
  };

  return (
    <MenuContainer
      title={selectedMenu.displayName}
      menuList={menuList}
      onSearchInputChange={onSearch}
      showSearchToggler>
      <div className="lg:grid-cols-2 lg:gap-4 grid w-full grid-cols-1 gap-3">
        {selectedMenu.items.map(
          ({ id, imageUrl, name, price }) =>
            name.toLowerCase().includes(searchValue) && (
              <DisplayCard
                key={id}
                navigateTo={`/products/${id}`}
                title={name}
                imageSrc={imageUrl}
                productPrice={price}
              />
            )
        )}
      </div>
    </MenuContainer>
  );
}

export async function getStaticPaths() {
  const menuIds = transformData(await fetchData()).menus.map(({ id }) => ({
    params: { menuId: id },
  }));

  return {
    paths: menuIds,
    fallback: true,
  };
}

export async function getStaticProps(context) {
  const data = await fetchData();
  if (!data) {
    return { notFound: true };
  }

  const { menus } = transformData(data);

  const selectedMenu = menus.find(({ id }) => context.params.menuId === id);
  const menuList = menus.map(({ id, displayName }) => {
    return selectedMenu.id === id
      ? { id, displayName, isSelected: true }
      : { id, displayName };
  });

  return {
    props: { selectedMenu, menuList },
    revalidate: 60,
  };
}
