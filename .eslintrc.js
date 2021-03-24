/**
 * 基于 airbnb 的 eslint 规则，需要安装 eslint 和 eslint-plugin-react
 * @see https://eslint.org
 * @see https://github.com/airbnb/javascript
 * @see https://github.com/yannickcr/eslint-plugin-react
 */
module.exports = {
  "env": {
    "browser": true,
    "es2021": true
  },
  "parserOptions": {
    "ecmaVersion": 12,
    "sourceType": "module",
    "ecmaFeatures": {
      "jsx": true
    }
  },
  "plugins": [
    "react"
  ],
  "rules": {
    // 指定 2 格缩进
    // https://eslint.org/docs/rules/indent
    indent: ['error', 2, {
      SwitchCase: 1,
      VariableDeclarator: 1,
      outerIIFEBody: 1,
      FunctionDeclaration: {
        parameters: 1,
        body: 1,
      },
      FunctionExpression: {
        parameters: 1,
        body: 1,
      },
      CallExpression: {
        arguments: 1,
      },
      ArrayExpression: 1,
      ObjectExpression: 1,
      ImportDeclaration: 1,
      flatTernaryExpressions: false,
      ignoreComments: false,
    }],
    
    // 禁止缩进时混用空格和制表键
    'no-mixed-spaces-and-tabs': 'error',

    // 禁止使用多个空格
    'no-multi-spaces': ['error', {
      ignoreEOLComments: false,
    }],

    // 对象的键值之间有空格
    'key-spacing': ['error', { beforeColon: false, afterColon: true }],

    // 代码块前需要空格
    'space-before-blocks': 'error',

    // 逗号后面需要空格
    'comma-spacing': ['error', { before: false, after: true }],

    // 操作符前后需要空格
    'space-infix-ops': 'error',

    // 注释// 和 /* 后面需要空格
    'spaced-comment': ['error', 'always', {
      exceptions: ['-', '+'],
      markers: ['=', '!', '/'],
    }],
  
    // 使用强等 === 和 !==
    eqeqeq: ['error', 'always', { null: 'ignore' }],

    // 使用分号
    semi: ['error', 'always'],

    // 禁止未使用的变量声明
    'no-unused-vars': ['error', { vars: 'all', 'args': 'after-used', ignoreRestSiblings: true }],
  
    // 禁止重新分配 const 变量
    'no-const-assign': 'error',

    /** 防止 React 被标记为未使用 */
    "react/jsx-uses-react": "error",

    /** 防止将 JSX 中使用的变量标记为未使用  */
    "react/jsx-uses-vars": "error",
  },

};
