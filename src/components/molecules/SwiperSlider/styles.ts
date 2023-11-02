import styled from "styled-components";

export const SwiperSliderContainer = styled.div`
  max-width: 80vw;

  .swiper {
    display: flex;
    flex-direction: row;

    height: 200px;
    width: 100%;

    margin-left: auto;
    margin-right: auto;

    &:hover {
      .swiper-button-prev,
      .swiper-button-next {
        visibility: visible;
      }
    }
  }

  .swiper-slide img {
    border-radius: 8px;
    border: 3px solid transparent;
    cursor: pointer;
    transition: all 300ms;

    height: calc(100% - 6px) !important;
    width: calc(100% - 6px) !important;

    object-fit: cover;

    &:hover {
      border: 3px solid #f2f2f2;
    }
  }

  .swiper-button-disabled {
    display: none;
  }

  .swiper-button-prev,
  .swiper-button-next {
    height: 100%;
    top: var(--swiper-navigation-top-offset, 10%);
    padding: 0 0.5rem;
    transition: all 200ms;
    visibility: collapse;

    &::after {
      color: #f2f2f2;
      font-size: 2rem;
    }
  }

  .swiper-button-next {
    right: var(--swiper-navigation-sides-offset, 0px);
  }

  .swiper-button-prev {
    left: var(--swiper-navigation-sides-offset, 0px);
  }
`;

export const SlidesPerViewContainer = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 1rem;

  width: 100%;

  label,
  input,
  button {
    height: 100%;
    border: none;
    outline: none;
    padding: 0;
    border-radius: 4px;
    background-color: #222425;

    font-family: Inter;
    font-size: 1rem;
    font-style: normal;
    font-weight: 500;
    line-height: 150%; /* 21px */
    color: #f2f2f2f0;

    min-height: 40px;
  }

  label {
    background-color: transparent;
    display: grid;
    place-items: center;
  }

  input {
    padding-left: 0.5rem;
  }

  button {
    padding: 0 0.5rem;
    cursor: pointer;
  }
`;
