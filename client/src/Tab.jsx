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
// class Tab extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       selected: this.props.selected
//     }
//     this.handleClick = this.handleClick.bind(this);
//   }

//   handleClick() {
//     this.setState({
//       selected: true
//     });
//     this.props.updateView(this.props.tabNumber);
//   }

//   render() {
//     return (
//       <td onClick={this.handleClick}>
//         {this.props.name !== 'Browse' ? 
//         <span>
//            {this.props.name} <br />
//            {this.props.description}
//         </span>
//         : 
//         <span>
//           ... <br />
//           {this.props.name}
//         </span>
//       }
//       </td>
//     )
//   }
// }


export default Tab;