import { useState, useEffect } from 'react';

export const useFetchCategories = () => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    fetch('/api/categories')
      .then(res => res.json())
      .then(data => setCategories(data.categories));
  }, []);

  return categories;
};

export const useFetchWorkers = () => {
  const [workers, setWorkers] = useState([]);
  useEffect(() => {
    fetch('/api/workers')
      .then(res => res.json())
      .then(data => setWorkers(data.workers));
  }, []);

  return workers;
}

export const useFetchCities = () => {
  const [cities, setCities] = useState([]);
  useEffect(() => {
    fetch('/api/cities')
      .then(res => res.json())
      .then(data => setCities(data.cities));
  }, []);

  return cities;
}

export const useFetchServices = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch('/api/services')
      .then(res => res.json())
      .then(data => setServices(data.services));
  }, []);

  return services;
}