import React from "react";
import styled from "styled-components";
import { APPLY_FORM_URL, pardDATA } from "../../../utils/data.constant";
import { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getMobBanner } from "../../../utils/api";


export const BannerMob = () => {
  const navigate = useNavigate();

  const [data, setData] = useState();
  
    useEffect(() => {
      const getBanner = async () => {
        try {
          const response = await getMobBanner();
          console.log(response);
          setData(response);
        } catch (error) {
          console.error("Error fetching project data:", error);
        }
      };
      getBanner();
    }, []);
    console.log(data);
    const bannerImg = data?.bannerUrl || null;

  const handleClick = () => {
    pardDATA.recruitStatus === "ready"
      ? navigate("/Recruiting")
      : window.open(APPLY_FORM_URL);
  };

  return (
    <BannerImg onClick={handleClick}>
      <img src={bannerImg} alt="banner"></img>
    </BannerImg>
  );
};

const BannerImg = styled.div`
  width: 100vw;

  img {
    width: 100%;
    height: 100px;
    object-fit: cover;
    text-align: center;
  }

  z-index: 1000;
  position: fixed;
  cursor: pointer;
`;
