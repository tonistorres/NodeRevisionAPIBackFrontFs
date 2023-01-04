CONFIG_FILE_ESLINT_JSON(){
touch .eslintrc.json
cat << EOF > .eslintrc.json
//https://pt-br.reactjs.org/docs/hooks-rules.html
{
  "env": {
    "browser": true,
    "es2021": true
  },
  "settings": {
    "react": {
      "version": "detect"
    }
  },
  "extends": [
    "prettier",
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
    "plugin:prettier/recommended"
  ],
  "parserOptions": {
    "ecmaFeatures": {
      "jsx": true
    },
    "space-in-parens": [
      1,
      "always"
  ],
    "ecmaVersion": "latest",
    "sourceType": "module"
  },
  "ignorePatterns": ["*.test.js", "*.test.tsx"],
  "plugins": ["react", "prettier", "react-hooks"],
  "rules": {
    "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
    "react/react-in-jsx-scope": "off",
    "react-hooks/rules-of-hooks": "error", // Verifica as regras dos Hooks
    "react-hooks/exhaustive-deps": "warn" // Verifica as dependências de effects
  }
}
EOF
}

CONFIG_FILE_ESLINT_JSON
