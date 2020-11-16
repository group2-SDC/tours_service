import React from 'react';

const Tab = (props) => {
  const handleClick = () => {
    props.updateView(props.tabNumber);
  }

  return (
    <td onClick={handleClick}>
        {props.name !== 'Browse' ? 
        <span>
           {props.name} <br />
           {props.description}
        </span>
        : 
        <span>
          ... <br />
          {props.name}
        </span>
      }
    </td>
  )
}

export default Tab;