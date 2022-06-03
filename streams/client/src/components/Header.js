import { Link } from "react-router-dom";
import GoogleAuth from "./GoogleAuth";
import GoogleLoginComp from "./GoogleLoginComp";

const Header = () => {
  return (
    <div className="ui secondary pointing menu">
      <Link to="/" className="item">
        Streamer
      </Link>
      <div className="right menu">
        <Link to="/" className="item">
          All Streams
        </Link>
        {/* <GoogleLoginComp /> */}
        <GoogleAuth />
      </div>
    </div>
  );
};

export default Header;
