import React from 'react';
import PropTypes from 'prop-types';

class Button extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      clicked: false,
    };
  }
  componentDidMount() {
    console.log('Button - componentDidMount');
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('Button - shouldComponentUpdate');
    return true;
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if(!this.state.clicked) {
      return;
    }

    this.setState({clicked: false});
  }

  handlePress = () => {
    console.log('Button is clicked');

    const {clickHandler} = this.props;

    // this.setState({
    //   clicked: true,
    // });

    clickHandler && clickHandler();
  }

  render() {
    const {title  } = this.props;

    return (
      <div style={styles.button} onClick={this.handlePress}>
        {title || 'Button'}
      </div>
    );
  }
}

const styles = {
  button: {
    borderWidth: 'thin',
    borderColor: 'red',
    backgroundColor: 'yellow', 
    margin: '10px',
  },
};

Button.propTypes = {
  title: PropTypes.string.isRequired,
  clickHandler: PropTypes.func.isRequired,
}

export default Button;