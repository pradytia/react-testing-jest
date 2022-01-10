import React from 'react';
import renderer from 'react-test-renderer';
import TodoList from '../TodoList';

const todos = [
  'Buy apple',
  'Buy banana',
  'Do laundry',
];

describe('TodoList component', () => {
  it('should render with no list', () => {
    let component = renderer.create(<TodoList />);
    expect(component).toMatchSnapshot();
  });

  it('should render with list', () => {
    let component = renderer.create(<TodoList todos={todos} />);
    expect(component).toMatchSnapshot();
  });

  it('should render with filtered list', () => {
    let keywords = ['', 'b', 'buy a'];
    keywords.forEach((keyword) => {
      const component = renderer.create(<TodoList todos={todos} keyword={keyword} />);
      expect(component).toMatchSnapshot();
    })
  });
});
