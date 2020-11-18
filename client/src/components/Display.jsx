import React from 'react';
import styled from 'styled-components';
import TourPreview from './TourPreview.jsx';
import CategoryPreview from './CategoryPreview.jsx';
import SeeMore from './SeeMore.jsx';

const DisplayContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: left;
  border: 1px solid lightgray;
  border-top-width: 0;
  flex: 1 1 auto;
  font-size: 14px;
`;

const DisplayRow = styled.div`
  display: flex;
  justify-content: flex-start;
  padding: 5px;
  align-items: center;
  flex: 1 1 auto;
`;

class Display extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hoveredItem: null,
      showAll: false
    };
    this.toggleHover = this.toggleHover.bind(this);
    this.handleSeeMoreClick = this.handleSeeMoreClick.bind(this);
  }

  componentDidUpdate(prevProps) {
    // check if this is a new tab, if it is, make sure state is up-to-date with tab's showAll status
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
    this.props.showAllItems(); // this updates the showAll status for currentTab, in App state
    this.setState({ // this update the current Display state so new items will render
      showAll: true
    });
  }

  render() {
    return (
      <DisplayContainer>
        <DisplayRow>
          {this.props.tab.items.slice(0, this.props.tab.displayMax).map(item =>
            this.props.tab.name !== 'Browse' ?
              <TourPreview
                key={item.id}
                item={item}
                toggleHover={this.toggleHover}
                toggleModal = {this.props.toggleModal}
                isHovered={this.state.hoveredItem === item.id}
              />
            :
              <CategoryPreview
                key={item.id}
                item={item}
              />
          )}
        </DisplayRow>
          {this.props.tab.items.length > this.props.tab.displayMax ?
            this.state.showAll ? 
            <DisplayRow>
              {this.props.tab.items.slice(this.props.tab.displayMax).map(item =>
                this.props.tab.name !== 'Browse' ?
                  <TourPreview
                    key={item.id}
                    item={item}
                    toggleHover={this.toggleHover}
                    toggleModal={this.props.toggleModal}
                    isHovered={this.state.hoveredItem === item.id}
                  />
                :
                  <CategoryPreview
                    key={item.id}
                    item={item}/>
              )}
            </DisplayRow>
            :
            <SeeMore handleSeeMoreClick={this.handleSeeMoreClick}/>
          :
          null
          }
      </DisplayContainer>
    )
  }
}


export default Display;
