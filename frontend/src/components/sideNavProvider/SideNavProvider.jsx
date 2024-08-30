"use client"

import React, { useState } from "react"
import styles from "./sideNavProvider.module.css"
import { NavItemsProvider } from "@/config/sideNavProvider/navItems"
import { SideNavItem } from "@/components"

const SideNavProvider = () => {
  const [isSideNavOpen, setSideNavOpen] = useState(true);
  const navItems = NavItemsProvider();

  const toggleSidebar = () => {
    setSideNavOpen(!isSideNavOpen);
  };

  return (
    <div 
      className = {
        `${styles.sidenav} ${
          isSideNavOpen 
          ? styles.sidenavOpen 
          : styles.sidenavClose}`}>
      <div className={styles.profile}>
        <div>LP</div>
        <p>Luis Perez Rojas</p>
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