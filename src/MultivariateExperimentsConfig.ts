export const multivariateExperimentsConfig = {
  "ab-test-usps": {
    variations: {
      "var-a-control-group": {
        allocation: [0, 33]
      },
      "var-b-show-usps": {
        allocation: [0, 33]
      }
    },
    formula: {
      gamma_nl: true
    }
  },
  "ab-test-delivery": {
    variations: {
      "var-a-control-delivery": {
        allocation: [0, 33]
      },
      "var-b-extra-content": {
        allocation: [0, 33]
      }
    },
    formula: {
      gamma_be: true
    }
  },
  "ab-test-checkout": {
    variations: {
      "var-a-control-checkout": {
        allocation: [0, 33]
      },
      "var-b-checkout-price": {
        allocation: [0, 33]
      },
      "var-c-checkout-discount": {
        allocation: [0, 33]
      }
    },
    formula: {
      karwei_nl: true
    }
  },
  "ab-test-payment": {
    variations: {
      "var-a-control-payment": {
        allocation: [0, 33]
      },
      "var-b-payment-simple": {
        allocation: [0, 33]
      }
    },
    formula: {
      gamma_nl: true,
      gamma_be: true,
      karwei_nl: true
    }
  }
} as const;
