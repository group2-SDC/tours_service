import React from 'react';
import styled from 'styled-components';
import TourPreview from './TourPreview.jsx';
import CategoryPreview from './CategoryPreview.jsx';

const DisplayContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  border: 1px solid lightgray;
  border-top-width: 0;
  flex: 1 1 auto;
  font-size: 14px;
`;

const DisplayRow = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex: 1 1 auto;
`;

class Display extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
      hoveredItem: null
    };
    this.toggleHover = this.toggleHover.bind(this);
  }

  toggleHover(index) {
    this.setState({
      hoveredItem: index >= 0 ? index : null
    });
  }

  render() {
    return (
      <DisplayContainer>
        <DisplayRow>
          {this.props.tab.items.slice(0, this.props.tab.displayMax).map((item, i) => this.props.tab.name !== 'Browse' ?
            <TourPreview key={item.id} item={item} index={i} toggleHover={this.toggleHover} isHovered={this.state.hoveredItem === i}/>
            : <CategoryPreview key={item.id} item={item}/>)}
        </DisplayRow>
      </DisplayContainer>
    )
  }
}


export default Display;
