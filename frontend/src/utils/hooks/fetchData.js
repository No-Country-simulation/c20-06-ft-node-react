import { useState, useEffect, useRef } from 'react';

const useFetchData = (api) => {
  const [data, setData] = useState([]);
  const fetched = useRef(false);

  useEffect(() => {
    const fetchData = async (api) => {
      try {
        const res = await fetch(api);
        const data = await res.json();
        setData(data);
      } catch (error) {
        console.log(error);
      }
    };

    if (!fetched.current) {
      fetched.current = true;
      fetchData(api);
    }
  }, [api])

  return data;
};

export const useFetchCategories = () => {
  const { categories } = useFetchData('/api/categories');

  return categories
};

export const useFetchWorkers = () => {
  const { workers } = useFetchData('/api/workers');

  return workers
}

export const useFetchOneWorker = (id) => {
  const { worker } = useFetchData(`/api/workers/${id}`);
  return worker
}

export const useFetchCities = () => {
  const { cities } = useFetchData('/api/cities');
  return cities
}

export const useFetchServices = () => {
  const { services } = useFetchData('/api/services');
  return services
}