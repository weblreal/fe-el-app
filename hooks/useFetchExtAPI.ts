import axios from "axios";
import { useEffect, useState } from "react";

interface IProps {
  url: string;
}

const useFetchExtAPI = ({ url }: IProps) => {
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    if (url) {
      axios.get(url).then((res: any) => {
        setData(res?.data);
      });
    }
  }, [url]);

  return data;
};

export default useFetchExtAPI;
