export default function EventCapturing() {
  const handleParentClick = () => alert("Parent Captured!");
  const handleChildClick = () => alert("Child Clicked!");

  return (
    <div className="container">
      <span className="mb-2 mt-4 p-4">
        <strong>Click on the button to check event capturing</strong>
      </span>
      <div
        onClickCapture={handleParentClick}
        style={{ padding: 20, background: "#ddd" }}
      >
        <button className="btn btn-md btn-primary" onClick={handleChildClick}>
          Click Me
        </button>
      </div>
    </div>
  );
}
