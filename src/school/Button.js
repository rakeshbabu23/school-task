export default function Button({ onClick, children }) {
  return (
    <>
      <button style={{ display: "block" }} onClick={onClick}>
        {children}
      </button>
    </>
  );
}
