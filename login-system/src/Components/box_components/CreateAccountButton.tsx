interface Props {
  onClick: () => void;
}
function CreateAccountButton({ onClick }: Props) {
  return (
    <button onClick={onClick} type="button" className="btn btn-info col auto">
      Create
    </button>
  );
}

export default CreateAccountButton;
