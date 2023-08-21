import { Fragment } from 'react';
import { ModalBody } from '../DeleteModal/ModalBody.tsx';
import text from '../assets/modalText.json';
import { ModalWrapper } from '../Modal/ModalOverlay.tsx';

export const App = () => {
  return (
    <Fragment>
      <button>Open modal</button>
      <ModalBody
        onClose={() => null}
        title={text.main}
        description={text.description}
      />
      <ModalWrapper open={true} onClose={() => null} />
    </Fragment>
  );
};

export default App;
