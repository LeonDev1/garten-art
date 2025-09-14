import "./css/Button.css";

function Button({ children, className }) {
  return (
    <button className={`common-button${className ? " " + className : ""}`}>
      <p className="common-button-text">{children}</p>
    </button>
  );
}

export default Button;
