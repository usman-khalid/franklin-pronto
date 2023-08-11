module.exports = {
  extends: ["stylelint-config-standard"],
  rules: {
    "shorthand-property-no-redundant-values": true,
    "declaration-block-no-duplicate-properties": true,
    "declaration-block-no-redundant-longhand-properties": true,
    "no-unknown-animations": true,
    "at-rule-no-unknown": [true, {
      "ignoreAtRules": ["mixin"]
    }],
    "import-notation": null,
  },
};