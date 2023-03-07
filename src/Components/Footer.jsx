import React from 'react';
import styled from "styled-components";
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import TwitterIcon from '@mui/icons-material/Twitter';
import RoomIcon from '@mui/icons-material/Room';
import PhoneIcon from '@mui/icons-material/Phone';
import MailOutlinedIcon from '@mui/icons-material/MailOutlined';


const Container = styled.div`
display:flex;
`;
const Left = styled.div`
flex:1;
display:flex;
flex-direction:column;
padding:20px;
`;

// const Logo = styled.h1``;

const Desc = styled.p`
  margin: 20px 0px;
`;

const SocialContainer = styled.div`
  display: flex;
`;

const SocialIcon = styled.div`
width:40px;
height:40px;
border-radius:50%;
background-color: #${(props) => props.color};
display:flex;
justify-content:center;
align-items:center;
margin-right:20px;
`;

const Center = styled.div`
flex:1;
padding:20px;
`;

const Title = styled.h3`
  margin-bottom: 30px;
`;

const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`;

const ListItem = styled.li`
  width: 50%;
  margin-bottom: 10px;
`;

const Right = styled.div`
  flex: 1;
  padding: 20px;
  
`;

const ContactItem = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
`;

const Payment = styled.img`
    width: 50%;
`;


const Footer = () => {
  return (
    <Container>
     <Left>
        <logo>Rajput's</logo>
        <Desc>Choose The Best Around The World.</Desc>
        <SocialContainer>
            <SocialIcon color="3B5999">
               <FacebookIcon />
            </SocialIcon>
            <SocialIcon color="E4405F">
               <InstagramIcon />
            </SocialIcon>
            <SocialIcon color="FF0000">
               <YouTubeIcon />
            </SocialIcon>
            <SocialIcon color="55ACEE">
               <TwitterIcon />
            </SocialIcon>
        </SocialContainer>
     </Left>
     <Center>
        <Title>Useful Links</Title>
        <List>
          <ListItem>Home</ListItem>
          <ListItem>Cart</ListItem>
          <ListItem>Man Fashion</ListItem>
          <ListItem>Woman Fashion</ListItem>
          <ListItem>Accessories</ListItem>
          <ListItem>My Account</ListItem>
          <ListItem>Order Tracking</ListItem>
          <ListItem>Wishlist</ListItem>
          <ListItem>Wishlist</ListItem>
          <ListItem>Terms</ListItem>
        </List>
      </Center>
      <Right>
        <Title>Contact</Title>
        <ContactItem>
          <RoomIcon style={{marginRight:"10px"}}/> 622 Dixie Path , South Tobinchester 98336
        </ContactItem>
        <ContactItem>
          <PhoneIcon style={{marginRight:"10px"}}/> +1 234 56 78
        </ContactItem>
        <ContactItem>
          <MailOutlinedIcon style={{marginRight:"10px"}} /> contact@lama.dev
        </ContactItem>
        <Payment src="https://i.ibb.co/Qfvn4z6/payment.png" />
      </Right>
    </Container>

    
  );
};

export default Footer;