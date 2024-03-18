import React from "react";
import User from "./User.js";
import UserClass from "./UserClass.js";

//Funcitonal Component
// const About = () => {
//   return (
//     <div className="body">
//       <h1>About Us</h1>
//       <p>Hello Welcome to পেট পুজো</p>
//       <div>
//         <UserClass name={"Promit Class"} />
//       </div>
//     </div>
//   );
// };

//Classbased Component
class About extends React.Component {
  constructor(props) {
    super(props);

    console.log("Constructor in Parent");
  }

  componentDidMount() {
    console.log("componentDidMount in Parent");
  }

  render() {
    console.log("Render in Parent");
    return (
      <div className="body">
        <h1>About Us</h1>
        <p>Hello Welcome to পেট পুজো</p>
        <div>
          <UserClass name={"Promit Class"} />
        </div>
      </div>
    );
  }
}

export default About;
