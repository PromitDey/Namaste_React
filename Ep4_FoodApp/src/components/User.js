import { useEffect, useState } from "react";
import { MdOutlineEmail } from "react-icons/md";
import { AiOutlineGithub, AiOutlineLinkedin } from "react-icons/ai";
import { FaXTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom";

const User = (props) => {
  const [userInfo, setUserInfo] = useState({
    name: "dummy_name",
    location: "dummy_location",
    avatar_url: "dummy_url",
    bio: "dummy_bio",
  });

  const [emailCopy, setEmailCopy] = useState(false);

  const handleEmailCopy = () => {
    navigator.clipboard.writeText("promitdey140@gmail.com");
    alert("Email Copied, Check Clipboard . . .");
    setEmailCopy(true);
    setTimeout(() => {
      setEmailCopy(false);
    }, 2000);
  };

  useEffect(() => {
    getData();
  }, []);

  const getData = async function () {
    const data = await fetch("https://api.github.com/users/PromitDey");
    const jsonData = await data.json();
    console.log(jsonData);

    setUserInfo(jsonData);
  };

  const { name, location, avatar_url, bio } = userInfo;

  return (
    <div className="user-card">
      <img
        className="about-user-avatar"
        src={avatar_url}
        alt={"GitHub Avatar"}
      />
      <div className="about-user-info">
        <h3>Name: {name}</h3>
        <h3>Location: {location}</h3>
        <h3>Bio: {bio}</h3>
        <div className="contact-icons-container">
          <button className="btn-mail-icon" onClick={handleEmailCopy}>
            <MdOutlineEmail className="contact-icons" />
          </button>
          <Link to="https://github.com/PromitDey" className="about-icon-link">
            <AiOutlineGithub className="contact-icons" />
          </Link>
          <Link to ="https://www.linkedin.com/in/promitdey097/" className="about-icon-link"><AiOutlineLinkedin className="contact-icons" /></Link>
          <Link to ="https://twitter.com/PromitDey5" className="about-icon-link"><FaXTwitter className="contact-icons" /></Link>
        </div>
      </div>
    </div>
  );
};

export default User;
