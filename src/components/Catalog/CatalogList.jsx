import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { fetchPage, getByFilter } from "../../redux/operations";
import { selectAdverts } from "../../redux/selectors";
import { WrapperList } from "./CatalogList.styled";
import { LoadMore } from "./CatalogList.styled";
import { LIMIT } from "../../helpers/constats";

export const CatalogList = () => {
  const dispatch = useDispatch();
  const adverts = useSelector(selectAdverts);
  const [page, setPage] = useState(1);
  const [isLastPage, setLastPage] = useState(false);
  const [searchParams] = useSearchParams();
  const controllerRef = useRef();

  useEffect(() => {
    if (searchParams.size === 0) {
      dispatch(fetchPage({ page, limit: LIMIT }));
      return;
    }

    if (controllerRef.current) {
      controllerRef.current.abort();
    }

    controllerRef.current = new AbortController();
    const filters = {};

    searchParams.forEach((value, key) => (filters[key] = value));

    dispatch(getByFilter(filters));
    setLastPage(true);
    return () => {
      controllerRef.current.abort();
    };
  }, [searchParams, dispatch, page]);

  useEffect(() => {
    if (adverts.length % LIMIT !== 0) {
      setLastPage(true)
      ;
    } else {setLastPage(false)}
  }, [adverts]);

  const handleClickLoadMore = (e) => {      
      setPage(page + 1);
  };

  return (
    <>
      <WrapperList>
        {adverts.map((item) => (
          // <CarCard key={item.id} item={item} />
          <div> {item.id} </div>
        ))}
      </WrapperList>
      {!isLastPage && (
        <LoadMore onClick={handleClickLoadMore}>Load more</LoadMore>
      )}
    </>
  );
};
