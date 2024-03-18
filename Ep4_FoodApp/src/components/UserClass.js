import React from "react";

class UserClass extends React.Component {
  //constructor will recieve props
  constructor(props) {
    super(props); //?? Why do we always need to write super(props)

    //state variable in class based component
    //it is a big object it contains all the state variables
    //never update state variables directly
    this.state = {
      count: 0,
    };
    console.log("Constructor in Child");
  }

  componentDidMount(){
    console.log("componentDidMount in child")
  }

  render() {
    //destructuring
    console.log("Render in Child");
    const { name } = this.props;
    const { count, count2 } = this.state; //this.state.count
    return (
      <div className="user-card">
        <h1>Count : {count}</h1>
        <button
          onClick={() => {
            this.setState({
              count: count + 1,
            });
          }}
        >
          Increase
        </button>
        <h2>Name: {name}</h2>
        <h3>Location: Asansol</h3>
        <h4>Contact: promitdey140@gmail.com</h4>
      </div>
    );
  }
}

export default UserClass;
