import {
  HomeContainer,
  HomeLayout,
  HomeList,
  ItalicTitle,
} from './Home.styles';

import { HomeRouter } from './Home-router';
import { useSelector } from 'react-redux';
import { AppState } from '../../store/App-state.interfaces';
import { NavBar } from '../../components/NavBar/NavBar';
import { FloatButtonGroup } from '../../components/FloatButtonGroup/FloatButtonGroup';
import { Modal } from '../../components/Modal/Modal';
import { useRef, useState } from 'react';
import { AddEstationForm } from '../../components/AddEstationForm/AddEstationForm';
import { AddComponentForm } from '../../components/AddComponentForm/AddComponentForm';
import { AlertMessage } from '../../components/AlertMessage/AlertMessage';

export const Home = () => {
  const opacity = useSelector((state: AppState) => state.ui.pageOpacity);
  const location = useSelector((state: AppState) => state.session.location);
  const [modal, setModal] = useState(false);
  const refModal = useRef<HTMLDivElement>(null);
  const refForm = useRef<HTMLFormElement>(null);
  const alertState = useState(false);
  const [homeAlert, setHomeAlert] = useState<{
    message: string;
    type: 'success' | 'error' | 'warning' | 'info';
  }>({
    message: '',
    type: 'success',
  });
  function openModal() {
    if (refModal?.current) {
      refModal.current.style.display = 'flex';
    }
    setTimeout(() => setModal(true), 100);
  }
  return (
    <HomeContainer>
      <AlertMessage state={alertState} {...homeAlert} />
      <HomeLayout>
        <NavBar />
        <hr />
        <ItalicTitle>{location}</ItalicTitle>
        <HomeList opacity={opacity}>
          <HomeRouter />
        </HomeList>
      </HomeLayout>
      <FloatButtonGroup functions={[openModal]} />
      <Modal
        title={`Agregar ${
          location === 'Estaciones' ? 'Estación' : 'Componente'
        }`}
        refForm={refForm}
        refModal={refModal}
        active={modal}
        setModal={setModal}
      >
        {location === 'Estaciones' && (
          <AddEstationForm
            setModal={setModal}
            refForm={refForm}
            successCallBack={() => {
              alertState[1](true);
              setHomeAlert((old) => {
                return {
                  ...old,
                  message: 'Estación guardada con éxito',
                  type: 'success',
                };
              });
            }}
          />
        )}
        {location === 'Componentes' && <AddComponentForm refForm={refForm} />}
      </Modal>
    </HomeContainer>
  );
};
