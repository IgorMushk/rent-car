import { useDispatch, useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";

import { selectFilters } from "../../redux/selectors";
import { setFilters } from "../../redux/filtersSlice";

import {
  Form,
  Label,
  SelectorWrapper,
  Selector,
  CustomArrow,
  FormItemWrapper,
  FromTo,
  FromToContainer,
  SelectorItem,
  InputWrapper,
  InputContainer,
  ErrorMessage,
  Btn,
} from "./Filters.styled";
import { Dropdown } from "../Dropdown/Dropdown";

import makes from "../../data/makes.json";

export const Filters = () => {
  const dispatch = useDispatch();
  const [searchParams, setSearchParams] = useSearchParams();
  const { brand, price, mileageFrom, mileageTo } = useSelector(selectFilters);
  const [brandSelect, setBrand] = useState(brand);
  const [priceSelect, setPrice] = useState(price);
  const [mileageFromInput, setMileageFrom] = useState(mileageFrom);
  const [mileageToInput, setMileageTo] = useState(mileageTo);
  const [isValid, setIsValid] = useState(true);
  const [messageError, setMessageError] = useState('');

  const [isBrandDropdownOpen, setIsBrandDropdownOpen] = useState(false);
  const [isPriceDropdownOpen, setIsPriceDropdownOpen] = useState(false);

  const priceRange = () => {
    const result = [];
    for (let i = 30; i <= 500; i += 10) {
      result.push(i);
    }
    return result;
  };
  const formatMileage = (value) => {
    const cleanedValue = value.toString().replace(/,/g, "");
    const formattedValue = cleanedValue.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return formattedValue;
  };

  const handleInputFrom = (e) => {
    setMileageFrom(e.target.value);
  };

  const handleInputTo = (e) => {
    setMileageTo(e.target.value);
  };

  useEffect(() => {
    setBrand(brand);
    setPrice(price);
    setMileageFrom(mileageFrom);
    setMileageTo(mileageTo);
  }, [brand, mileageFrom, mileageTo, price]);

  useEffect(() => {
    dispatch(
      setFilters({
        brand: searchParams.get("brand"),
        price: Number.parseInt(searchParams.get("price")),
        mileageFrom: Number.parseInt(searchParams.get("mileageFrom")),
        mileageTo: Number.parseInt(searchParams.get("mileageTo")),
      })
    );
  }, [dispatch, searchParams]);

  useEffect(() => {
    if (isNaN(mileageFromInput) && isNaN(mileageToInput) &&
    (mileageFromInput.length + mileageToInput.length) > 0 ) {
        console.log(mileageFromInput, mileageToInput);
        setMessageError("Need to enter numbers.");
        return setIsValid(false);
    }
    if (mileageFromInput && mileageToInput && parseInt(mileageFromInput) > parseInt(mileageToInput)) {
      setIsValid(false);
      setMessageError("Error range: 'To' mast be equal to or greater than 'From'.");
    } else {
      setIsValid(true);
    }
  }, [mileageFromInput, mileageToInput]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const brand = brandSelect || "";
    const price = priceSelect || "";
    const mileageFrom = mileageFromInput || "";
    const mileageTo = mileageToInput || "";
    setSearchParams({ brand, price, mileageFrom, mileageTo });
  };

  const handleSelectBrand = (e) => {
    setBrand(e.target.attributes.value.value);
    setIsBrandDropdownOpen(false);
  };

  const handleSelectPrice = (e) => {
    setPrice(e.target.attributes.value.value);
    setIsPriceDropdownOpen(false);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <label>
        <Label>Car brand</Label>
        <SelectorWrapper>
          <Selector
            onClick={() => {
              setIsBrandDropdownOpen(!isBrandDropdownOpen);
            }}
            width="224px"
          >
            {brandSelect || "Enter the text"}
          </Selector>
          <CustomArrow $isOpen={isBrandDropdownOpen} />
          {isBrandDropdownOpen && (
            <Dropdown
              close={() => {
                setIsBrandDropdownOpen(false);
              }}
            >
              <ul>
                {makes.map((item) => (
                  <SelectorItem onClick={handleSelectBrand} key={item} value={item} $isActive={brandSelect === item}>
                    {item}
                  </SelectorItem>
                ))}
              </ul>
            </Dropdown>
          )}
        </SelectorWrapper>
      </label>
      <label>
        <Label>Price/ 1 hour</Label>
        <SelectorWrapper>
          <Selector onClick={() => setIsPriceDropdownOpen(!isPriceDropdownOpen)} width="125px">
            {`${priceSelect ? "To "+priceSelect : "To "}$`}
          </Selector>
          <CustomArrow $isOpen={isPriceDropdownOpen} />
          {isPriceDropdownOpen && (
            <Dropdown
              close={() => {
                setIsPriceDropdownOpen(false);
              }}
            >
              <ul>
                {priceRange().map((price) => (
                  <SelectorItem
                    onClick={handleSelectPrice}
                    value={price}
                    key={price}
                    $isActive={parseInt(priceSelect) === price}
                  >
                    {price}
                  </SelectorItem>
                ))}
              </ul>
            </Dropdown>
          )}
        </SelectorWrapper>
      </label>
      <InputContainer>
        <Label>Сar mileage / km</Label>
        <FromToContainer>
          <FormItemWrapper>
            <FromTo>From</FromTo>
            <InputWrapper
              type="text"
              name="minMileage"
              id="minMileage"
              value={formatMileage(mileageFromInput || "")}
              onChange={handleInputFrom}
              $side="left"
            />
          </FormItemWrapper>
          <FormItemWrapper>
            <FromTo>To</FromTo>
            <InputWrapper
              type="text"
              name="maxMileage"
              id="maxMileage"
              value={formatMileage(mileageToInput || "")}
              onChange={handleInputTo}
              $side="right"
            />
          </FormItemWrapper>
        </FromToContainer>
        {!isValid && <ErrorMessage>`{messageError}`</ErrorMessage>}
      </InputContainer>
      <Btn disabled={!isValid}>Search</Btn>
    </Form>
  );
};
