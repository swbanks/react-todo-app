/* eslint-disable react/prop-types */
import React, { useState } from 'react';

const onEnter = (e, toDoList, setToDoList) => {
  if (e.key === 'Enter') {
    let newList = toDoList.concat([e.target.value]);
    setToDoList(newList);
  }
};

const ListItem = props => {
  return (
    <div>
      <a href={'#'} onClick={() => props.removeItem(props.displayText)}>
        {props.displayText}
      </a>
    </div>
  );
};

function App() {
  const [toDoList, setToDoList] = useState(['firstItem', 'secondItem']);

  const removeItem = itemText => {
    setToDoList(toDoList.filter(item => item !== itemText));
  };

  return (
    <div>
      <input type='text' onKeyDown={e => onEnter(e, toDoList, setToDoList)} />
      <br />
      {toDoList.map((item, index) => (
        <ListItem displayText={item} key={index} removeItem={removeItem} />
      ))}
    </div>
  );
}

export default App;
