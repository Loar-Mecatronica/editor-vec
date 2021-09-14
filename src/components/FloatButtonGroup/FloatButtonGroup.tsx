import { FloatButtonGroupLayout } from './FloatButtonGroup.styles';
import { FloatButton } from '../FloatButton/FloatButton';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { FloatButtonGroupProps } from './FloatButtonGroup.interfaces';

export const FloatButtonGroup = (props: FloatButtonGroupProps) => {
  const { functions } = props;
  return (
    <FloatButtonGroupLayout>
      <FloatButton
        tooltip="Agregar"
        tooltipId="AddButton"
        backgroud="#09779c"
        textColor="white"
        handleClick={functions[0]}
      >
        <FontAwesomeIcon icon={faPlus}></FontAwesomeIcon>
      </FloatButton>
    </FloatButtonGroupLayout>
  );
};
