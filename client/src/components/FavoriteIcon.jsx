import React from 'react';
import styled from 'styled-components';

const HeartContainer = styled.div`
  display: flex;
  align-self: flex-end;
  position: absolute;
  padding: 15px;
  justify-content: center;
  align-items: center;

`

const Heart = styled.span`
  display: flex;
  z-index: 1;
  color: ${props => props.isHovered ? '#FF6666' : 'black'};
`

const Circle = styled.span`
  display: flex;
  color: white;
  font-size: 25px;
  position: absolute;
`

class FavoriteIcon extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isHovered: false,
    }
    this.toggleHeartHover = this.toggleHeartHover.bind(this);
  }

  toggleHeartHover() {
    this.setState({
      isHovered: !this.state.isHovered
    });
  }

  render() {
    return (
    <HeartContainer
      onMouseEnter={this.toggleHeartHover}
      onMouseLeave={this.toggleHeartHover}
    >
      <Circle>
        <i className="fas fa-circle"></i>
      </Circle>
      <Heart isHovered={this.state.isHovered}>
        {this.state.isHovered ? <i className="fas fa-heart"></i> : <i className="far fa-heart"></i>}
      </Heart>
    </HeartContainer>)
  }
}

export default FavoriteIcon;