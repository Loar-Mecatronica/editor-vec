import { CardBody, CardLayout } from './Card.styles';
import { CardProps } from './Card.interfaces';

export const Card = (props: CardProps) => {
  const { children, handleClick = () => {} } = props;
  return (
    <CardLayout onClick={handleClick}>
      <CardBody>{children}</CardBody>
    </CardLayout>
  );
};
