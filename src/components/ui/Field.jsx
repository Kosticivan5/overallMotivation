import TooltipIcon from "./TooltipIcon";
import { BsInfoCircleFill } from "react-icons/bs";

const Field = ({
  title,
  tooltipText,
  name,
  min,
  max,
  step,
  placeholder,
  disabled,
  icon,
  defaultValue,
  value,
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
          type="number"
          name={name}
          placeholder={placeholder}
          min={min}
          max={max}
          step={step}
          disabled={disabled}
          defaultValue={defaultValue}
          value={value}
        />
        {icon}
      </div>
    </div>
  );
};
export default Field;
