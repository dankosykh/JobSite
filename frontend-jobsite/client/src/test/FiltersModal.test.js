import React from 'react';
import { shallow } from 'enzyme';
import FiltersModal from '../components/FiltersModal.jsx';

describe('Filters', () => {
  const wrapper = shallow(<FiltersModal />);
  const expected = {
    target: {
      name: 'employment',
      value: 'fulltime',
    },
  };

  it('should detect onChange', () => {
    wrapper.find('#employment').simulate('change', expected);
  });

  it('should correctly update state with onChange value', () => {
    wrapper.find('#employment').simulate('change', expected);
    expect(wrapper.state().employment).toBe('fulltime');
  });

  it('should update state for slider', () => {
    const expectSalary = {
      target: {
        name: 'salary',
        value: 10000,
      },
    };

    wrapper.find('#salary').simulate('change', expectSalary);
    expect(wrapper.state().salary).toBe(10000);
  });

  it('should call function to pass data', () => {
    const setFilters = jest.fn();
    const wrapper = shallow(<FiltersModal setFilters={setFilters} />);

    wrapper.find('#filters').simulate('submit', { preventDefault: () => null });
    expect(setFilters.mock.calls.length).toBe(1);

  });
});