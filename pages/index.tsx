import { useState } from "react";

import Modal from "./modal";
import Navbar from "../components/organisms/Navbar";

import Invitation from "../components/organisms/Invitation";

import Maps from "../components/organisms/Maps";

import Privasi from "../components/organisms/Privasi";
import Footer from "../components/organisms/Footer";

export default function Home() {
  const [isPlaying, setIsPlaying] = useState(true);

  return (
    <>
      <Modal isPlaying={isPlaying} setIsPlaying={setIsPlaying} />
      <Navbar />
      <Invitation />
      <Maps />
      <Privasi />
      <Footer />
    </>
  );
}
