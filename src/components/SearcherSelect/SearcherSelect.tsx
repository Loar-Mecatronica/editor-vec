import {
  SearcherSelectInput,
  SearcherSelectLabel,
  SearcherSelectLayout,
  SearcherSelectOption,
  SearcherSelectOptions,
} from './SearcherSelect.styles';
import { SearcherSelectProps } from './SearcherSelect.interfaces';
import { useEffect, useState } from 'react';

export const SearcherSelect = (props: SearcherSelectProps) => {
  const { label = '', options, onPick } = props;
  const [value, setValue] = useState(props.default.label);
  const [visibleOptions, setVisibleOptions] = useState(false);
  const [currentPicked, setCurrentPicked] = useState<any>(null);

  useEffect(() => {
    let timeoutchange: any;
    console.log(currentPicked);
    if (currentPicked) {
      timeoutchange = setTimeout(() => setValue(currentPicked.label), 191);
    }
    return () => clearTimeout(timeoutchange);
  }, [currentPicked]);

  return (
    <SearcherSelectLayout>
      <SearcherSelectLabel>{label}</SearcherSelectLabel>
      <SearcherSelectInput
        value={value}
        onChange={(e) => setValue(e.currentTarget.value)}
        onFocus={() => {
          setValue('');
          setVisibleOptions(true);
        }}
        onBlur={() => {
          setTimeout(() => {
            if (currentPicked) setValue(currentPicked.label);
            else setValue(props.default.label);
            setVisibleOptions(false);
          }, 190);
        }}
      />
      <SearcherSelectOptions visible={visibleOptions}>
        {options
          .filter((f) =>
            f.label.toLocaleLowerCase().includes(value.toLocaleLowerCase())
          )
          .map((o, i) => {
            if (o.default) setValue(o.label);
            return (
              <SearcherSelectOption
                key={`optionsSelect${i}`}
                onClick={() => {
                  setCurrentPicked(o);
                  setValue(o.label);
                  onPick(o);
                }}
              >
                {o.label}
              </SearcherSelectOption>
            );
          })}
      </SearcherSelectOptions>
    </SearcherSelectLayout>
  );
};
