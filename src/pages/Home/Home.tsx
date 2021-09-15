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

export const Home = () => {
  const opacity = useSelector((state: AppState) => state.ui.pageOpacity);
  const location = useSelector((state: AppState) => state.session.location);
  const [modal, setModal] = useState(false);
  const refModal = useRef<HTMLDivElement>(null);
  const refForm = useRef<HTMLFormElement>(null);
  function openModal() {
    if (refModal?.current) {
      refModal.current.style.display = 'flex';
    }
    setTimeout(() => setModal(true), 100);
  }
  return (
    <HomeContainer>
      <HomeLayout>
        <NavBar />
        <hr />
        <ItalicTitle>{location}</ItalicTitle>
        <HomeList opacity={opacity}>
          <HomeRouter />
        </HomeList>
      </HomeLayout>
      {location === 'Estaciones' && (
        <FloatButtonGroup functions={[openModal]} />
      )}
      <Modal
        title="Agregar Estación"
        refForm={refForm}
        refModal={refModal}
        active={modal}
        setModal={setModal}
      >
        <AddEstationForm refForm={refForm} />
      </Modal>
    </HomeContainer>
  );
};
