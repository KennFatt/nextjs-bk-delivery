import { useState } from "react";

import Container from "./Container";
import SearchBox from "./SearchBox";
import MenuToggleButton from "./MenuToggleButton";
import MenuSelectorButton from "./MenuSelectorButton";
import MenuSelectorItem from "./MenuSelectorItem";

export default function MenuContainer({
  title,
  menuList,
  showSearchToggler,
  onSearchInputChange,
  ...props
}) {
  const [isSearchBoxShown, setSearchBoxShown] = useState(false);

  /** HACK: it could be a performance issue */
  const selectedMenu = menuList.find((menu) => menu.isSelected);

  const onToggleButtonClicked = () => {
    setSearchBoxShown((prevValue) => !prevValue);
  };

  const onInputChange = (ev) => {
    if (!onSearchInputChange) {
      return;
    }

    onSearchInputChange(ev.target.value.toLowerCase());
  };

  return (
    <Container title={title}>
      <div className="center-container lg:flex-row lg:space-y-0 flex flex-col space-y-6">
        {/* Section: Search bar and menus list */}
        <section className="lg:w-1/4 sm:px-0 w-full px-3">
          <div className="lg:space-x-0 lg:pr-10 lg:flex-col flex w-full space-x-2">
            {/* Button (mobile): toggle the search bar */}
            {/* Hidden @ large breakpoint */}
            {showSearchToggler && (
              <MenuToggleButton
                onButtonClick={onToggleButtonClicked}
                isOnSearch={isSearchBoxShown}
              />
            )}

            {/* Button and Input (mobile): menu selector button and search bar */}
            {/* Hidden @ large breakpoint */}
            {!isSearchBoxShown ? (
              <MenuSelectorButton selectedMenuName={selectedMenu.displayName} />
            ) : (
              <SearchBox onInputChange={onInputChange} />
            )}

            {/* Input (desktop): search bar for wide screen */}
            {/* Hidden @ default breakpoint and Shown @ large breakpoint */}
            <SearchBox onInputChange={onInputChange} isForDesktop />

            {/* Side nav (desktop): menus list and navigation */}
            <div className="lg:block hidden mt-10">
              <ul className="font-primary text-branding-accent-secondary space-y-1 text-sm">
                {menuList.map(({ id, ...rest }) => (
                  <MenuSelectorItem
                    key={id}
                    navigateTo={`/menus/${id}`}
                    {...rest}
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

        {/* Section: Actual content */}
        <section className="lg:w-3/4 sm:px-0 w-full px-3">
          {props.children}
        </section>
        {/* !Section: Actual content */}
      </div>
    </Container>
  );
}
