export interface SearcherSelectProps {
  label: string;
  options: { label: string; value: any; default?: boolean }[];
  onPick: (value: { label: string; value: any; default?: boolean }) => void;
  default?: any;
}

export interface SearcherSelectOptionsProps {
  visible: boolean;
}
