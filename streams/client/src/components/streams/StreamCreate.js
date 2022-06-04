import React from "react";
// for installing redux-form use: npm install redux-form --legacy-peer-deps
import { Field, reduxForm } from "redux-form";
class StreamCreate extends React.Component {
  renderInput(formProps) {
    console.log(formProps);
    return (
      <input {...formProps.input} /> // we can use this new syntax instead of line below
      // <input
      //   onChange={formProps.input.onChange}
      //   value={formProps.input.value}
      // />
    );
  }
  render() {
    return (
      <form>
        <Field name="title" component={this.renderInput} />
        <Field name="description" component={this.renderInput} />
      </form>
    );
  }
}

export default reduxForm({
  form: "streamCreate",
})(StreamCreate);
