import {
  Dimmer,
  ModalBody,
  ModalBox,
  ModalButton,
  ModalFooter,
  ModalHeader,
} from './Modal.styles';
import { ModalProps } from './Modal.interfaces';
import { useEffect } from 'react';

export const Modal = (props: ModalProps) => {
  const { active, setModal, refModal, children, title = '', refForm } = props;

  useEffect(() => {
    let modalTimeout: any;
    if (!active) {
      modalTimeout = setTimeout(() => {
        if (refModal?.current !== null) {
          refModal.current.style.display = 'none';
        }
      }, 500);
    }
    return () => clearTimeout(modalTimeout);
  }, [active, refModal]);

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
            Cerrar
          </ModalButton>
          <ModalButton
            onClick={() => {
              refForm.current?.requestSubmit();
            }}
            background="#28A745"
            textColor="white"
          >
            Guardar
          </ModalButton>
        </ModalFooter>
      </ModalBox>
    </Dimmer>
  );
};
