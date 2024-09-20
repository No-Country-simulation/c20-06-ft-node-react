"use client";

import { useEffect, useState } from "react"
import styles from "./page.module.css"
import EditReadNewServiceModal from "./ui/EditReadNewServiceModal";
import ServiceCard from './ui/ServiceCard'

const Servicios = () => {
  const [isClosedModal, setClosedModal] = useState(true)
  const [isLoadingRemove, setIsLoadingRemove] = useState(false)
  const [idService, setIdService] = useState('')
  const [data, setData] = useState(null)
  const [services, setServices] = useState([])
  const [idSp, setIdSp] = useState('')

  const fetchData = async (idSP) => {
    try {
      const response = await fetch(`http://localhost:3000/service_providers/${idSP}`, {
        credentials: 'include'
      });
      const data = await response.json();
      console.log(data)
      setData(data['service_provider']);
      setServices(data['service_provider']['services'])
    } catch (error) {
      console.error('Error fetching data aqui:', error);
    }
  };

  const removeService = async (idSP,idService) => {
    try {
      const response = await fetch(`http://localhost:3000/service_providers/${idSP}/removeService/${idService}`, {
        method: 'PUT',
        credentials: 'include'
      });
      const data = await response.json();
      console.log('Addd Service', data)
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    const data = localStorage.getItem('user');
    if (data) {
      const value = JSON.parse(data)
      setIdSp(value['serviceProviderId'])
      fetchData(value['serviceProviderId']);
    }
    
  }, []);

  return (
    <div className={styles.container}>
      <EditReadNewServiceModal
        idSp={idSp}
        isClosedModal={isClosedModal}
        setClosedModal={setClosedModal}
        onAddService={()=>{
          setData(null)
          setServices([])
          fetchData(idSp)
        }}
      />
      <div className={styles.header}>
        <p>Mis servicios</p>
        <button onClick={() => setClosedModal(false)}>Agregar Servicio</button>
      </div>
      <div className={`${styles.content} ${data == null || data.length == 0 ? styles.contentCenter : null}`}>
        {
          data == null 
          ?<p>Cargando ....</p>
          : services.length == 0
            ? <p>Aun no tienes un servicio para ofrecer</p>
            : services.map((service) => 
              <ServiceCard
                disabled={isLoadingRemove && idService == service['id']}
                onDelete={()=>{
                  setIdService(service['id'])
                  setIsLoadingRemove(true)
                  removeService(idSp,service['id']).then((e)=>{
                    setData(null)
                    setServices([])
                    fetchData(idSp)
                    setIsLoadingRemove(false)
                    setIdService('')
                  })
                  
                }}
                title={service['title']}
                description={service['description']}/>)
        }
      </div>
    </div>
  );
};

export default Servicios;
