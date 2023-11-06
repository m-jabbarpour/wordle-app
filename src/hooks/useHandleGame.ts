import { useState } from "react";
import { useImmer } from "use-immer";

import { toast } from "react-toastify";

import { answerLetters, initialLetters } from "../constants";

import { ILetter, Status } from "../types";

const checkLetterStatus = (letter: ILetter, index: number): Status => {
  if (letter.value === answerLetters[index]) return "correct";
  if (answerLetters.includes(letter.value)) return "misplaced";
  return "incorrect";
};

const checkWord = (word: ILetter[]): ILetter[] => {
  const checkedWord = word.map((l, i) => ({
    ...l,
    status: checkLetterStatus(l, i),
  }));

  return checkedWord;
};

const letters: ILetter[] = initialLetters.map((il) => ({
  value: il,
  status: "unknown",
}));

export const useHandleGame = () => {
  const [guessedWords, setGuessedWords] = useImmer<Array<Array<ILetter>>>([
    [
      { value: "", status: "unfilled" },
      { value: "", status: "unfilled" },
      { value: "", status: "unfilled" },
      { value: "", status: "unfilled" },
      { value: "", status: "unfilled" },
    ],
    [
      { value: "", status: "unfilled" },
      { value: "", status: "unfilled" },
      { value: "", status: "unfilled" },
      { value: "", status: "unfilled" },
      { value: "", status: "unfilled" },
    ],
    [
      { value: "", status: "unfilled" },
      { value: "", status: "unfilled" },
      { value: "", status: "unfilled" },
      { value: "", status: "unfilled" },
      { value: "", status: "unfilled" },
    ],
    [
      { value: "", status: "unfilled" },
      { value: "", status: "unfilled" },
      { value: "", status: "unfilled" },
      { value: "", status: "unfilled" },
      { value: "", status: "unfilled" },
    ],
    [
      { value: "", status: "unfilled" },
      { value: "", status: "unfilled" },
      { value: "", status: "unfilled" },
      { value: "", status: "unfilled" },
      { value: "", status: "unfilled" },
    ],
    [
      { value: "", status: "unfilled" },
      { value: "", status: "unfilled" },
      { value: "", status: "unfilled" },
      { value: "", status: "unfilled" },
      { value: "", status: "unfilled" },
    ],
  ]);

  const [activeWordIndex, setActiveWordIndex] = useState(0);
  const [activeLetterIndex, setActiveLetterIndex] = useState(0);

  const handleType = (value: string) => {
    if (
      activeLetterIndex < 5 &&
      guessedWords[activeWordIndex][4].status === "unfilled"
    ) {
      setGuessedWords((draft) => {
        draft[activeWordIndex][activeLetterIndex] = {
          value,
          status: "unknown",
        };
      });
      setActiveLetterIndex((prev) => prev + 1);
    }
  };

  const handleDelete = () => {
    if (activeLetterIndex > 0) {
      setGuessedWords((draft) => {
        draft[activeWordIndex][activeLetterIndex - 1] = {
          value: "",
          status: "unfilled",
        };
      });
      setActiveLetterIndex((prev) => prev - 1);
    }
  };

  const handleEnter = () => {
    if (activeLetterIndex === 5) {
      const checkedWord = checkWord(guessedWords[activeWordIndex]);

      const isAnswerFound = checkedWord.every((l) => l.status === "correct");

      setGuessedWords((draft) => {
        draft[activeWordIndex] = checkedWord;
      });

      if (isAnswerFound) {
        toast.success("Congratulations!");
      } else if (activeWordIndex < 5) {
        setActiveWordIndex((prev) => prev + 1);
        setActiveLetterIndex(0);
      } else {
        toast.error("You failed!");
      }
    }
  };

  return { letters, guessedWords, handleType, handleDelete, handleEnter };
};
