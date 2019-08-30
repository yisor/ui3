{
  parser: "babel-eslint",
  extends: ["eslint-config-alloy/react"],
  rules: {
    'indent': ["error", 2, { SwitchCase: 1, flatTernaryExpressions: true }],
    "react/jsx-indent": ["error", 2],
    "react/jsx-indent-props": ["error", 2],
    "no-empty-function": "off",
    "no-trailing-spaces": "off",
    'react/jsx-wrap-multilines': "error",
    'react/no-find-dom-node': 'off',
    'object-curly-spacing': 'off',
    'handle-callback-err': 'off',
    'no-path-concat': 'off',
    'no-param-reassign': 'off',
    'jsx-a11y/href-no-hash': 'off',
  }
}
