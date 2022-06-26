import { A } from "ts-toolbelt";
import { Formula } from "./types";

export function getFormula() {
  const formula = "gamma_nl";
  return formula as A.Cast<typeof formula, Formula>;
}
