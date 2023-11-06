import BoxRow from "./BoxRow";

import { ILetter } from "../types";

interface Props {
  guessedWords: Array<Array<ILetter>>;
}

const BoxGrid: React.FC<Props> = ({ guessedWords }) => {
  return (
    <div className="flex flex-col gap-2 items-center">
      {guessedWords.map((word, i) => (
        <BoxRow word={word} key={i} />
      ))}
    </div>
  );
};

export default BoxGrid;
