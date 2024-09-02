import styles from "./layout.module.css";
import "../../globals.css";
import { SideNavProvider, Header } from "@/components";


export const metadata = {
  title: "Dashboard Proveedor",
  description: "Desahboard del prestador de servicios",
};

export default async function RootLayout({ children }) {
  return (
    <main className={styles.main}>
      <div className={`${styles.containerLayout}`}>
        <SideNavProvider />
        <div className={styles.content}>
          <div className={styles.contentPadding}>
            {children}
          </div>
        </div>
      </div>
    </main>
  );
}
