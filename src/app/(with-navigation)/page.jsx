// pages/index.js
import React from "react";
import Head from "next/head";


const HomePage = () => {
  return (
    <>
      <Head>
        <title>Home Page</title>
      </Head>
      <div className="container mx-auto mt-10">
        <h1 className="text-4xl font-bold mb-4">Welcome to My App</h1>
        <p className="text-lg mb-6">
          This is a simple homepage created using Tailwind CSS in a Next.js
          application.
        </p>

        {/* Add more links as needed */}
      </div>
    </>
  );
};

export default HomePage;
