import { Metadata } from "next"
import Hero from "./components/Hero";
import Features from "./components/Features";
import Services from "./components/Services";
import Assurance from "./components/Assurance";
import Contact from "./components/Contact";

export const metadata: Metadata = {
  title: "Next.js Enterprise Boilerplate",
  twitter: {
    card: "summary_large_image",
  },
  openGraph: {
    url: "https://next-enterprise.vercel.app/",
    images: [
      {
        width: 1200,
        height: 630,
        url: "https://raw.githubusercontent.com/Blazity/next-enterprise/main/.github/assets/project-logo.png",
      },
    ],
  },
}

export default function Web() {
  return (
    <>
      <Hero/>
      {/*<Assurance/>*/}
      <Services/>
      <Features/>
      <Contact/>
    </>
  )
}
