import { useState } from "react";
import { loadData, getMenuList } from "@/lib/data-handler";

import MenuContainer from "@/components/MenuContainer";
import DisplayCard from "@/components/DisplayCard";

export default function MenuIndexPage(props) {
  const { selectedMenu, menuList } = props;
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
  const data = await loadData();
  if (!data) {
    return { notFound: true };
  }

  const selectedMenu = data[0];
  const menuList = getMenuList(data, selectedMenu.id);

  return {
    props: { selectedMenu, menuList },
  };
}
