import { FloatButtonLayout } from './FloatButton.styles';
import { FloatButtonProps } from './FloatButton.interfaces';

import ReactTooltip from 'react-tooltip';

export const FloatButton = (props: FloatButtonProps) => {
  const { children, backgroud, textColor, handleClick, tooltip, tooltipId } =
    props;
  return (
    <>
      <FloatButtonLayout
        data-tip
        data-for={tooltipId}
        backgroud={backgroud}
        textColor={textColor}
        onClick={handleClick}
      >
        {children}
      </FloatButtonLayout>
      <ReactTooltip id={tooltipId} place="left" effect="solid">
        {tooltip}
      </ReactTooltip>
    </>
  );
};
