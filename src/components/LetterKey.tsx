interface Props {
  value: string;
  handleType: (value: string) => void;
}

const LetterKey: React.FC<Props> = ({ value, handleType }) => {
  return (
    <div
      className="letter-key"
      onClick={() => {
        handleType(value);
      }}
    >
      {value}
    </div>
  );
};

export default LetterKey;
