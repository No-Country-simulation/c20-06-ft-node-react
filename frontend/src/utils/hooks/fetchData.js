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
  const data = useFetchData('/api/categories');
  return data.categories
};

export const useFetchWorkers = () => {
  const data = useFetchData('/api/workers');
  return data.workers
}

export const useFetchOneWorker = (id) => {
  const data = useFetchData(`/api/workers/${id}`);
  return data.worker
}

export const useFetchCities = () => {
  const data = useFetchData('/api/cities');
  return data.cities
}

export const useFetchServices = () => {
  const data = useFetchData('/api/services');
  return data.services
}