// utils/fetchXMLtoJSON.ts
import axios from "axios";
import { parseStringPromise } from "xml2js";

// XML 데이터를 JSON으로 변환하는 함수
export const fetchXMLtoJSON = async <T>(url: string): Promise<T> => {
  try {
    const { data: xmlData } = await axios.get(url, { responseType: "text" });
    const jsonData = await parseStringPromise(xmlData);
    return jsonData as T;
  } catch (error) {
    console.error("Error fetching or parsing XML:", error);
    throw error;
  }
};