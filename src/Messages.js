import React from "react";

import Title from "./Title";
import Button from './Button';

class Messages extends React.Component {
  constructor(props) {
    super(props);

    this.state = { do: false };
  }

  // componentWillMount() {
  //   requestIdleCallback((deadline) => {
  //     if(deadline.timeRemaining() > 10 || !deadline.didTimeout) {
  //       this.setState({do: true});
  //     }
  //   }, {timeout: 100});
  // }

  componentDidMount() {
    console.log("===>message did mount");
    // let timerHandler = setTimeout(() => {
    //   this.setState({ do: true });

    //   // clearTimeout(timerHandler);
    // }, 500);

    if(!requestIdleCallback) return;

    requestIdleCallback((deadline) => {
      if(deadline.timeRemaining() > 10 || !deadline.didTimeout) {
        this.setState({do: true});
      }
    }, {timeout: 100});
  }

  shouldComponentUpdate() {
    console.log('===>Message - shouldComponentUpdate');
    return true;
  }

  handleMessageClick = (message) => {
    console.log('Message - props - handleMessageClick');
  }

  render() {
    console.log("===>messages render with props", this.props);

    if (!this.state.do) {
      return null;
    }

    return (
      <div>
        <Title title="message" />
        <Button 
          title="Send Message" 
          clickHandler={this.handleMessageClick} 
        />
      </div>
    );
  }
}

export default Messages;
