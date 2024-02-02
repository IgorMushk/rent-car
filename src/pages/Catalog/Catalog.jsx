import React from "react";
import { Filters } from "../../components/Filters/Filters";
import { CatalogList } from "../../components/Catalog/CatalogList";
import { WrapperList } from "./Catalog.styled";

export const Catalog = () => {
  return (
    <WrapperList>
      <Filters />
      <CatalogList />
    </WrapperList>
  );
};
