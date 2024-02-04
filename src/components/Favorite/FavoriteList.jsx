import React from 'react'
import { useSelector } from 'react-redux'
import { selectFavorites } from '../../redux/selectors'
import { WrapperList } from '../Catalog/CatalogList.styled'
import { CarCard } from '../CarCard/CarCard'
import { NoCarsFavorites } from './NoCarsFavorites'

export const FavoriteList = () => {
    const adverts = useSelector(selectFavorites)
  return (
    <div>
        {adverts.length > 0 ?        
        <WrapperList>
        {adverts.map((item) => (
          <CarCard key={item.id} item={item} />
        ))} 
        </WrapperList>
        : 
        <NoCarsFavorites />}
    </div>

  )
}
