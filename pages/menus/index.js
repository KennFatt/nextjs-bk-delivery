import { useState } from "react";
import { fetchData, transformData } from "@/lib/data-handler";

import MenuContainer from "@/components/MenuContainer";
import DisplayCard from "@/components/DisplayCard";

export default function MenuIndexPage({ selectedMenu, menuList }) {
  const [searchValue, setSearchValue] = useState("");

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

export async function getStaticProps() {
  const data = await fetchData();
  if (!data) {
    return { notFound: true };
  }

  const { menus } = transformData(data);

  const selectedMenu = menus[0];
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
