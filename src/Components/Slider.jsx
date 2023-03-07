import React from 'react';
import styled from "styled-components";
import { useState } from 'react';
import FirstPageSharpIcon from '@mui/icons-material/FirstPageSharp';
import LastPageSharpIcon from '@mui/icons-material/LastPageSharp';
import { sliderItems } from '../data';

const Slider = () => {
   const[slideIndex , setSlideIndex] =useState(0);
    const handleClick = (direction) => {
        if(direction === "left")
        {
            setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2)
        }
        else{
            setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0 )
        }

    }
    return (
        <Container>
            <Arrow direction="left" onClick={() => handleClick("left")}>
                <FirstPageSharpIcon />
            </Arrow>
            <Wrapper slideIndex={slideIndex}>
               {sliderItems.map((item) => (
                <Slide bg={item.bg} key={item.id}>
                    <ImgContainer >
                        <Image src={item.img} />
                    </ImgContainer>
                    <InfoContainer >
                        <Title>{item.title}</Title>
                        <Desc>{item.desc}</Desc>
                        <Button>SHOP NOW</Button>
                   </InfoContainer>
                </Slide>
               ))}
            </Wrapper>
            <Arrow direction="right" onClick={() => handleClick("right")}>
                <LastPageSharpIcon />
            </Arrow>

        </Container>
    )
}

const Container = styled.div`
 width:100%;
 height:100vh;
 display:flex;
 ${'' /* background-color:coral; */}
position:relative;
overflow:hidden;
`;

const Slide = styled.div`
display:flex;
align-items:center;
width:100vw;
height:100vh;
${'' /* background-color:#${props => props.bg}; */}
`;
const ImgContainer = styled.div`
height:100%;  
flex:1;
`;

const Image = styled.img`
height:80%
`;

const InfoContainer = styled.div`
flex:1;
padding:50px;
`;

const Title = styled.h1`

font-size: 70px;
color:teal;
`;

const Desc = styled.p`
margin: 50px 0px;
  font-size: 20px;
  font-weight: 500;
  letter-spacing: 3px;
`;

const Button = styled.button`
padding: 10px;
  font-size: 20px;
  background-color: transparent;
  cursor: pointer;
`;

const Wrapper = styled.div`
height:100%;
display : flex;
transition: all 1.5s ease;
transform:translateX(${(props) => props.slideIndex * -100}vw);
`;

const Arrow = styled.div`
  height:50px;
  width:50px;
  background-color:#fff7f7;
  border-radius:50%;
  display:flex;
  align-items:center;
  justify-content:center;
  position:absolute;
  top:0px;
  bottom:10px;
  margin:auto;
  left : ${props => props.direction === "left" && "10px"};
  right : ${props => props.direction === "right" && "10px"};
  cursor:pointer;
  opacity:0.5;
  z-index:2;
`;

export default Slider;