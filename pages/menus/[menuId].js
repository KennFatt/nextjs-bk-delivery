import { useState } from "react";
import { loadData, getMenuById, getMenuList } from "@/lib/data-handler";

import MenuContainer from "@/components/MenuContainer";
import DisplayCard from "@/components/DisplayCard";

// TODO: both this page and `/menus` share the exact same similarity
// find out how to eliminate and prevent code duplication
export default function MenuPage(props) {
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

export async function getStaticPaths() {
  /** Genereate all known menus */
  const menuIds = (await loadData()).map((data) => ({
    params: {
      menuId: data.id,
    },
  }));

  return {
    paths: menuIds,
    fallback: false,
  };
}

export async function getStaticProps(context) {
  const data = await loadData();
  if (!data) {
    return { notFound: true };
  }

  const selectedMenu = getMenuById(data, context.params.menuId);
  const menuList = getMenuList(data, selectedMenu.id);

  return {
    props: { selectedMenu, menuList },
  };
}
