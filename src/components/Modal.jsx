import React, { useEffect, useRef } from 'react';
import './modal.css';
const Modal = ({
  isOpen = false,
  onClose = () => {},
  onOk = () => {},
  header = <></>,
  children = <></>,
  style = {},
  headerStyle = {},
  contentStyle = {},
}) => {
  const modalRef = useRef(null);
  useEffect(() => {
    const div = modalRef.current;
    if (isOpen) {
      div.className = 'ModalWrapper ModalOpened';
    } else {
      div.className = 'ModalWrapper';
    }
  }, [isOpen]);
  return (
    <div ref={modalRef} className='ModalWrapper' onClick={onClose}>
      <div
        className='Modal'
        onClick={(e) => {
          e.stopPropagation();
        }}
        style={{ ...style }}
      >
        <div className='ModalHeader' style={{ ...headerStyle }}>
          {header}
        </div>
        <div className='ModalContent' style={{ ...contentStyle }}>
          {children}
        </div>
        <div className='ModalFooter'>
          <div className='FooterButtonGroup'>
            <button
              onClick={async () => {
                await onClose();
              }}
            >
              Cancel
            </button>
            <button
              onClick={async () => {
                await onOk();
              }}
            >
              OK
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
