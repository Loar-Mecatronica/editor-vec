import { SpinnerContainer, SpinnerDimmer } from './Spinner.styles';
import { SpinnerProps } from './Spiner.interfaces';

export const Spinner = (props: SpinnerProps) => {
  const { active } = props;
  return (
    <SpinnerDimmer active={active}>
      <SpinnerContainer />
    </SpinnerDimmer>
  );
};
