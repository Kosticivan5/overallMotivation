import { useState } from "react";

const TooltipIcon = ({ text, children }) => {
  const [isVisible, setIsVisible] = useState(false);

  const handleMouseEnter = () => {
    setIsVisible(true);
  };

  const handleMouseLeave = () => {
    setIsVisible(false);
  };

  return (
    <div className="tooltip-container">
      <span onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        {children}
      </span>

      <div className={`tooltip ${isVisible ? "visible" : ""}`}>{text}</div>
    </div>
  );
};
export default TooltipIcon;
