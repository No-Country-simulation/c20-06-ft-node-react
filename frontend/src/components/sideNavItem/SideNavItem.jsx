"use client"

import { useState, useEffect } from "react"
import styles from "./sideNavItem.module.css"
import { ChevronRight } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"

const SideNavItem = (props) => {
  const pathName = usePathname()
  const [isActivate, setActivate] = useState(props.active ?? false)
  
  useEffect(() => {
    setActivate(pathName === props.path);
  }, [pathName]); 
  
  return (
    <Link
      className={`${styles.navItem} ${isActivate ? styles.active : styles.inactive}`}
      href={props.path}
    >
      <div>
        {props.icon}
        <p>{props.name}</p>
      </div>
      <ChevronRight/>
    </Link>
  )
}

export default SideNavItem