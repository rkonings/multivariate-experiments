import { getExperiments } from "./getExperiments";
import { getVariationsOf } from "./getVariationsOf";
import { multivariateExperimentsConfig } from "./MultivariateExperimentsConfig";
import { getFormula } from "./getFormula";

const experimentsForFormula = getExperiments(
  getFormula(),
  multivariateExperimentsConfig
);

console.log({ experimentsForFormula });

const abTestCheckoutVariations = getVariationsOf(
  "ab-test-checkout",
  multivariateExperimentsConfig
);

const abTestDeliveryVariations = getVariationsOf(
  "ab-test-delivery",
  multivariateExperimentsConfig
);

const abTestPaymentVariations = getVariationsOf(
  "ab-test-payment",
  multivariateExperimentsConfig
);

const abTestUSPsVariations = getVariationsOf(
  "ab-test-usps",
  multivariateExperimentsConfig
);

console.log({
  abTestCheckoutVariations,
  abTestDeliveryVariations,
  abTestPaymentVariations,
  abTestUSPsVariations
});
