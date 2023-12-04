import { DetailedHTMLProps, SelectHTMLAttributes } from "react";

interface IToolbarSelectProps
  extends DetailedHTMLProps<
    SelectHTMLAttributes<HTMLSelectElement>,
    HTMLSelectElement
  > {
  options: string[];
}

export default function ToolbarSelect({
  options,
  ...props
}: IToolbarSelectProps) {
  return (
    <select {...props}>
      <option hidden={true} value="" />

      {options.map((option) => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </select>
  );
}

<option></option>;
