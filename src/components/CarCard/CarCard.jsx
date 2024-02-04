//import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { selectFavorites } from "../../redux/selectors";
import { addFavorites, removeFavorites } from "../../redux/advertsSlice";
import { ReactComponent as FavoriteNormal } from "../../icons/heart-normal.svg";
import { ReactComponent as FavoriteActive } from "../../icons/heart-active.svg";
import NoImg from "../../images/car-placeholder.jpg";

import {
  WrapperCard,
  HeartIconBtn,
  ImageWrap,
  Image,
  Button,
  TitleWrap,
  Title,
  Span,
  Text,
  TextBlock,
  TextItem,
} from "./CarCard.styled";

export const CarCard = ({ item }) => {
  const favorites = useSelector(selectFavorites);
  const dispatch = useDispatch();

  const {
    id,
    year,
    make,
    model,
    type,
    img,
    accessories,
    //functionalities,
    rentalPrice,
    rentalCompany,
    address,
    mileage,
  } = item;
  const arrAdress = address.split(",");
  const city = arrAdress[1];
  const country = arrAdress[2];

  const isFavorite = (id) => {
    return favorites.some((item) => item.id === id);
  };

  const onToggle = () => {
    if (isFavorite(id)) {
      dispatch(removeFavorites(item.id));
    } else {
      dispatch(addFavorites(item));
    }
  };

  return (
    <WrapperCard>
      <div>
        <HeartIconBtn
          onClick={() => {
            onToggle();
          }}
        >
          {isFavorite(id) ? <FavoriteActive /> : <FavoriteNormal />}
        </HeartIconBtn>
        <ImageWrap>
          <Image
            src={img}
            alt={model}
            onError={(e) => {
              e.currentTarget.src = NoImg;
            }}
            loading="lazy"
            draggable="false"
          />
        </ImageWrap>
        <TitleWrap>
          <Title>
            {make} {""}
            <Span>{model}</Span>, {year}
          </Title>
          <Text> {rentalPrice}</Text>
        </TitleWrap>
      </div>
      <div>
        <TextBlock>
          <TextItem>{city}</TextItem>
          <TextItem>{country}</TextItem>
          <TextItem>{rentalCompany}</TextItem>
        </TextBlock>
        <TextBlock>
          <TextItem>{type}</TextItem>
          <TextItem>{model}</TextItem>
          <TextItem>{mileage}</TextItem>
          <TextItem>{accessories[0]}</TextItem>
        </TextBlock>
        <Button >Learn more</Button>
      </div>
    </WrapperCard>
  );
};
