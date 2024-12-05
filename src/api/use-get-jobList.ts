// example.ts
import { fetchXMLtoJSON } from "../utils/fetchXMLtoJSON";

interface ReturnData {
  root: {
    example: string[];
  };
}

const useGetJobList = async () => {
  const url = `https://www.work24.go.kr/cm/openApi/call/wk/callOpenApiSvcInfo211D01.do?authKey=1a79d99b-25c8-45ec-b005-2b38e8989e6d&returnType=XML&rcritPblancId=`; // XML 데이터가 위치한 URL
  try {
    const jsonData = await fetchXMLtoJSON<ReturnData>(url);
    console.log("JSON 데이터:", jsonData);

    // 특정 필드만 추출
    console.log("Example 값:", jsonData);
  } catch (error) {
    console.error("데이터를 처리하는 중 오류가 발생했습니다:", error);
  }
};

export default useGetJobList;