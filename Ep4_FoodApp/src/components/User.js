import { useEffect, useState } from "react";

const User = (props) => {
  const [count, setCount] = useState(0);
  const [count2] = useState(1);
  
  useEffect(() => {
    //API CALLs
  }, []);
  
  const increase = () => {
    setCount(count + 1);
  };
  return (
    <div className="user-card">
      <h1>Count = {count}</h1>
      <h2>Name: {props.name}</h2>
      <h3>Location: Asansol</h3>
      <h4>Contact: promitdey140@gmail.com</h4>
      <button onClick={increase}>Increase Count</button>
    </div>
  );
};

export default User;
