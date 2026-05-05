// Button.jsx

function onClick() {
  alert("Card 1 clicked!");
}

function Button({ children }) {
  return (
    <>
      <button onClick={onClick} style={{ padding: "8px 16px" }}>
        {children}
      </button>
    </>
  );
}

export default Button;
