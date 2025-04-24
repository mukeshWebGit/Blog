import { Box,  styled } from '@mui/material';
import React from 'react';

const ImageBanner = styled(Box)`
    background:rgb(50, 14, 255);
    color: #fff;
    height: 50vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    & > h5 {
        font-size: 20px;
        margin-bottom: 10px;
    }
    & > p {
        font-size: 14px;
        color: #878787;
    }
`;
const Banner = ({ heading, subheading }) => {
    return (
        <ImageBanner>
           <h5>{heading}</h5>
           <p>{subheading} </p>
         </ImageBanner>
    );
};

export default Banner;