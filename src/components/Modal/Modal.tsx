import {
  Dimmer,
  ModalBody,
  ModalBox,
  ModalButton,
  ModalFooter,
  ModalHeader,
} from './Modal.styles';
import { ModalProps } from './Modal.interfaces';

export const Modal = (props: ModalProps) => {
  const { active, setModal, refModal, children, title = '', refForm } = props;

  return (
    <Dimmer
      ref={refModal}
      active={active}
      onClick={() => {
        setModal(false);
        setTimeout(() => {
          if (refModal?.current !== null)
            refModal.current.style.display = 'none';
        }, 500);
      }}
    >
      <ModalBox onClick={(e) => e.stopPropagation()} active={active}>
        <ModalHeader>{title}</ModalHeader>
        <ModalBody>{children}</ModalBody>
        <ModalFooter>
          <ModalButton
            onClick={() => {
              setModal(false);
              setTimeout(() => {
                if (refModal?.current !== null)
                  refModal.current.style.display = 'none';
              }, 500);
            }}
            background="rgba(0,0,0,0.5)"
            textColor="white"
          >
            Cancelar
          </ModalButton>
          <ModalButton
            onClick={() => {
              setModal(false);
              refForm.current?.requestSubmit();
              setTimeout(() => {
                if (refModal?.current !== null)
                  refModal.current.style.display = 'none';
              }, 500);
            }}
            background="#28A745"
            textColor="white"
          >
            Aceptar
          </ModalButton>
        </ModalFooter>
      </ModalBox>
    </Dimmer>
  );
};
