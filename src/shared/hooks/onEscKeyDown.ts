import { useEffect } from 'react';

const ESC_KEY_CODE = 27;

const useOnEscapeKeyDown = (isListening, onEscapeKeyDown) => {
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.keyCode === ESC_KEY_CODE) {
        onEscapeKeyDown();
      }
    };

    if (isListening) {
      document.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isListening, onEscapeKeyDown]);
};

export default useOnEscapeKeyDown;
