import React from "react";
import FlipMove from "react-flip-move";

class Showlist extends React.Component{
  constructor(props) {
    super(props);

    this.createTasks = this.createTasks.bind(this);
  }

  createTasks(item) {
    return(

        <li key={item.key}>{item.text}
        <button onClick={() => this.delete(item.key)}
        key={item.key}>Delete</button>
        <button
        key={item.key}>Edit</button>
        </li>
    )
  }
  delete(key) {
    this.props.delete(key);
  }

  render() {
    var todoEntries = this.props.entries;
    var listItems = todoEntries.map(this.createTasks);

    return (
      <ul className="theList">
        <FlipMove duration={250} easing="ease-out">
          {listItems}
        </FlipMove>
      </ul>
    );
  }
}

export default Showlist;
