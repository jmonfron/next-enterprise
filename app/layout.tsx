import "styles/tailwind.css"
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body>
        <Navbar/>
        {children}
        <Footer/>
      </body>
    </html>
  )
}
