'use client'
import { HomePage } from "./types";
import NavBar  from "../components/NavBar";
import Welcome from "../components/Welcome";
import  WebAndCloudBenefits  from "../components/WebAndCloudBenefits";
import Form from "../components/Form";



export default function Home() {
  return (
    <main className="min-h-screen min-w-screen">
      <NavBar></NavBar>
      <Welcome></Welcome>
      <WebAndCloudBenefits></WebAndCloudBenefits>
      <Form></Form>
    </main>
  );
}
