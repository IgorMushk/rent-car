import React from "react";
import { ButtonLink } from "../../pages/Home/Home.styled";
import { Image, Message, Section } from "./NoCarsFavorites.styled";
import carImage from '../../images/car-placeholder.png'

export const NoCarsFavorites = () => {
  return (
    <Section>
      <Message>
      Your favorites list is empty.
      </Message>
      <Image src={carImage} alt="Car image" />  
      <ButtonLink to={"/catalog"}> Select a car </ButtonLink>
    </Section>
  );
};
