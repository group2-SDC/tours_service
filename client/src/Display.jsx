import React from 'react';
import styled from 'styled-components';
import TourPreview from './TourPreview.jsx';

const DisplayContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  border: 1px solid lightgray;
  border-top-width: 0;
  flex: 1 1 auto;
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
      showModal: false
    };
  }

  render() {
    return (
      <DisplayContainer>
        <DisplayRow>
          {this.props.tab.items.slice(0, this.props.tab.displayMax).map(item => <TourPreview key={item.id} item={item}/>)}
        </DisplayRow>
      </DisplayContainer>
    )
  }
}


export default Display;
