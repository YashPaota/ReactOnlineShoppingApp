import React from 'react';
import Announcement from '../Components/Announcement';
import Footer from '../Components/Footer';
import Navbar from '../Components/Navbar';
import styled from "styled-components";
import { NavLink } from 'react-router-dom';


const Wrapper = styled.div`
height:60vh;
width:100vw;
display:flex;
justify-content:center;
align-items:center;

`;
const Container = styled.div`

height:70%;
width:90%;
border-radius:10px;
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
background-color:#93BFCF;


`;
const Title = styled.h1`
font-size:40px;
font-weight:bold;
`;

const TitleText = styled.h3`
margin-bottom:10px;
`;

const Desc = styled.p`
margin-top:10px;
font-size:18px;

`;
const Button = styled.button`
  width: 160px;
  border: none;
  padding: 15px 20px;
  background-color: teal;
  color: white;
  cursor: pointer;
  margin-top:20px;

`;



const Error = () => {
    return (
        <>
            <Navbar />
            <Announcement />
            <Wrapper>
                    <Container>
                        <Title>404</Title>
                        <TitleText>UH OH! You're lost.</TitleText>
                        <Desc>The page you are looking for does not exist. How you got here is a
                            mystery. But you can click the button below to go back to the
                            homepage.
                        </Desc>
                        <NavLink to="/">
                            <Button>Go Back to Home</Button>
                        </NavLink>
                     </Container>
            
            </Wrapper>

            <Footer />
        </>

    );
};

export default Error;