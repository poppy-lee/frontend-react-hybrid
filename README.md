# Turborepo React-Native 하이브리드 프로젝트

이 프로젝트는 React-Native와 웹(Next.js)을 동시에 지원하는 하이브리드 애플리케이션 개발을 위한 Turborepo 스타터입니다.

## 프로젝트 개요

본 프로젝트는 멀티 플랫폼 지원을 목표로 하며, React-Native를 활용하여 모바일과 웹 환경에서 동시에 동작하는 애플리케이션을 개발할 수 있도록 구성되었습니다.

## 프로젝트 구조

### 앱(Apps) 및 패키지(Packages)

- **`native`**
  - Expo 기반으로 구성된 [react-native](https://reactnative.dev/) 모바일 앱입니다.
  
- **`web`**
  - [Next.js](https://nextjs.org/)를 기반으로 하며, [react-native-web](https://necolas.github.io/react-native-web/)을 사용하여 웹에서도 동일한 UI 컴포넌트를 사용할 수 있도록 지원합니다.

- **`@repo/screens`**, **`@repo/ui`**
  - 웹과 모바일 앱에서 공통으로 사용할 수 있는 React-Native 기반의 공통 컴포넌트 라이브러리입니다.

모든 앱과 패키지는 100% [TypeScript](https://www.typescriptlang.org/)로 작성되어 있어 안전한 코드 작성 및 유지보수에 용이합니다.

### 주요 도구 및 설정

- [expo](https://docs.expo.dev/) : 모바일 앱 개발 및 관리
- [TypeScript](https://www.typescriptlang.org/) : 정적 타입 검사 지원
- [prettier](https://prettier.io/) : 코드 포맷팅 및 일관성 유지

## 시작하기

다음 명령어를 통해 이 프로젝트를 손쉽게 시작할 수 있습니다:

```sh
# 의존성 설치
npm install

# 웹/앱 개발서버
npm start
```