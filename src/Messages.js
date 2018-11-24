import React from 'react';

class Messages extends React.PureComponent {
  render() {
    console.log('===>Messages', this.props);

    return (
      <div>Messages</div>
    );
  }
}

export default Messages;