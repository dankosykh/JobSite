import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import schema from '../constants.jsx';

const Wrapper = styled.div`
  height: 80vh;
  position: fixed;
  display: table;
  background: #fff;
  padding: 2vh 2vw 1vh 2vw;
  border-radius: 10px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 500;
  max-width: 30vw;
  max-height: 95vh;
  overflow: hidden;
  box-shadow: 0 19px 38px rgba(0,0,0,0.30), 0 15px 12px rgba(0,0,0,0.22);

  @media (min-width: 768px) {
    width: 50vw;
  }
`;
const Options = styled.div`
  height: 80vh;
  max-height: 95vh;
`;
const Input = styled.input`
`;
const Form = styled.form`
  height: 78vh;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;
const TextArea = styled.textarea`
  padding: 2vh 1vw;
`;
const ButtonWrapper = styled.div`
  display: flex;
  justify-content: space-around;
`;
const Button = schema.navButton;

const ResumeFormModal = ({ seekerId }) => {
  // const [email, setEmail] = useState('');
  // const [firstName, setFirstName] = useState('');
  // const [lastName, setLastName] = useState('');
  // const [phone, setPhone] = useState('');
  // const [links, setLinks] = useState({});
  // const [city, setCity] = useState('');
  // const [zipcode, setZipcode] = useState(0);
  // const [education, setEducation] = useState([]);
  // const [ifResumePublic, setIfResumePublic] = useState(true);
  // const [workExperience, setWorkExperience] = useState([]);
  // const [certificates, setCertificates] = useState([]);

  const [linkCount, setLinkCount] = useState([0]);
  const [edCount, setEdCount] = useState([0]);
  const [expCount, setExpCount] = useState([0]);
  const [certCount, setCertCount] = useState([0]);

  const handleUpdate = (e) => {

  };

  return ReactDOM.createPortal(
    <Wrapper onMouseDown={(event) => { event.stopPropagation(); console.log('mouseDown'); }}>
      <Options onMouseDown={(event) => { event.stopPropagation(); console.log('options'); }}>
        <Form onSubmit={handleUpdate}>
          <Input name="email" type="input" placeholder="Email..." />
          <Input name="firstName" type="input" placeholder="First Name..." />
          <Input name="lastName" type="input" placeholder="Last Name..." />
          <Input name="phone" type="tel" />
          {
            linkCount.map(() => (
              <>
                <Input name="linksKey" type="input" placeholder="Something..." />
                <Input name="linksVal" type="url" placeholder="Link..." />
              </>
            ))
          }
          <Input name="city" type="input" placeholder="City..." />
          <Input name="zipcode" type="number" />
          {
            edCount.map(() => (
              <>
                <Input name="institution" type="input" placeholder="Institution..." />
                <Input name="yearGraduated" type="number" />
                <Input name="degreeType" type="input" placeholder="Degree Type..." />
                <Input name="fieldOfStudy" type="input" placeholder="Field of Study..." />
              </>
            ))
          }
          {/* Resume Publicity Flag Input */}
          {
            expCount.map(() => (
              <>
                <Input name="employer" type="input" placeholder="Employer..." />
                <Input name="title" type="input" placeholder="Title..." />
                <Input name="startDate" type="date" />
                <Input name="endDate" type="date" />
                <TextArea name="description" type="input" placeholder="Description..." />
              </>
            ))
          }
          {
            certCount.map(() => (
              <>
                <Input name="licenseNum" type="input" placeholder="LicenseID..." />
                <Input name="name" type="input" placeholder="Certification..." />
              </>
            ))
          }
          <ButtonWrapper>
            <Button type="submit">Update</Button>
          </ButtonWrapper>
        </Form>

      </Options>
    </Wrapper>,
    document.getElementById('modal-root') || document.createElement('div'), // for testing purposes
  );
};

export default ResumeFormModal;
