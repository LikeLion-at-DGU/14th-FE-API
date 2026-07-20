import Title from "../components/common/Title";
import NextStep from "../components/common/NextStep";
import ApiGetPractice from "../components/practice1/ApiGetPractice";

const Practice1Page = () => {
  return (
    <>
      <Title title={"서버에서 받아오는 데이터를 확인해봅시다"} />
      <NextStep to="/first/postTest" />
      <ApiGetPractice />
    </>
  );
};

export default Practice1Page;
