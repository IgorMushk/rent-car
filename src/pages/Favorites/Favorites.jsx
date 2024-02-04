import React from "react";
import { FavoriteList } from "../../components/Favorite/FavoriteList";
import { WrapperList } from "../Catalog/Catalog.styled";

export const Favorites = () => {
  return (
    <WrapperList>
      <FavoriteList />
    </WrapperList>
  );
};
