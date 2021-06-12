import { useState, useEffect } from "react";

export default function OffCanvasAnimation({ show, children }) {
  const [shouldRender, setShouldRender] = useState(false);

  useEffect(() => {
    if (show) {
      setShouldRender(true);
    }
  }, [show]);

  const onAnimationEnd = () => {
    if (!show) {
      setShouldRender(false);
    }
  };

  return (
    shouldRender && (
      <div
        className="fixed top-0 w-full"
        style={{ animation: `${show ? "TopToBottom" : "BottomToTop"} 500ms` }}
        onAnimationEnd={onAnimationEnd}>
        {children}
      </div>
    )
  );
}
