import React from 'react';

class Tab extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: false
    }
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({
      selected: true
    });
    this.props.updateView(this.props.tabNumber);
  }

  render() {
    return (
      <td onClick={this.handleClick}>
        {this.props.name !== 'Browse' ? 
        <span>
           {this.props.name} <br />
           {this.props.description}
        </span>
        : 
        <span>
          ... <br />
          {this.props.name}
        </span>
      }
      </td>
    )
  }
}


export default Tab;