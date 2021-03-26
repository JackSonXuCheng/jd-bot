/**
 * 基于 airbnb 的 eslint 规则，需要安装 eslint
 * @see https://eslint.org
 * @see https://github.com/airbnb/javascript
 */
module.exports = {
  "env": {
    "browser": true,
    "es2021": true
  },
  "parserOptions": {
    "ecmaVersion": 12,
    "sourceType": "module",
  },
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

    // 单行块内需要间隔
    'block-spacing': ['error', 'always'],

    // 文件尾换行，不允许多行
    'eol-last': ['error', 'always'],

    // 禁止行尾空格，包括空行以及注释
    'no-trailing-spaces': ['error', {
      skipBlankLines: false,
      ignoreComments: false,
    }],
  },
};
