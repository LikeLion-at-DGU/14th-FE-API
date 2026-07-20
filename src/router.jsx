import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import HomePage from './pages/HomePage';
import Practice1Page from './pages/Practice1Page';
import Practice1PostPage from './pages/Practice1PostPage';
import Practice2Page from './pages/Practice2Page';
import Practice3Page from './pages/Practice3Page';
import Practice3NewsPage from './pages/Practice3NewsPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      // 메인 페이지
      { path: '/', element: <HomePage /> },

      // 첫 번째 실습 (GET / POST)
      { path: '/first', element: <Practice1Page /> },
      { path: '/first/postTest', element: <Practice1PostPage /> },

      // 두 번째 실습 (서울시 미세먼지 OPEN API)
      { path: '/second', element: <Practice2Page /> },

      // 세 번째 실습 (뉴스 API)
      { path: '/third', element: <Practice3Page /> },
      { path: '/third/news', element: <Practice3NewsPage /> },
    ],
  },
]);

export default router;
