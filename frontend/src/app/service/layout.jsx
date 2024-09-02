"use client"
import { useSearchParams } from "next/navigation";
import { Sidebar } from "@/components";
import { useFetchCategories, useFetchServices } from "@/utils/hooks";
import '@/app/globals.css'

import styles from "./styles.module.css";

export default function RootLayout({ children }) {
  const categories = useFetchCategories();
  const services = useFetchServices();
  const searchParams = useSearchParams();
  const city = searchParams.get("city") || "";

  return (
    <main>
      <main className={styles.container}>
        <Sidebar services={services} categories={categories} city={city} />
        {children}
      </main>
    </main>
  );
}
