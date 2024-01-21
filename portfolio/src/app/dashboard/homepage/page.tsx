"use client";
import ParticlesContainer from "@/app/components/ParticlesContainer";
import Navbar from "../navbar";
import Home from "./HomePage";

export default async function Dashboard() {
  // get url parasm
  return (
      <div>
        <Navbar />
        <Home />
      </div>
  );
}
