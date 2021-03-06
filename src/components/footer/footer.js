import React from 'react';
import styled from 'styled-components';
import { FlexColumn } from '../../theme/defaultStyles';

const StyledFooter = styled.footer`

    width: 100%;
    height: auto;
    background: #6B6765;
    ${FlexColumn}
    text-align: center;
    margin-bottom: -85px;


    p{
        font-weight: 400;
        line-height: 23px;
        letter-spacing: 0.05em;

        color: #FFFFFF;

        ion-icon{
            vertical-align: middle;
            color: red;
            font-size: 150%;
        }
    }

    @media screen and (min-width: 768px) {
        height: 80px;
    }
`;

const Footer = () => {
    return (
        <StyledFooter>
            <p>designed and developed with <ion-icon name="heart"></ion-icon></p>
            <p>Disclaimer - this is just a demo site built for demonstration of skills. The coffeehouse image was clicked in Starbucks in DLF Promenade, New Delhi by me. Coffee images belong to Starbucks
and were taken from Google. I am an espresso enthusiast and this website is just to demonstrate my skills and my interests. </p>
        </StyledFooter>
    );
}

export default Footer;