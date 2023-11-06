import { ILetter } from "../types";

interface Props {
  word: ILetter[];
}

const BoxRow: React.FC<Props> = ({ word }) => {
  return (
    <div className="flex gap-2">
      {word.map((l, i) => (
        <div
          key={i}
          className={`letter-box ${l.status === "incorrect" && "bg-gray-700"} ${
            l.status === "correct" && "bg-green-700"
          } ${l.status === "misplaced" && "bg-red-700"}`}
        >
          {l.value}
        </div>
      ))}
    </div>
  );
};

export default BoxRow;
