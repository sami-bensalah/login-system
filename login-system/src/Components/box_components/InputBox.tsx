interface Props {
  placeHolder: string;
  value: string;
  onChange: (value: string) => void;
}

function InputBox({ placeHolder, value, onChange }: Props) {
  //
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.value);
  };
  if (placeHolder == "Password") {
    return (
      <input
        value={value}
        onChange={handleInputChange}
        className="form-label col-auto"
        placeholder={placeHolder}
        type="password"
      />
    );
  }
  return (
    <input
      value={value}
      onChange={handleInputChange}
      className="form-label col-auto"
      placeholder={placeHolder}
      type="text"
    />
  );
}

export default InputBox;
