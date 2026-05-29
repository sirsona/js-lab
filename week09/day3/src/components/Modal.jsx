import { useToggle } from "../hooks/useToggle";

function Modal() {
  const [isOpen, toggle] = useToggle(false);

  return (
    <>
      <button onClick={toggle}>{isOpen ? "Close" : "Open"} </button>
      {isOpen && <div> Model content</div>}
    </>
  );
}

export default Modal;
