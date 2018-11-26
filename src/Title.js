import React from "react";

export default class Title extends React.PureComponent {
  componentDidMount() {
    console.log("title did mount");
  }
  render() {
    console.log("===>title render with props", this.props);
    const { title } = this.props;

    return <div>{title || "No Title"}</div>;
  }
}
