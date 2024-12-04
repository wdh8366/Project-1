import js from '@eslint/js';
import globals from 'globals';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import tseslint from 'typescript-eslint';
import airbnb from 'eslint-config-airbnb';
import jsxA11y from 'eslint-plugin-jsx-a11y';
import importPlugin from 'eslint-plugin-import';
import prettier from 'eslint-plugin-prettier'; // Prettier 플러그인 추가
import prettierConfig from 'eslint-config-prettier'; // Prettier 설정 추가

export default tseslint.config(
  { ignores: ['dist', 'node_modules'] }, // 빌드 폴더 및 의존성 무시
  {
    extends: [
      js.configs.recommended,
      ...tseslint.configs.recommended,
      airbnb, // Airbnb 스타일 가이드
      'plugin:prettier/recommended', // Prettier 설정을 ESLint에 통합
    ],
    files: ['**/*.{ts,tsx,js,jsx}'], // JS/TS 파일 모두 포함
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
      parserOptions: {
        ecmaFeatures: {
          jsx: true, // JSX 지원
        },
      },
    },
    plugins: {
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
      'jsx-a11y': jsxA11y, // JSX 접근성 플러그인
      import: importPlugin, // Import 관련 규칙 강화
      prettier, // Prettier 플러그인 활성화
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],
      'jsx-a11y/anchor-is-valid': 'warn', // a 태그의 유효성 검사
      'jsx-a11y/no-noninteractive-element-interactions': 'warn', // 비상호작용 요소의 상호작용 제한
      'import/no-extraneous-dependencies': ['error', { devDependencies: true }], // devDependencies 허용
      'import/order': [
        'warn',
        {
          groups: ['builtin', 'external', 'internal'],
          pathGroups: [
            {
              pattern: '~/**',
              group: 'internal',
              position: 'after',
            },
          ],
          alphabetize: { order: 'asc', caseInsensitive: true },
        },
      ],
      'no-console': 'warn', // console.log 사용 경고
      'no-unused-vars': ['warn', { argsIgnorePattern: '^_' }], // 미사용 변수 경고, _는 제외
      'prettier/prettier': ['error', { singleQuote: true, trailingComma: 'es5' }], // Prettier 규칙
    },
    settings: {
      react: {
        version: 'detect', // React 버전 자동 감지
      },
    },
  },
);