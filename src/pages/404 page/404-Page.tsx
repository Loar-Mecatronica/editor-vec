import { useHistory } from 'react-router';
import { BackMenuButton, Page404Layout, TitleText } from './404-Page.styles';

export const Page404 = () => {
  const history = useHistory();
  return (
    <Page404Layout>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <TitleText>404 - Página no encontrada</TitleText>
        <BackMenuButton onClick={() => history.replace('/')}>
          Volver al Inicio
        </BackMenuButton>
      </div>
    </Page404Layout>
  );
};
