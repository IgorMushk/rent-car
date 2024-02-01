import React from 'react'
import {ButtonLink, TextBot, TextTop, Title, Wrapper } from './Home.styled'

export const Home = () => {
  return (
    <Wrapper>
        <TextTop>Ride into your dreams with </TextTop>
        <Title>Dream car</Title>
        <TextBot>Your Automobile Companion...</TextBot>
        <ButtonLink to={'/catalog'}> Select a car </ButtonLink>
    </Wrapper>
  )
}

