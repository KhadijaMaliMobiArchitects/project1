import { useEffect } from 'react';

export default function EscapeButton({ onClick }) {
  useEffect(() => {
    function handleEscapeKey(event) {
      if (event.keyCode === 27) {
        onClick();
      }
    }
    document.addEventListener('keydown', handleEscapeKey);
    return () => {
      document.removeEventListener('keydown', handleEscapeKey);
    };
  }, [onClick]);

  return <button color='black'>Escape</button>;
}
