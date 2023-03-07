import React from 'react';
import SendIcon from '@mui/icons-material/Send';
import styled from "styled-components";


const Container = styled.div`
height:60vh;
background-color:#fcf5f5;
display:flex;
justify-content:center;
align-items:center;
flex-direction:column;
`;
const Title = styled.h1`
font-size:70px;
margin:20px;
`;
const Desc = styled.div`
font-size:24px;
font-weight:300;
margin:20px;
`;
const InputContainer = styled.div`
width:50%;
height:40px;
background-color:white;
display:flex;
justify-content:space-between;
border:1px solid lightgray;
`;
const Input = styled.input`
border:none;
outline:none;
flex:8;
padding:20px;
`;
const Button = styled.button`
flex:1;
border:none;
color:white;
background-color:teal;

`;

const Newsletter = () => {
  return (
    <Container>
        <Title>NEWSLETTER</Title>
        <Desc>Get Timely Updates From Your Favorite Products.</Desc>
        <InputContainer>
            <Input placeholder="Your Email"></Input>
            <Button>
              <SendIcon />

            </Button>
        </InputContainer>
    </Container>
  )
}

export default Newsletter