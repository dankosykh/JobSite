/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import schema from '../constants.jsx';
import { post } from '../../../http';

const Wrapper = styled.div`
  position: fixed;
  height: auto;
  display: table;
  background: #fff;
  padding: 2vh 2vw 1vh 2vw;
  border-radius: 10px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 5;
  height: auto;
  box-shadow: 0 19px 38px rgba(0,0,0,0.30), 0 15px 12px rgba(0,0,0,0.22);

  @media (min-width: 768px) {
    width: 30vw;
    min-height: 85vh;
  }
`;

const ButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Options = styled.div`
  height: auto;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Form = styled.form`
  min-height: 85vh;
  height: auto;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: left;
  justify-content: space-evenly;
  border: 1px solid #aeaeae;
  border-radius: 5px;

  @media (min-width: 768px) {
    height: 85vh;
    overflow: scroll;
    /* Hide scrollbar for Chrome, Safari and Opera */
    ::-webkit-scrollbar {
      display: none;
    }

    /* Hide scrollbar for IE, Edge and Firefox */
    ::-ms-overflow-style: none;  /* IE and Edge */
      scrollbar-width: none;  /* Firefox */
  }
`;

const SpacedRowDiv = styled.div`
  margin: 0 1vw;
  display: flex;
  justify-content: left;
  align-items: flex-end;
`;

const Label = styled.label`
  &.noDiv{ margin: 0 2vw; }
  margin: 0 1vw;
  display: flex;
  flex-direction: column;
  align-items: left;
`;

const FieldTitle = styled.p`
  margin: 0;
`;

const Input = styled.input`
  &.zipcode{ width: 100px; }
  height: 3vh;
  width: 175px;
  background: #EDEDED;
  border: none;
  outline: none;
  border-radius: 2px;
  padding: 0 5px;

`;

const Textarea = styled.textarea`
  height: 3vh;
  width: 400px;
  max-width: 400px;
  height: 100px;
  background: #EDEDED;
  border: none;
  outline: none;
  border-radius: 2px;
  padding: 0 5px;
`;

const Select = styled.select`
  width: max(auto, 100px);
  height: 3vh;
  margin: 1vh 1vw;
  padding: 0 5px 0 10px;
  font-size: 1rem;
`;

const Button = schema.navButton;

class PostJobModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      experienceLevel: 'entry',
      workLocationType: 'onsite',
      employmentType: 'fulltime',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.id]: event.target.value,
    });
  }

  handleSubmit(event) {
    event.preventDefault();

    const jobPost = {
      employerId: this.props.employerId,
      company: this.state.company,
      industry: this.state.industry,
      datePosted: new Date(),
      title: this.state.title,
      employmentType: this.state.employmentType,
      workLocationType: this.state.workLocationType,
      zipcode: this.state.zipcode,
      city: this.state.city,
      experienceLevel: this.state.experienceLevel,
      requirements: [this.state.requirements],
      benefits: [this.state.benefits],
      salary: this.state.salary,
      jobDescription: this.state.jobDescription,
      companyDescription: this.state.companyDescription,
    };
    post('api/listing', jobPost)
      .then((result) => {
        console.log(result);
        this.props.toggleModal();
      })
      .catch((err) => console.log(err));
  }

  render() {
    const { yearsExperience, educationLevel } = this.state;

    return ReactDOM.createPortal(
      <Wrapper onMouseDown={(event) => event.stopPropagation()}>
        <Options>
          <Form onSubmit={this.handleSubmit}>

            <SpacedRowDiv>
              <Label>
                <FieldTitle>Company</FieldTitle>
                <Input type="text" id="company" onChange={this.handleChange} />
              </Label>
              <Label>
                <FieldTitle>Job Title</FieldTitle>
                <Input type="text" id="title" onChange={this.handleChange} />
              </Label>
            </SpacedRowDiv>

            <SpacedRowDiv>
              <Label>
                <FieldTitle>Salary</FieldTitle>
                <Input type="text" id="salary" onChange={this.handleChange} />
              </Label>
              <Label>
                <FieldTitle>Industry</FieldTitle>
                <Input type="text" id="industry" onChange={this.handleChange} />
              </Label>
            </SpacedRowDiv>

            <SpacedRowDiv>
              <Label htmlFor="city">
                <FieldTitle>City</FieldTitle>
                <Input type="text" id="city" className="city" name="city" onChange={this.handleChange} />
              </Label>
              <Label htmlFor="zipcode">
                <FieldTitle>Zipcode</FieldTitle>
                <Input type="text" id="zipcode" className="zipcode" name="zipcode" onChange={this.handleChange} />
              </Label>
            </SpacedRowDiv>

            <SpacedRowDiv>
              {/* <Label><FieldTitle>Experience Level</FieldTitle></Label> */}
              <Select id="experienceLevel" onChange={this.handleChange}>
                <option value="entry">Entry</option>
                <option value="mid">Mid</option>
                <option value="senior">Senior</option>
                <option value="executive">Executive</option>
              </Select>
              {/* <Label><FieldTitle>Employment Type</FieldTitle></Label> */}
              <Select id="employmentType" onChange={this.handleChange}>
                <option value="fulltime">Full-Time</option>
                <option value="partime">Part-Time</option>
                <option value="contract">Contract</option>
                <option value="temporary">Temporary</option>
                <option value="internship">Internship</option>
              </Select>
              <Select id="workLocationType" onChange={this.handleChange}>
                <option value="onsite">Onsite</option>
                <option value="remote">Remote</option>
                <option value="mixed">Mixed</option>
              </Select>
            </SpacedRowDiv>

            <Label className="noDiv">
              <FieldTitle>Benefits</FieldTitle>
              <Textarea type="text" id="benefits" onChange={this.handleChange} />
            </Label>


            <Label className="noDiv">
              <FieldTitle>Job Description</FieldTitle>
              <Textarea type="text" id="jobDescription" onChange={this.handleChange} />
            </Label>

            <Label className="noDiv">
              <FieldTitle>Requirements</FieldTitle>
              <Textarea type="text" id="requirements" onChange={this.handleChange} />
            </Label>

            <Label className="noDiv">
              <FieldTitle>Company Description</FieldTitle>
              <Textarea type="text" id="companyDescription" onChange={this.handleChange} />
            </Label>
            <ButtonWrapper>
              <Button type="submit" value="PostJob">POST JOB</Button>
            </ButtonWrapper>
          </Form>
        </Options>
      </Wrapper>,
      document.getElementById('modal-root') || document.createElement('div'), // for testing purposes
    );
  }
}

export default PostJobModal;
