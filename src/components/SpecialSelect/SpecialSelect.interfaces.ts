export interface SpecialSelectProps {
  label?: string;
  name: string;
  multiple?: boolean;
  fetch?: Promise<any>;
  options?: { label: string; value: any; onclick?: () => void }[];
  onChangeData: (data: { label: string; value: any }[]) => void;
}

export interface SpecialSelectOptionsProps {
  active: boolean;
}

export interface SpecialSelectOptionProps {
  selected: boolean;
}
