import { useEffect, useState } from "react";

export const useFetch = <T>(callback: () => Promise<T>): {data: T | null, isLoading: boolean, error: string | null} => {
  const [data, setData] = useState<T | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await callback();
        setData(data);
      } catch (error) {
        setError(error instanceof Error ? error.message : "Ошибка загрузки");
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  return { data, isLoading, error };
};
