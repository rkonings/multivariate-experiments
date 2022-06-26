import { ExperimentName, MultivariateExperimentsConfig } from "./types";

export function getVariationsOf<T extends ExperimentName<"ALL">>(
  experimentName: T,
  multivariateExperimentsConfig: MultivariateExperimentsConfig
) {
  const experiment = multivariateExperimentsConfig[experimentName];
  const variations = Object.entries(experiment.variations).reduce(
    (variations, [key]) => {
      return { ...variations, [key]: key };
    },
    {}
  );

  type VariantionKeys = keyof MultivariateExperimentsConfig[typeof experimentName]["variations"];

  type VariationOf = { [key in VariantionKeys]: key };
  return variations as VariationOf;
}
