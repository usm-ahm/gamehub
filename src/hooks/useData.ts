import { AxiosError, AxiosRequestConfig, CanceledError } from "axios";
import { useState, useEffect } from "react";
import apiClient from "../services/api-client";

interface response<T> {
  count: number;
  results: T[];
}

const useData = <T>(
  endpoint: string,
  requestConfig?: AxiosRequestConfig,
  deps?: any[]
) => {
  const [data, setData] = useState<T[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(false);

  useEffect(
    () => {
      const controller = new AbortController();

      const fetchdata = async () => {
        setLoading(true);
        try {
          const response = await apiClient.get<response<T>>(endpoint, {
            signal: controller.signal,
            ...requestConfig,
          });
          setData(response.data.results);
          setLoading(false);
        } catch (error) {
          if (error instanceof CanceledError) return;
          setError((error as AxiosError).message);
          setLoading(false);
        }
      };

      fetchdata();

      return () => {
        controller.abort();
      };
    },
    deps ? [...deps] : []
  );

  return { data, error, isLoading };
};

export default useData;
