import React, { Component } from "react";

class HabitAddForm extends Component {
  formRef = React.createRef();
  inputRef = React.createRef();
  onSubmit = (event) => {
    event.preventDefault(); //페이지가 리로딩되는것을 방지해줌
    const name = this.inputRef.current.value;
    name && this.props.onAdd(name);
    // this.inputRef.current.value = "";
    this.formRef.current.reset();
  };

  render() {
    return (
      <div>
        <form ref={this.formRef} className="add-form" onSubmit={this.onSubmit}>
          <input
            ref={this.inputRef}
            type="text"
            className="add-input"
            placeholder="Habit"
          />
          <button className="add-button">Add</button>
        </form>
      </div>
    );
  }
}

export default HabitAddForm;
