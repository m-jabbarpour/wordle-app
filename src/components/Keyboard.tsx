import LetterKey from "./LetterKey";

import { ILetter } from "../types";

interface Props {
  letters: ILetter[];
  handleType: (value: string) => void;
  handleDelete: () => void;
  handleEnter: () => void;
}

const Keyboard: React.FC<Props> = ({
  letters,
  handleType,
  handleDelete,
  handleEnter,
}) => {
  return (
    <div className="flex flex-col items-center gap-2">
      <div className="flex gap-2">
        {letters.slice(0, 10).map((l) => (
          <LetterKey value={l.value} key={l.value} handleType={handleType} />
        ))}
      </div>
      <div className="flex gap-2">
        {letters.slice(10, 19).map((l) => (
          <LetterKey value={l.value} key={l.value} handleType={handleType} />
        ))}
      </div>
      <div className="flex gap-2">
        <div className="enter-key" onClick={() => handleEnter()}>
          Enter
        </div>
        <div className="flex gap-2">
          {letters.slice(19).map((l) => (
            <LetterKey value={l.value} key={l.value} handleType={handleType} />
          ))}
        </div>
        <div className="delete-key" onClick={() => handleDelete()}>
          X
        </div>
      </div>
    </div>
  );
};

export default Keyboard;
