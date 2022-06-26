import { Union, Object as TObject } from "ts-toolbelt";
import { multivariateExperimentsConfig } from "./MultivariateExperimentsConfig";

export type MultivariateExperimentsConfig = typeof multivariateExperimentsConfig;

export type Formula = keyof Union.Merge<
  MultivariateExperimentsConfig[keyof MultivariateExperimentsConfig]["formula"]
>;

type FormulaSelector<T extends Formula> = {
  formula: { [key in T]: true };
};

export type ExperimentsWithFormulaOf<T extends Formula> = TObject.Select<
  typeof multivariateExperimentsConfig,
  FormulaSelector<T>
>;

// type ExperimentWithFormulaGammaNL = WithFormula<"gamma_nl">;
// type ExperimentWithFormulaGammaBE = WithFormula<"gamma_be">;
// type ExperimentWithFormulaKarweiNL = WithFormula<"karwei_nl">;

export type ExperimentName<T extends Formula | "ALL"> = T extends Formula
  ? keyof ExperimentsWithFormulaOf<T>
  : keyof MultivariateExperimentsConfig;

// type ExperimentsNameWithFormulaGammaNL = ExperimentName<"gamma_nl">;

// type WithFormulaAExperiment<
//   T extends UFormulaKey,
//   N extends ExperimentName<T>
// > = TObject.Select<WithFormula<T>, { name: N }>;

// type WithFormulaExperiment<
//   T extends Formula,
//   N extends ExperimentName<T>
// > = TObject.Pick<ExperimentsWithFormulaOf<T>, N>;

// type WithFormulaAExperimentPayment = WithFormulaAExperiment<
//   "gamma_nl",
//   "ab-test-payment"
// >;

// type WithFormulaAExperimentNoExistingKey = WithFormulaAExperiment<
//   "gamma_nl",
//   "ab-test"
// >;
