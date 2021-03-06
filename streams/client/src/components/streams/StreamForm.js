import React from "react";
import { Field, reduxForm } from "redux-form";

class StreamForm extends React.Component {
  renderedError({ error, touched }) {
    if (touched && error) {
      return (
        <div className="ui error message">
          <div className="header">{error}</div>
        </div>
      );
    }
  }

  renderInput = ({ input, label, meta }) => {
    // console.log(meta);
    const className = `field ${meta.touched && meta.error ? "error" : ""}`;
    return (
      // we can use this new syntax instead of line below
      <div className={className}>
        <label>{label}</label>
        <input {...input} autoComplete="off" />
        {this.renderedError(meta)}
      </div>

      // <input
      //   onChange={formProps.input.onChange}
      //   value={formProps.input.value}
      // />
    );
  };

  onSubmit = (formValues) => {
    // console.log(formValues);
    this.props.onSubmit(formValues);
  };

  render() {
    // "initialValues" is a key name that redux form set it as initial value for input forms
    return (
      <form
        className="ui form error" // we added "error" im className because without it, if we have a error inside our form it'll hide
        onSubmit={this.props.handleSubmit(this.onSubmit)} // handleSubmit is own property of redux-form that we call it via props
      >
        <Field name="title" component={this.renderInput} label="Enter Title" />
        <Field
          name="description"
          component={this.renderInput}
          label="Enter Description"
        />
        <button className="ui button primary">Submit</button>
      </form>
    );
  }
}

const validate = (formValues) => {
  // console.log(formValues);
  const error = {};
  if (!formValues.title) {
    error.title = "you must enter a title";
  }
  if (!formValues.description) {
    error.description = "you must enter a description";
  }
  return error;
};

export default reduxForm({
  form: "streamForm",
  validate,
})(StreamForm);
