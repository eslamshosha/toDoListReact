import React, { Component } from "react";
import "./Additem.css";

class AddItem extends Component {
  state = {
    name: "",
    age: "",
  };
  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    if ((e.target.name.value === "") || (e.target.age.value === "")) {
      return false;
    } else {
      this.props.addItem(this.state);
      this.setState({
        name: "",
        age: "",
      });
    }
  };
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            placeholder="type your email"
            id="name"
            onChange={this.handleChange}
            value={this.state.name}
          ></input>
          <input
            type="number"
            placeholder="enter age"
            id="age"
            onChange={this.handleChange}
            value={this.state.age}
          ></input>
          <input type="submit" value="add"></input>
        </form>
      </div>
    );
  }
}

export default AddItem;
