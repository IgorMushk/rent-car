import React, { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { Header } from "../components/Header/Header";
import { useSelector } from "react-redux";
import { selectIsLoading } from "../redux/selectors";
import { Loader } from "./Loader/Loader";

export const Layout = () => {
  const isLoading = useSelector(selectIsLoading);

  return (
    <>
      <Header />
      <main>
        <Suspense>
          <Outlet />
        </Suspense>
        {isLoading && <Loader/>}
      </main>
    </>
  );
};
