import React, { useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import schema from './constants.jsx';

const FlexDiv = styled.div`
  font-family: Arial;
  display: flex;
  margin: 0;
  height: 94vh;
  width: 100vw;
  justify-content: center;
  flex-wrap: wrap;
  overflow-x: hidden;
  background: linear-gradient(135deg, ${schema.secondary}, ${schema.primary});
`;
const Div = styled.div`
  height: 12%;
  width: 32%;
  min-width: 256px;
  max-width: 400px;
  margin-top: 2vh;
  margin-left: 4vw;
  float: left;
  color: white;
  text-shadow: 1px 1px 4px black;
  transition-duration: 0.4s;
  @media (min-width: 768px) {
    margin-top: 50vh;
    margin-left: 20vw;
  }
`;
const Form = styled.form`
  height: 65%;
  width: 35%;
  min-height: 640px;
  min-width: 256px;
  max-width: 320px;
  margin: auto;
  padding: 36px;
  border-radius: 5px;
  position: relative;
  float: right;
  text-align: center;
  background: rgba(255,255,255,0.95);
  box-shadow: 8px 12px 16px #333;
`;
const Input = styled.input`
  height: 36px;
  width: 90%;
  border: 1px solid grey;
  border-radius: 5px;
`;
const Label = styled.label`
  float: left;
  margin: 18px 25px 4px 25px;
`;
const Button = styled.button`
  height: 40px;
  width: 55%;
  margin: 32px auto;
  border: 1px solid grey;
  border-radius: 25px;
  background: white;
  ${schema.hoverEffect}
`;
const BottomDiv = styled.div`
  position: absolute;
  bottom: 0;
  width: 80%;
  margin: auto auto 32px auto;
  text-align: center;
`;
const ToggleButtonDiv = styled.div`
  height: 6vh;
  width: 10vw;
  position: absolute;
  top: 0;
  right: 8vw;
  z-index: 1;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const Toggle = schema.outlinedButton;

const SEEKER_REGISTER_HEADER = 'Looking for a job? Sign up now!';
const EMPLOYER_REGISTER_HEADER = 'Looking for applicants? Sign up now!';
const SEEKER_LOGIN_HEADER = 'Login to get back to your search!';
const EMPLOYER_LOGIN_HEADER = 'Login to get access to your applicants!';
const REGISTER_BOTTOM_TEXT = 'Already a user? ';
const LOGIN_BOTTOM_TEXT = 'Don\'t have an account yet? ';

const FrontPage = ({
  setUserID, setAccountType, bubbleUpEmail, bubbleUpCompany,
}) => {
  const [user, setUser] = useState('Seeker');
  const [formType, setFormType] = useState('Login');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [company, setCompany] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const formToggle = () => {
    if (formType === 'Register') {
      setFormType('Login');
    } else {
      setFormType('Register');
    }
  };

  const handleChange = (e) => {
    switch (e.target.id) {
      case 'firstName':
        setFirstName(e.target.value);
        break;
      case 'lastName':
        setLastName(e.target.value);
        break;
      case 'email':
        setEmail(e.target.value);
        break;
      case 'password':
        setPassword(e.target.value);
        break;
      case 'company':
        setCompany(e.target.value);
        break;
      default:
        break;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // TODO validate form data before post request

    if (formType === 'Register') {
      if (user === 'Seeker') {
        axios.post(`${schema.url}/users`, {
          firstName,
          lastName,
          email,
          password,
        })
          .then(({ data }) => {
            const { accessToken, _id } = data.data;
            setUserID(_id);
            setAccountType('User');
            bubbleUpEmail(email);
            // Do something with accessToken
            window.location.href = `${window.location.origin}/#/seeker`;
          });
      } else {
        axios.post(`${schema.url}/employers`, {
          company,
          firstName,
          lastName,
          email,
          password,
        })
          .then(({ data }) => {
            const { accessToken, _id } = data.data;
            setUserID(_id);
            setAccountType('Employer');
            bubbleUpEmail(email);
            bubbleUpCompany(company);
            // Do something with accessToken
            window.location.href = `${window.location.origin}/#/employer`;
          });
      }
    } else {
      axios.post(`${schema.url}/auth`, {
        email,
        password,
      })
        .then(({ data }) => {
          const { accessToken, _id, accountType } = data.data;
          setUserID(_id);
          setAccountType(accountType);
          bubbleUpEmail(email);
          // Do something with accessToken
          if (user === 'Seeker') {
            window.location.href = `${window.location.origin}/#/seeker`;
          } else {
            bubbleUpCompany(company);
            window.location.href = `${window.location.origin}/#/employer`;
          }
        });
    }
  };

  const handleUserToggle = (e) => {
    e.preventDefault();
    if (user === 'Seeker') {
      setUser('Employer');
    } else {
      setUser('Seeker');
    }
  };

  return (
    <FlexDiv>
      <ToggleButtonDiv>
        <Toggle onClick={handleUserToggle}>{`${user === 'Seeker' ? 'Employer' : 'Seeker'} Portal`}</Toggle>
      </ToggleButtonDiv>
      <Div>
        <h1>{schema.title}</h1>
        <h3>{schema.slogan}</h3>
      </Div>
      <Form>
        <h2>{`${formType} as ${user}`}</h2>
        {
        formType === 'Register' ? (
          <>
            {
            user === 'Seeker'
              ? <h4>{SEEKER_REGISTER_HEADER}</h4>
              : <h4>{EMPLOYER_REGISTER_HEADER}</h4>
            }
            {
            user === 'Employer' && (
            <>
              <Label htmlFor="company">{'Company: '}</Label>
              <Input type="text" id="company" onChange={handleChange} />
            </>
            )
            }
            <Label htmlFor="firstName">{'First Name: '}</Label>
            <Input type="text" id="firstName" onChange={handleChange} />
            <Label htmlFor="lastName">{'Last Name: '}</Label>
            <Input type="text" id="lastName" onChange={handleChange} />
          </>
        ) : (
          <>
            {
            user === 'Seeker'
              ? <h4>{SEEKER_LOGIN_HEADER}</h4>
              : <h4>{EMPLOYER_LOGIN_HEADER}</h4>
            }
            <br />
            <br />
          </>
        )
        }
        <Label htmlFor="email">{'Email: '}</Label>
        <Input type="email" id="email" onChange={handleChange} />
        <Label htmlFor="password">{'Password: '}</Label>
        <Input type="password" id="password" onChange={handleChange} />
        <Button onClick={handleSubmit}>{formType}</Button>
        {
        formType === 'Register'
          ? (
            <BottomDiv>
              {REGISTER_BOTTOM_TEXT}
              <a href="#app" onClick={formToggle}>Sign in</a>
            </BottomDiv>
          ) : (
            <BottomDiv>
              {LOGIN_BOTTOM_TEXT}
              <a href="#app" onClick={formToggle}>Register</a>
            </BottomDiv>
          )
        }
      </Form>
    </FlexDiv>
  );
};

export default FrontPage;
