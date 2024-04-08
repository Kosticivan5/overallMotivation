import TooltipIcon from "./TooltipIcon";
import { BsInfoCircleFill } from "react-icons/bs";

const Field = ({
  type,
  title,
  tooltipText,
  name,
  min,
  max,
  step,
  placeholder,
  disabled,
  icon,
  defaultValue = "",
  onchange,
}) => {
  return (
    <div className="field">
      <span className="field-title">
        {title}{" "}
        <TooltipIcon text={tooltipText}>
          <BsInfoCircleFill />
        </TooltipIcon>
      </span>
      <div className="value">
        <input
          type={type}
          name={name}
          placeholder={placeholder}
          min={min}
          max={max}
          step={step}
          disabled={disabled}
          defaultValue={defaultValue}
          onChange={onchange} // Handle input change
          autoComplete="off"
        />
        {icon}
      </div>
    </div>
  );
};
export default Field;
