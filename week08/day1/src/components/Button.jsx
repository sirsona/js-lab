// Button.jsx

function onClick() {
  alert("Card 1 clicked!");
}

export function Button({ children }) {
  return (
    <>
      <button onClick={onClick} style={{ padding: "8px 16px" }}>
        {children}
      </button>
    </>
  );
}
