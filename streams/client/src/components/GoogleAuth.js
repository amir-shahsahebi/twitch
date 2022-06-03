import React from "react";
import { connect } from "react-redux";
import { singIn, singOut } from "../actions";
class GoogleAuth extends React.Component {
  //   state = { isSignedIn: null };
  // we use "componentDidMount" for sending request to google
  componentDidMount() {
    // we can access to gapi with "window" and when we send our request, we use a second function to call back after response received.
    window.gapi.load("client:auth2", () => {
      window.gapi.client
        .init({
          clientId:
            "7835632785-unq4m2g4v7fc4ml0lau7pnjlt6m0qb4j.apps.googleusercontent.com",
          plugin_name: "chat",
          scope: "email", // it means that we just need to access the user email and we also ca n use another parameters
        })
        .then(() => {
          this.auth = window.gapi.auth2.getAuthInstance(); //with this definition we can use user status more comfortable
          //   this.setState({ isSignedIn: this.auth.isSignedIn.get() });

          this.onAuthChange(this.auth.isSignedIn.get());
          this.auth.isSignedIn.listen(this.onAuthChange);
        });
    }); // this request, respond a promise and we use .then to handle it
  }

  onAuthChange = (isSignedIn) => {
    // this.setState({ isSignedIn: this.auth.isSignedIn.get() });
    if (isSignedIn) {
      this.props.singIn();
    } else {
      this.props.signOut();
    }
  };

  onSingInClick = () => {
    this.auth.signIn();
  };
  onSingOutClick = () => {
    this.auth.signOut();
  };

  renderAuthButton() {
    if (this.props.isSignedIn === null) {
      return null;
    } else if (this.props.isSignedIn) {
      return (
        <button onClick={this.onSingOutClick} className="ui red google button">
          <i className="google icon" />
          Sing Out
        </button>
      );
    } else {
      return (
        <button onClick={this.onSingInClick} className="ui red google button">
          <i className="google icon" />
          Sing In with Google
        </button>
      );
    }
  }

  render() {
    return <div>{this.renderAuthButton()}</div>;
  }
}

const manStateToProps = (state) => {
  return { isSignedIn: state.auth.isSignedIn };
};

export default connect(manStateToProps, { singIn, singOut })(GoogleAuth);
