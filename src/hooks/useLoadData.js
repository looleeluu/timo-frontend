import { useState, useEffect } from "react";
import axiosInstance from "../Auth";

export const useLoadData = (url) => {
  const [data, setData] = useState([]);
  const [loadingStatus, setLoadingStatus] = useState("resolved");

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    setLoadingStatus("pending");
    try {
      const res = await axiosInstance.get(url);
      setData(res.data);
      setLoadingStatus("resolved");
    } catch (e) {
      setLoadingStatus("rejected");
    }
  };

  return [loadingStatus, data, loadData];
};
