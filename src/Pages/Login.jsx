import React from 'react';
import styled from "styled-components";



const Container = styled.div`
height:100vh;
width;100vw;
background:linear-gradient(rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.5)), 
            url("https://cdn.pixabay.com/photo/2016/03/09/09/30/woman-1245817_960_720.jpg") center;
background-repeat: no-repeat;
${'' /* object-fit: cover; */}
background-size: cover;

display:flex;
justify-content:center;
align-items:center;
`;

const Wrapper = styled.div`
  width: 25%;
  padding: 20px;
  background-color: #F2CD5C;
  
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 10px 0;
  padding: 10px;
`;

const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: teal;
  color: white;
  cursor: pointer;
  margin-bottom: 10px;
`;

const Link = styled.a`
  margin: 5px 0px;
  font-size: 12px;
  text-decoration: underline;
  cursor: pointer;
`;

const Login = () => {
  return (
    <Container>
    <Wrapper>
        <Title>SIGN In</Title>
        <Form>
            <Input placeholder="Username" />
            <Input placeholder="Password" />
            <Button>LOGIN</Button>
            <Link>DO NOT YOU REMEMBER THE PASSWORD?</Link>
          <Link>CREATE A NEW ACCOUNT</Link>
        </Form>
    </Wrapper>

</Container>
  );
};

export default Login;