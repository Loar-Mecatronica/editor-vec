import { useEffect, useRef, useState } from 'react';
import { SpecialSelectProps } from './SpecialSelect.interfaces';
import {
  SpecialSelectBadge,
  SpecialSelectBadgeContainer,
  SpecialSelectContainer,
  SpecialSelectInput,
  SpecialSelectLabel,
  SpecialSelectOption,
  SpecialSelectOptions,
} from './SpecialSelect.styles';
export const SpecialSelect = (props: SpecialSelectProps) => {
  const { name, label = name, options = [], onChangeData } = props;
  const [inputValue, setInputValue] = useState('');
  const [visibleOptions, setVisibleOptions] = useState(false);
  const [values, setValues] = useState<{ label: string; value: any }[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    onChangeData(values);
  }, [values, onChangeData]);

  return (
    <SpecialSelectContainer>
      <SpecialSelectLabel>{label}</SpecialSelectLabel>
      <SpecialSelectInput
        ref={inputRef}
        value={inputValue}
        onFocus={() => setVisibleOptions(true)}
        onBlur={() => setTimeout(() => setVisibleOptions(false), 200)}
        onChange={(e) => {
          setInputValue(e.currentTarget.value);
        }}
        onKeyUpCapture={(key) => {
          if (key.key === 'Enter') {
            setValues((old) => [
              ...old,
              { label: inputValue, value: inputValue },
            ]);
            setInputValue('');
            inputRef.current?.blur();
          }
        }}
      ></SpecialSelectInput>
      <SpecialSelectBadgeContainer>
        {values.map((val: any, i) => {
          return (
            <SpecialSelectBadge
              key={`badge-${i}`}
              onClick={() => {
                setValues((old) =>
                  old.filter((filt) => filt.value !== val.value)
                );
              }}
            >
              {val.label}
            </SpecialSelectBadge>
          );
        })}
      </SpecialSelectBadgeContainer>
      <SpecialSelectOptions active={visibleOptions}>
        {options
          .filter((fil) =>
            fil.label.toLowerCase().includes(inputValue.toLowerCase())
          )
          .filter((fil2) => !values.find((el) => el.value === fil2.value))
          .map((opt, i) => {
            return (
              <SpecialSelectOption
                onClick={() => {
                  if (opt.onclick) opt.onclick();
                  else {
                    setValues((old) => [
                      ...old,
                      { label: opt.label, value: opt.value },
                    ]);
                  }
                }}
                key={`optionSpecial-${i}`}
              >
                {opt.label}
              </SpecialSelectOption>
            );
          })}
      </SpecialSelectOptions>
    </SpecialSelectContainer>
  );
};
