import { Geist, Geist_Mono } from "next/font/google";
import "../styles/globals.css";

import Navbar from "../components/Navbar";


export default function Layout({ children }) {
  return (
      <html lang="fr">
          <body>
            <Navbar />
              {children}
          </body>
      </html>
  );
}

