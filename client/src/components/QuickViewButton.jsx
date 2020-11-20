import React from 'react';
import styled from 'styled-components';

const StyledQuickViewButton = styled.button`
  background-color: ${props => props.isHovered ? 'lightgray' : 'white'};
  border: 1px solid black;
  border-radius: 3px;
  padding: 6px 10px;
  font-weight: 500;
  font-size: 12px;
`;

class QuickViewButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isHovered: false
    };

    this.toggleButtonHover = this.toggleButtonHover.bind(this);
  }

  toggleButtonHover() {
    this.setState({
      isHovered: !this.state.isHovered
    });
  }


  render() {
    return (
      <StyledQuickViewButton
        isHovered={this.state.isHovered}
        onClick={(e) => this.props.toggleModal(e, this.props.item)}
        onMouseEnter={this.toggleButtonHover}
        onMouseLeave={this.toggleButtonHover}
      >
        <i className="far fa-eye"></i> Quick View
      </StyledQuickViewButton>
    )
  }

}

export default QuickViewButton;