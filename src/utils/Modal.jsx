const Modal = ({ children, modal, setModal, hidden }) => {
  return (
    <>
      <div
        onClick={() => setModal(false)}
        className={`bg-black fixed inset-0 z-10 ${hidden} ${
          modal ? "opacity-50" : "opacity-0"
        } transition-opacity duration-400`}
      />
      <div className={`${hidden} transition-all duration-400`}>
        {children}
      </div>
    </>
  );
};

export default Modal;
