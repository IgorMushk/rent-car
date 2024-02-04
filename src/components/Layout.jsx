import React, { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { Header } from "../components/Header/Header";

export const Layout = () => {
  return (
    <>
      <Header />
      <main>
        <Suspense>
          <Outlet />
        </Suspense>
      </main>
    </>
  );
};
