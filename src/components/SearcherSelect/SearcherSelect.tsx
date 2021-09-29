import {
  SearcherSelectInput,
  SearcherSelectLabel,
  SearcherSelectLayout,
  SearcherSelectOptions,
} from './SearcherSelect.styles';
import { SearcherSelectProps } from './SearcherSelect.interfaces';

export const SearcherSelect = (props: SearcherSelectProps) => {
  const { label = '', options } = props;
  return (
    <SearcherSelectLayout>
      <SearcherSelectLabel>{label}</SearcherSelectLabel>
      <SearcherSelectInput />
      <SearcherSelectOptions>{options.map(() => {})}</SearcherSelectOptions>
    </SearcherSelectLayout>
  );
};
