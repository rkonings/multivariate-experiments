import {
  MultivariateExperimentsConfig,
  Formula,
  ExperimentsWithFormulaOf
} from "./types";

export function getExperiments<T extends Formula>(
  formula: T,
  multivariateExperimentsConfig: MultivariateExperimentsConfig
) {
  const experiments = Object.entries(multivariateExperimentsConfig).reduce(
    (experiments, [key, experiment]) => {
      if (formula in experiment.formula) {
        return { ...experiments, [key]: experiment };
      }

      return experiments;
    },
    {}
  );

  return experiments as ExperimentsWithFormulaOf<T>;
}
