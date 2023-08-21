import { useCallback, useState, Fragment, useRef } from 'react';
import modalText from '../shared/assets/modalText.json';
import ModalBody from '../DeleteModal/ModalBody';
import { Overlay, ModalContainer } from './Styles';
import { createPortal } from 'react-dom';
import useOnEscapeKeyDown from '../shared/hooks/onEscKeyDown';
import useOnOutsideClick from '../shared/hooks/onOutsideClick';

interface ModalProps {
  renderContent: (handleOpen: () => void) => JSX.Element;
}

export const Modal = ({ renderContent }: ModalProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [timeoutId, setTimeoutId] = useState<number | null>();
  const [isTimeout, setIsTimeout] = useState<boolean>(true);

  const handleOpen = () => {
    setIsOpen(true);
    const id = setTimeout(() => {
      setIsTimeout(false);
    }, 2000);
    setTimeoutId(id);
  };
  
  const $modalRef = useRef();
  const $clickableOverlayRef = useRef();

  const onClose = useCallback(() => {
    setIsOpen(false);
    if (timeoutId) {
      clearTimeout(timeoutId);
      setTimeoutId(null);
      setIsTimeout(true);
    }
  }, [timeoutId]);

  useOnEscapeKeyDown(isOpen, onClose);
  useOnOutsideClick($modalRef, isOpen, onClose, $clickableOverlayRef);

  const root = document.getElementById('root')!;
  return (
    <Fragment>
      {renderContent(handleOpen)}
      {isOpen &&
        createPortal(
          <Overlay ref={$clickableOverlayRef}>
            <ModalContainer ref={$modalRef}>
              <ModalBody {...{ isTimeout, onClose, ...modalText }} />
            </ModalContainer>
          </Overlay>,
          root,
        )}
    </Fragment>
  );
};
