import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

function Add(a,b){
  let added = a+b;
  return (
    added
  )
}
test('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

describe('Add Method', () => {
  it('should return 2', () => {
    expect(Add(1,1)).toBe(2);
  });
  
  it('should return -1', () => {
    expect(Add(0,-2)).toBe(-2);
  });
  
});

