"use client";

import Footer from "@/components/Footer";
import NavBar from "@/components/NavBar";
import Breadcrumbs from "@/components/Breadcrumbs";
import Steps from "@/components/Steps";
import FormHeading from "@/components/FormHeading";

export default function Home() {
  return (
    <>
      <NavBar />
      <main className="flex min-h-screen flex-col items-center justify-between p-8">
        <div className="-ml-[140px] -mt-[25px]">
          <Breadcrumbs />
          <Steps />
        </div>

        <div className="z-10 max-w-5xl justify-center w-full items-center font-mono text-sm lg:flex">
          <div className="artboard w-[841px] h-[1117px] mt-[40px] bg-white border border-[#DBDBDB] rounded-[14px]">
            <FormHeading />
            <hr class="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
