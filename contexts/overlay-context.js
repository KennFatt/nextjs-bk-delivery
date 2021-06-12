import { createContext, useReducer } from "react";

const overlayToggleReducer = (state, action) => {
  switch (action.type) {
    case "nav":
      return { isShown: !state.isShown, target: "nav" };
    case "menus":
      return { isShown: !state.isShown, target: "menus" };
  }
};

export const ToggleOverlayContext = createContext(false);

export function ToggleOverlayProvider(props) {
  const [state, dispatch] = useReducer(overlayToggleReducer, {
    isShown: false,
    target: "nav",
  });

  /**
   * @param {"nav"|"menus"} type
   */
  const dispatcher = (type) => {
    dispatch({ type });
  };

  const contextValue = {
    isShown: state.isShown,
    target: state.target,
    toggleOverlay: dispatcher,
  };

  return (
    <ToggleOverlayContext.Provider value={contextValue}>
      {props.children}
    </ToggleOverlayContext.Provider>
  );
}
