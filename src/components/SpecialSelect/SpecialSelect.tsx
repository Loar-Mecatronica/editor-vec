import { useEffect, useRef, useState } from 'react';
import ReactTooltip from 'react-tooltip';
import { ErrorLabel } from '../InputForm/InputForm.styles';
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
  const {
    name,
    label = name,
    options = [],
    onChangeData,
    value = [],
    error,
  } = props;
  const [inputValue, setInputValue] = useState('');
  const [visibleOptions, setVisibleOptions] = useState(false);
  const [values, setValues] = useState<{ label: string; value: any }[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    onChangeData(values);
  }, [values, onChangeData]);

  useEffect(() => {
    if (value !== undefined) setValues(value);
  }, [value]);

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
      {error && <ErrorLabel>{error}</ErrorLabel>}
      <SpecialSelectBadgeContainer>
        {values.map((val: any, i) => {
          return (
            <>
              <SpecialSelectBadge
                data-tip
                data-for={val.value}
                key={`badge-${i}`}
                onClick={() => {
                  setValues((old) =>
                    old.filter((filt) => filt.value !== val.value)
                  );
                }}
              >
                {val.label}
              </SpecialSelectBadge>
              <ReactTooltip id={val.value} place="left" effect="solid">
                {val.value}
              </ReactTooltip>
            </>
          );
        })}
      </SpecialSelectBadgeContainer>
      <SpecialSelectOptions active={visibleOptions}>
        {options
          .filter((fil) =>
            fil.label.toLowerCase().includes(inputValue.toLowerCase())
          )
          .filter((fil2) => !values.find((el) => el.value === fil2.value))
          .map((opt, ind) => {
            return (
              <SpecialSelectOption
                key={`optionSpecial-${ind}`}
                onClick={() => {
                  if (opt.onclick) opt.onclick();
                  else {
                    setValues((old) => [
                      ...old,
                      { label: opt.label, value: opt.value },
                    ]);
                  }
                }}
              >
                {opt.label}
              </SpecialSelectOption>
            );
          })}
      </SpecialSelectOptions>
    </SpecialSelectContainer>
  );
};
