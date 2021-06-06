import { useState } from "react";
import { toDisplayName } from "@/lib/utils";

import Container from "./Container";
import DisplayCard from "./DisplayCard";
import SearchBox from "./SearchBox";
import MenuToggleButton from "./MenuToggleButton";
import MenuSelectorButton from "./MenuSelectorButton";
import SelectorMenuItem from "./SelectorMenuItem";

export default function MenuContainer({ selectedMenu, menuIds }) {
  const menuItems = selectedMenu.items;
  const selectedMenuDisplayName = toDisplayName(
    selectedMenu.id,
    selectedMenu.displayName
  );

  const [isSearchBoxShown, setSearchBoxShown] = useState(false);
  const [searchValue, setSearchvalue] = useState("");

  const onToggleButtonClicked = () => {
    setSearchBoxShown((prevValue) => !prevValue);
  };

  const onInputChange = (ev) => {
    setSearchvalue(ev.target.value.toLowerCase());
  };

  return (
    <Container title={selectedMenuDisplayName}>
      <div className="center-container lg:flex-row lg:space-y-0 flex flex-col space-y-6">
        {/* Section: Search bar and menus list */}
        <section className="lg:w-1/4 sm:px-0 w-full px-4">
          <div className="lg:space-x-0 lg:pr-10 lg:flex-col flex w-full space-x-2">
            {/* Button (mobile): toggle the search bar */}
            {/* Hidden @ large breakpoint */}
            <MenuToggleButton
              onButtonClick={onToggleButtonClicked}
              isOnSearch={isSearchBoxShown}
            />

            {/* Button and Input (mobile): menu selector button and search bar */}
            {/* Hidden @ large breakpoint */}
            {!isSearchBoxShown ? (
              <MenuSelectorButton selectedMenuName={selectedMenuDisplayName} />
            ) : (
              <SearchBox
                onInputChange={onInputChange}
                searchValue={searchValue}
              />
            )}

            {/* Input (desktop): search bar for wide screen */}
            {/* Hidden @ default breakpoint and Shown @ large breakpoint */}
            <SearchBox
              onInputChange={onInputChange}
              searchValue={searchValue}
              isForDesktop
            />

            {/* Side nav (desktop): menus list and navigation */}
            <div className="lg:block hidden mt-10">
              <ul className="font-primary text-branding-accent-secondary space-y-1 text-sm">
                {menuIds.map((menuId) => (
                  <SelectorMenuItem
                    key={menuId}
                    navigateTo={`/menus/${menuId}`}
                    displayName={toDisplayName(menuId)}
                    isSelected={menuId === selectedMenu.id}
                  />
                ))}
              </ul>

              <p className="text-sm text-gray-400">
                * <sub>Harga belum termasuk pajak</sub>
              </p>
            </div>
          </div>
        </section>
        {/* !Section: Search bar and menus list */}

        {/* Section: Menu's items grid */}
        <section className="lg:w-3/4 sm:px-0 w-full px-4">
          <div className="lg:grid-cols-2 lg:gap-4 grid w-full grid-cols-1 gap-3">
            {menuItems.map(
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
        </section>
        {/* !Section: Menu's items grid */}
      </div>
    </Container>
  );
}
