import { useNavigate } from 'react-router-dom';
import {
  HomeWrapper,
  MainTitle,
  SubTitle,
  CardWrapper,
  PracticeCard,
  CardNumber,
  CardTitle,
  CardDesc,
} from './HomePage.styles';

const HomePage = () => {
  const navigate = useNavigate();

  const handleButtonClick = (path) => {
    navigate(path);
  };

  return (
    <HomeWrapper>
      <MainTitle>
        신나는 REACT <span>API</span> 실습
      </MainTitle>

      <CardWrapper>
        <PracticeCard onClick={() => handleButtonClick('/first')}>
          <CardNumber>01</CardNumber>
          <CardTitle>1번 실습</CardTitle>
          <CardDesc>
            axios로 데이터를
            <br />
            GET / POST 해보기
          </CardDesc>
        </PracticeCard>

        <PracticeCard onClick={() => handleButtonClick('/second')}>
          <CardNumber>02</CardNumber>
          <CardTitle>2번 실습</CardTitle>
          <CardDesc>
            서울시 OPEN API로
            <br />
            미세먼지 TOP 3 찾기
          </CardDesc>
        </PracticeCard>

        <PracticeCard onClick={() => handleButtonClick('/third')}>
          <CardNumber>03</CardNumber>
          <CardTitle>3번 실습</CardTitle>
          <CardDesc>
            NEWS API로
            <br />
            멋사 뉴스 만들기
          </CardDesc>
        </PracticeCard>
      </CardWrapper>
    </HomeWrapper>
  );
};

export default HomePage;
