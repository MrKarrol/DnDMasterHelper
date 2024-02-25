import { useState } from "react";
import { Danger } from "..";

interface SelectProps {
  onChange?: (danger: Danger) => void;
}

const Select = ({ onChange }: SelectProps) => {
  const [danger, setDanger] = useState<Danger>(Danger.First);

  return (
    <select
      value={danger}
      onChange={(event) => {
        const value: Danger = event.target.value;

        setDanger(value);
        if (onChange) onChange(value);
      }}
    >
      <option value={Danger.First}>Опасность 0-4</option>
      <option value={Danger.Second}>Опасность 5-10</option>
      <option value={Danger.Third}>Опасность 11-16</option>
      <option value={Danger.Fourth}>Опасность 17+</option>
    </select>
  );
};

export default Select;
