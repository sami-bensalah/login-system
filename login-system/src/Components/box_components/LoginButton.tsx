interface Props {
  onClick: () => void;
}
function LoginButton({ onClick }: Props) {
  return (
    <button
      onClick={onClick}
      style={{ marginRight: "5%" }}
      type="button"
      className="btn btn-info col-auto"
    >
      Login
    </button>
  );
}

export default LoginButton;
