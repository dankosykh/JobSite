/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import schema from '../constants.jsx';

const Wrapper = styled.div`
  position: fixed;
  display: table;
  background: #fff;
  padding: 2vh 2vw 1vh 2vw;
  border-radius: 10px;
  top: 25%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 5;
  max-width: 90vw;
  max-height: 95vh;
  overflow: hidden;
  box-shadow: 0 19px 38px rgba(0,0,0,0.30), 0 15px 12px rgba(0,0,0,0.22);

  @media (min-width: 768px) {
    max-width: 35vw;
  }
`;

const Options = styled.div`
  max-height: 95vh;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-height: 95vh;
`;

const Legend = styled.legend`
  color: #424242;
`;

const FieldSet = styled.fieldset`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-evenly;
  border-radius: 5px;
  margin: 1vh 0;
  width: 95%;

  // @media (min-width: 768px) {
  //   justify-content: space-between;
  // }
`;

const Radio = styled.input`
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  width: 15px;
  height: 15px;
  top: 2px;
  border-radius: 50%;
  background-color: #fff;

  position: relative;
  content: '';
  display: inline-block;
  visibility: visible;
  border: 1px solid #424242;
  &:checked {
    width: 15px;
    height: 15px;
    border-radius: 50%;
    position: relative;
    top: 2px;
    background-color: ${schema.primary};
    background-clip: content-box;
    padding: 1px;
    content: '';
    display: inline-block;
    visibility: visible;
    border: 1px solid #424242;
  }
  &:focus { outline: none; }
`;

const Button = schema.navButton;

class FiltersModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      yearsExperience: '',
      educationLevel: '',
    };
    this.expanded = React.createRef();
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const field = event.target.id;
    const { value } = event.target;

    this.setState({
      [field]: value,
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.getFilters(this.state);
    this.props.toggleModal();
  }

  render() {
    const { yearsExperience, educationLevel } = this.state;

    return ReactDOM.createPortal(
      <Wrapper onMouseDown={(event) => event.stopPropagation()}>
        <Options>
          <Form onSubmit={this.handleSubmit}>
            <FieldSet onChange={this.handleChange}>
              <Legend>Years of Experience</Legend>
              <label htmlFor="yearsExperience">
                <Radio type="radio" name="yearsExperience" id="yearsExperience" value="0–2" />
                0–2
              </label>
              <label htmlFor="yearsExperience">
                <Radio type="radio" name="yearsExperience" id="yearsExperience" value="3–5" />
                3–5
              </label>
              <label htmlFor="yearsExperience">
                <Radio type="radio" name="yearsExperience" id="yearsExperience" value="6–9" />
                6–9
              </label>
              <label htmlFor="yearsExperience">
                <Radio type="radio" name="yearsExperience" id="yearsExperience" value="10" />
                10+
              </label>
            </FieldSet>
            <FieldSet onChange={this.handleChange}>
              <Legend>Level of Education</Legend>
              <label htmlFor="educationLevel">
                <Radio type="radio" name="educationLevel" id="educationLevel" value="diploma" />
                Diploma
              </label>
              <label htmlFor="educationLevel">
                <Radio type="radio" name="educationLevel" id="educationLevel" value="associates" />
                Associates
              </label>
              <label htmlFor="educationLevel">
                <Radio type="radio" name="educationLevel" id="educationLevel" value="bachelors" />
                Bachelors
              </label>
              <label htmlFor="educationLevel">
                <Radio type="radio" name="educationLevel" id="educationLevel" value="masters" />
                Masters
              </label>
              <label htmlFor="educationLevel">
                <Radio type="radio" name="educationLevel" id="educationLevel" value="phd" />
                PhD
              </label>
              <label htmlFor="educationLevel">
                <Radio type="radio" name="educationLevel" id="educationLevel" value="other" />
                other
              </label>
            </FieldSet>
            {/* <FieldSet>
              <Legend>Desired Salary</Legend>
              <RangeLabel htmlFor="desiredSalary">
                <Figures><Figure>0k</Figure><Figure>10</Figure><Figure>20</Figure><Figure>30</Figure><Figure>40</Figure><Figure>50</Figure><Figure>60</Figure><Figure>70</Figure><Figure>80</Figure><Figure>90</Figure><Figure>100</Figure><Figure>110</Figure><Figure>120k+</Figure></Figures>
                <Range id="desiredSalary" type="range" min={min} max={max} value={desiredSalary} step="10000" onChange={this.handleChange} />
              </RangeLabel>
            </FieldSet> */}
            <Button type="submit" value="Filter Results">FILTER</Button>
          </Form>
        </Options>
      </Wrapper>,
      document.getElementById('modal-root') || document.createElement('div'), // for testing purposes
    );
  }
}

export default FiltersModal;
