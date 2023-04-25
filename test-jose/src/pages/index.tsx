import Main from "@/root/components/body/Body";
import Head from "next/head";
import { NavBar } from "@/root/components/navBar/NavBar";
import {
  Information,
  InformationProps,
} from "@/root/components/information/Information";

import "bootstrap/dist/css/bootstrap.min.css";
import { Carousel } from "@/root/components/carousel/Carousel";
import Footer from "@/root/components/footer/Footer";
import Call from "@/root/components/call/Call";
//import "bootstrap/dist/js/bootstrap.bundle.min.js"; Linea comentada del error
const fakeNewsData: InformationProps[] = [
  {
    name: "Jose",
    lastName: "Fallas Mora",
    email: "josefallasmora@gmail.com",
    tastes:
      "I like physical conditioning, practice soccer and calisthenics, I love to cook",
  },
];

export default function Home() {
  return (
    <>
      <Head>
        <title>Test</title>
        <meta name="description" content="Sample to blog with SSR" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Main features={fakeNewsData} />
        <Carousel />
        <Call />
        <Footer />
      </main>
    </>
  );
}
