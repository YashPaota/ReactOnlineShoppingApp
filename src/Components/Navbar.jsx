import { Search } from '@mui/icons-material';
import React from 'react';
import styled from "styled-components";
import Badge from '@mui/material/Badge';
// import MailIcon from '@mui/icons-material/Mail';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { NavLink } from 'react-router-dom';
import {mobile} from "../Responsive"; 


const Navbar = () => {
    return (
      <Container>
        <Wrapper>
          <Left>
            <Language>EN</Language>
            <SearchContainer>
              <Input placeholder="Search" />
              <Search style={{ color: "gray", fontSize: 16 }} />
            </SearchContainer>
          </Left>
          <Center>
            <Logo>RAJPUT'S</Logo>
          </Center>
          <Right>
            <NavLink to="/"><MenuItem>HOME</MenuItem></NavLink>
            <MenuItem><NavLink to="/products">PRODUCTS</NavLink></MenuItem>
            {/* <NavLink to="/Products"><MenuItem>PRODUCTS</MenuItem></NavLink> */}
            <NavLink to="/Register"><MenuItem>REGISTER</MenuItem></NavLink>
            <NavLink to="/Login"><MenuItem>LOGIN</MenuItem></NavLink>
            <NavLink to="/Cart">
            <MenuItem>
              <Badge badgeContent={4} color="primary">
                <ShoppingCartOutlinedIcon />
              </Badge>
            </MenuItem></NavLink>
          </Right>
        </Wrapper>
      </Container>
    );
  };

const Container = styled.div`
   height:60px;
   ${mobile({height:"50px"})}

`;
const Wrapper = styled.div`  
   padding:10px 20px; 
   display:flex;
   align-items:center;
   justify-content:space-between;
   ${mobile({padding:"10px 0px"})}
`;
const Left = styled.div`
flex:1;
display:flex;
align-items:Center;
`;

const Language = styled.span`
  font-size:14px;
  cursor:pointer;
  ${mobile({display:"none"})}
`;

const SearchContainer = styled.div`
   border:0.5px solid lightgray;
   display:flex;
   align-items:center;
   margin-left:25px;
   padding:5px;
`;

const Input = styled.input`
  border:none;
  outline:none;
  ${mobile({width:"10px"})}

`;

const Center = styled.div`
flex:1;
text-align:center;
`;

const Logo = styled.h1`
  font-weight: bold;
  color:teal;
  font-size:40px;
  ${mobile({ fontSize: "24px" })}
`;

const Right = styled.div`
flex:1;
display: flex;
align-items: center;
justify-content: flex-end;
${mobile({ flex: 2, justifyContent: "center" })}
`;

const MenuItem = styled.div`
font-size:14px;
cursor:pointer;
margin-left:25px;
${mobile({ fontSize: "12px", marginLeft: "10px" })}

`;

export default Navbar;