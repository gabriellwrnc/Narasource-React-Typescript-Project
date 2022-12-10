import React, { useState } from "react";
import { RiArrowDropDownLine } from "react-icons/ri";
import "./MultiSelect.css";

export interface SelectOption {
  label: string;
  value: string | number;
}

interface MultipleSelectProps {
  multiple: true;
  value: SelectOption[];
  onChange: (value: SelectOption[]) => void;
}

interface SingleSelectProps {
  multiple?: false;
  value?: SelectOption;
  onChange: (value: SelectOption | undefined) => void;
}

type SelectProps = {
  options: SelectOption[];
} & (SingleSelectProps | MultipleSelectProps);

const MultiSelect: React.FC<SelectProps> = (props) => {
  const [hide, setHide] = useState<boolean>(true);
  const clearOption = () => {
    props.multiple ? props.onChange([]) : props.onChange(undefined);
  };

  const selectOption = (option: SelectOption) => {
    if (props.multiple) {
      if (props.value.includes(option)) {
        props.onChange(props.value.filter((o) => o !== option));
      } else {
        props.onChange([...props.value, option]);
      }
    } else {
      if (option !== props.value) props.onChange(option);
    }
  };

  const isOptionSelected = (option: SelectOption) => {
    return props.multiple
      ? props.value.includes(option)
      : option === props.value;
  };

  return (
    <div
      onClick={() => setHide((prev) => !prev)}
      onBlur={() => setHide(true)}
      tabIndex={0}
      className="multiselect-wrapper"
    >
      <span className="multiselect-value">
        {props.multiple
          ? props.value.map((v) => (
              <button
                key={v.value}
                onClick={(e) => {
                  e.stopPropagation();
                  selectOption(v);
                }}
                className="option-multiple"
              >
                {v.label} <span className="remove-multiple">&times;</span>
              </button>
            ))
          : props.value?.label}
      </span>
      <button
        className="clr-btn"
        onClick={(e) => {
          e.stopPropagation();
          clearOption();
        }}
      >
        &times;
      </button>
      <div className="divider"></div>
      <RiArrowDropDownLine className="multiselect-dropdown" />
      <ul className={`option ${hide ? "hide" : ""}`}>
        {props.options.map((option) => (
          <li
            onClick={(e) => {
              e.stopPropagation();
              selectOption(option);
              setHide(true);
            }}
            key={option.value}
            className="option-value"
          >
            {option.label}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MultiSelect;
