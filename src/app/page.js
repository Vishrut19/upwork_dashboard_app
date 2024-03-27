"use client";

import Footer from "@/components/Footer";
import NavBar from "@/components/NavBar";
import Breadcrumbs from "@/components/Breadcrumbs";
import Steps from "@/components/Steps";

export default function Home() {
  return (
    <>
      <NavBar />
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <div>
          <Breadcrumbs />
          <Steps />
        </div>

        <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex"></div>
      </main>
      <Footer />
    </>
  );
}
