"use client"

import React, { useEffect, useState } from "react"
import styles from "./sideNavProvider.module.css"
import { NavItemsProvider } from "@/config/sideNavProvider/navItems"
import { SideNavItem } from "@/components"
import CircleAvatar from "../CircleAvatar/CircleAvatar"

const SideNavProvider = () => {
  const [isSideNavOpen, setSideNavOpen] = useState(true);
  const navItems = NavItemsProvider();
  const [firstName, setFirstName ] = useState('P')
  const [lastName, setLastName] = useState('L')

  const toggleSidebar = () => {
    setSideNavOpen(!isSideNavOpen);
  };

  useEffect(()=>{
    const data = localStorage.getItem('user');
    if (data) {
      const value = JSON.parse(data)
      console.log(value)
      setFirstName(value['first_name'])
      setLastName(value['last_name'])
    }
  },[])

  return (
    <div 
      className = {
        `${styles.sidenav} ${
          isSideNavOpen 
          ? styles.sidenavOpen 
          : styles.sidenavClose}`}>
      <div className={styles.profile}>
        <CircleAvatar name={firstName} lastName={lastName} size='lg'/>
        <p>{`${firstName} ${lastName}`}</p>
      </div>
      <div>
        {
          navItems.map((item) => 
          <SideNavItem
            key={item.name}
            icon={item.icon}
            name={item.name}
            path={item.href}
            active={item.active}
          />)
        }
      </div>
    </div>
  );
}

export default SideNavProvider