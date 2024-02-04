import React from 'react'
import { useSelector } from 'react-redux'
import { selectFavorites } from '../../redux/selectors'
import { WrapperList } from '../Catalog/CatalogList.styled'
import { CarCard } from '../CarCard/CarCard'

export const FavoriteList = () => {
    const adverts = useSelector(selectFavorites)
  return (
    <WrapperList>
        {adverts.map((item) => (
          <CarCard key={item.id} item={item} />
        ))}
    </WrapperList>

  )
}
