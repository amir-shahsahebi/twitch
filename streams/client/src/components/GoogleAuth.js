import React from "react";

class GoogleAuth extends React.Component {
  state = { isSignedIn: null };
  // we use "componentDidMount" for sending request to google
  componentDidMount() {
    // we can access to gapi with "window" and when we send our request, we use a second function to call back after response received.
    window.gapi.load("client:auth2", () => {
      window.gapi.client
        .init({
          clientId:
            "7835632785-unq4m2g4v7fc4ml0lau7pnjlt6m0qb4j.apps.googleusercontent.com",
          scope: "email", // it means that we just need to access the user email and we also ca n use another parameters
        })
        .then(() => {
          console.log(window.gapi.auth2.getAuthInstance());
          this.auth = window.gapi.auth2.getAuthInstance(); //with this definition we can use user status more comfortable
          this.setState({ isSignedIn: this.auth.isSignedIn.get() });
        });
    }); // this request, respond a promise and we use .then to handle it
  }

  renderAuthButton() {
    if (this.state.isSignedIn === null) {
      <div>I dont know if we are singed in</div>;
    } else if (this.state.isSignedIn) {
      <div>I'm singed in</div>;
    } else {
      <div>I'm not singed in</div>;
    }
  }

  render() {
    return <div>{this.renderAuthButton()}</div>;
  }
}

export default GoogleAuth;
