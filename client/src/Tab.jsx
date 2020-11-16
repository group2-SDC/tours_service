import React from 'react';

class Tab extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: false
    }
  }

  render() {
    return (
      <td>
        {this.props.name} <br />
        {this.props.description}
      </td>
    )
  }
}


export default Tab;