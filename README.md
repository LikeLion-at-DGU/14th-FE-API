# 14기 FE API 세션 🦁

동국대학교 멋쟁이사자처럼 14기 프론트엔드 API 세션 실습 프로젝트입니다.

## 시작하기

```bash
npm install
npm run dev
```

## 실습 준비 (2번 · 3번 실습)

API 키가 필요한 실습이 있어요. `.env.example`을 복사해서 `.env` 파일을 만들고 키를 채워주세요.

```bash
cp .env.example .env
```

| 키 | 사용하는 실습 | 발급처 |
| --- | --- | --- |
| `VITE_APP_API_KEY` | 2번 실습 (미세먼지) | [서울 열린데이터광장](https://data.seoul.go.kr) |
| `VITE_NEWS_API_KEY` | 3번 실습 (뉴스) | [NewsAPI](https://newsapi.org) |

## 실습 구성

| 실습 | 경로 | 내용 |
| --- | --- | --- |
| 1번 실습 | `/first`, `/first/postTest` | axios로 GET / POST 요청 보내보기 (완성 코드 제공) |
| 2번 실습 | `/second` | 서울시 OPEN API로 미세먼지 TOP 3 만들기 (빈칸 채우기) |
| 3번 실습 | `/third`, `/third/news` | NEWS API로 뉴스 리스트 만들기 (빈칸 채우기) |

> ⚠️ 2번 · 3번 실습 페이지는 여러분이 코드를 완성하기 전까지 에러가 나는 게 **정상**입니다!
> `fetchData is not defined` 에러가 보인다면, 그게 바로 여러분이 채워야 할 부분이에요.

## 폴더 구조

```
src/
├── assets/            # 폰트, 이미지
├── components/
│   ├── common/        # 여러 페이지에서 함께 쓰는 컴포넌트 (Header, Title, NextStep)
│   ├── practice1/     # 1번 실습 컴포넌트 + 스타일
│   ├── practice2/     # 2번 실습 스타일
│   └── practice3/     # 3번 실습 컴포넌트
├── pages/             # 라우터에 연결되는 페이지 (페이지 스타일은 *.styles.js)
├── styles/            # GlobalStyle, theme (색상 팔레트)
├── App.jsx            # 공통 레이아웃 + ThemeProvider
├── main.jsx           # 앱 진입점
└── router.jsx         # 라우팅 설정
```

## 기술 스택

- React 19 + Vite 8
- react-router-dom 7
- styled-components 6
- axios
