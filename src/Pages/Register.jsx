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
width:40%;
padding:20px;
background-color:#F2CD5C;


`;
const Title = styled.h1`
font-size: 24px;
  font-weight: 300;
  text-align:center;
`;

const Form = styled.form`
display:flex;
flex-wrap:wrap;
`;
const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 20px 10px 0px 0px;
  padding: 10px;
`;
const Agreement = styled.span`
font-size: 12px;
  margin: 20px 0px;
`;
const Button = styled.button`
width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: teal;
  color: white;
  cursor: pointer;
`;


const Register = () => {
    return (
        <Container>
            <Wrapper>
                <Title>CREATE AN ACCOUNT</Title>
                <Form>
                    <Input placeholder="Enter First Name" />
                    <Input placeholder="Enter Last Name" />
                    <Input placeholder="Enter Username" />
                    <Input placeholder="Enter Email" />
                    <Input placeholder="Enter Password" />
                    <Input placeholder="Contact No" />
                    <Agreement>
                        By creating an account, I consent to the processing of my personal
                        data in accordance with the <b>PRIVACY POLICY</b>
                    </Agreement>
                    <Button>CREATE</Button>
                </Form>
            </Wrapper>

        </Container>
    );
};

export default Register;