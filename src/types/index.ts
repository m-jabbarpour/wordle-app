export type Status = "unfilled" | "unknown" | "correct" | "incorrect" | "misplaced";

export interface ILetter {
  value: string;
  status: Status;
}
