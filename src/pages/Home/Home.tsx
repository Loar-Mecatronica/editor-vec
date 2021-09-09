import { HomeContainer, HomeLayout, HomeList, HomeTitle } from './Home.styles';

import { HomeRouter } from './Home-router';
import { useSelector } from 'react-redux';
import { AppState } from '../../store/App-state.interfaces';
import { useHistory, useParams } from 'react-router';

export const Home = () => {
  const history = useHistory();
  const opacity = useSelector((state: AppState) => state.ui.pageOpacity);
  return (
    <HomeContainer>
      <HomeLayout>
        <HomeTitle onClick={() => history.push('/')}>
          Editor Vec
          <hr />
        </HomeTitle>
        <HomeList opacity={opacity}>
          <i>{}</i>
          <HomeRouter />
        </HomeList>
      </HomeLayout>
    </HomeContainer>
  );
};
