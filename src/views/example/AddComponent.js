import React, { Component } from "react";

class AddComponent extends Component {
  state = {
    tittleJob: "",
    salary: "",
  };

  handleChangeTitleJob = (event) => {
    this.setState({
      tittleJob: event.target.value,
    });
  };

  handleChangeSalary = (event) => {
    this.setState({
      salary: event.target.value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    console.log(">>> check data input: ", this.state);
    alert("Click me");
  };

  render() {
    return (
      <>
        <form action="/action_page.php">
          <label htmlFor="fname">Job Title:</label>
          <br />
          <input
            type="text"
            value={this.state.tittleJob}
            onChange={(event) => this.handleChangeTitleJob(event)}
          />
          <br />
          <label htmlFor="lname">Salary:</label>
          <br />
          <input
            type="text"
            value={this.state.salary}
            onChange={(event) => this.handleChangeSalary(event)}
          />
          <br />
          <br />
          <input
            type="submit"
            value="Submit"
            onClick={(event) => this.handleSubmit(event)}
          />
        </form>
      </>
    );
  }
}

export default AddComponent;
