import React from 'react';
import styled from 'styled-components';
import TourPreview from './TourPreview.jsx';
import CategoryPreview from './CategoryPreview.jsx';

const DisplayContainer = styled.div`
  display: flex;
  flex-direction: column;
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
  padding: 5px;
  align-items: center;
  flex: 1 1 auto;
`;

const SeeMoreSpan = styled.span`
  font-size: 16px;
  font-weight: 500;
  padding-bottom: 10px;
`


class Display extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
      hoveredItem: null,
      showAll: false
    };
    this.toggleHover = this.toggleHover.bind(this);
    this.handleSeeMoreClick = this.handleSeeMoreClick.bind(this);
  }

  componentDidUpdate(prevProps) {
    if (this.props.tab.name !== prevProps.tab.name) {
      this.setState({
        showAll: this.props.tab.showAll
      });
    }
  }

  toggleHover(index) {
    this.setState({
      hoveredItem: index >= 0 ? index : null
    });
  }

  handleSeeMoreClick() {
    this.props.showAllItems(); //update state for that tab
    this.setState({
      showAll: true
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
        <DisplayRow>
          {this.props.tab.items.length > this.props.tab.displayMax ?
            (this.state.showAll ? 
              this.props.tab.items.slice(this.props.tab.displayMax).map((item, i) => this.props.tab.name !== 'Browse' ?
              <TourPreview key={item.id} item={item} index={i} toggleHover={this.toggleHover} isHovered={this.state.hoveredItem === i}/>
              : <CategoryPreview key={item.id} item={item}/>)
            : <SeeMoreSpan onClick={this.handleSeeMoreClick}>See more</SeeMoreSpan>)
          : null }
        </DisplayRow>
      </DisplayContainer>
    )
  }
}


export default Display;
