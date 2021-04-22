import React from 'react';
import { shallow } from 'enzyme';
import Searchbar from '../components/Searchbar.jsx';

describe('Searchbar', () => {
  let wrapper = shallow(<Searchbar />);
  const expected = {
    target: {
      name: 'search',
      value: 'engineer',
    },
  };

  it('should detect onChange', () => {
    wrapper.find('#search').simulate('change', expected);
  });

  it('should correctly update state with onChange value', () => {
    const setSearch = jest.fn();
    const useStateSpy = jest.spyOn(React, 'useState');
    wrapper = shallow(<Searchbar setSearch={setSearch} />);
    useStateSpy.mockImplementation((search) => [search, setSearch]);

    wrapper.find('#search').simulate('change', expected);
    wrapper.find('#searchBar').simulate('submit', { preventDefault: () => null });

    expect(setSearch).toHaveBeenCalledWith('engineer');
  });
});
