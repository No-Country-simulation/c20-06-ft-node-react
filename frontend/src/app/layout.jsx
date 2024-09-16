import { Inter } from "next/font/google";
import { Header, Footer, AuthProvider } from "@/components";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "ChangasApp",
  description: "ChangasApp, el mejor lugar para encontrar ayuda en los servicios que tu necesites",
  icons: {
    icon: "/logo.ico",
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className={inter.className}>
        <AuthProvider>
          <Header />
          {children}
          <Footer />
        </AuthProvider>
      </body>
    </html>
  );
}
