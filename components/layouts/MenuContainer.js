import { useState } from "react";

import { ToggleOverlayContext } from "@/contexts/overlay-context";
import MenuToggleButton from "@/components/buttons/MenuToggleButton";
import MenuSelectorButton from "@/components/buttons/MenuSelectorButton";
import Container from "@/components/layouts/Container";
import Overlay from "@/components/sections/Overlay";
import SearchBox from "@/components/widgets/SearchBox";
import MenuSelectorItem from "@/components/widgets/MenuSelectorItem";

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
      {/* Content */}
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
              <ToggleOverlayContext.Consumer>
                {({ toggleOverlay }) => (
                  <MenuSelectorButton
                    selectedMenuName={selectedMenu.displayName}
                    onButtonClicked={() => toggleOverlay("menus")}
                  />
                )}
              </ToggleOverlayContext.Consumer>
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

      {/* Overlay */}
      <ToggleOverlayContext.Consumer>
        {({ isShown, target }) =>
          target === "menus" &&
          isShown && (
            <div className="-top-7 bg-branding-dark lg:hidden fixed w-full min-h-screen">
              <Overlay>
                <div className="font-primary text-branding-accent-secondary grid w-full h-full grid-cols-2 gap-1 text-sm">
                  {menuList.map(({ id, ...rest }) => (
                    <MenuSelectorItem
                      key={id}
                      navigateTo={`/menus/${id}`}
                      {...rest}
                    />
                  ))}
                </div>
              </Overlay>
            </div>
          )
        }
      </ToggleOverlayContext.Consumer>
    </Container>
  );
}
