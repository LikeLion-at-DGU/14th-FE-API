import Title from "../components/common/Title";
import NextStep from "../components/common/NextStep";
import NewsFetchPractice from "../components/practice3/NewsFetchPractice";

const Practice3Page = () => {
  return (
    <>
      <Title title={"멋사 NEWS"} />
      {/* /third/news는 components/practice3/NewsList 파일입니다! */}
      <NextStep to="/third/news" />
      <NewsFetchPractice />
    </>
  );
};

export default Practice3Page;
