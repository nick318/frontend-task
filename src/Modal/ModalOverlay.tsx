import { Fragment } from 'react';
import { createPortal } from 'react-dom';
import { Overlay, ModalContainer } from './Styles';

interface ModalOverlayProps {
  open: boolean;
  onClose: () => void;
}

export const ModalOverlay = ({ open, onClose }: ModalOverlayProps) => {
  if (!open) return null;

  const root = document.getElementById('root');

  if (!root) {
    return null;
  }

  return createPortal(
    <Fragment>
      <Overlay onClick={onClose}>
        <ModalContainer>
          <div>blah</div>
        </ModalContainer>
      </Overlay>
    </Fragment>,
    root,
  );
};

export default ModalOverlay;
