import React from 'react';
import { shallow } from 'enzyme';
import Location from '../components/Location.jsx';

describe('Location', () => {
  let wrapper = shallow(<Location />);
  const expected = {
    target: {
      name: 'location',
      value: 'San Francisco',
    },
  };

  it('should detect onChange', () => {
    wrapper.find('#location').simulate('change', expected);
  });

  it('should correctly update state with onChange value', () => {
    const setLocation = jest.fn();
    const useStateSpy = jest.spyOn(React, 'useState');
    wrapper = shallow(<Location setLocation={setLocation} />);
    useStateSpy.mockImplementation((location) => [location, setLocation]);

    wrapper.find('#location').simulate('change', expected);
    wrapper.find('#locationBar').simulate('submit', { preventDefault: () => null });

    expect(setLocation).toHaveBeenCalledWith('San Francisco');
  });
});
