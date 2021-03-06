import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";
import { connect } from "react-redux";
import "react-select/dist/react-select.css";
import "./GroupForm.css";

import Button from "../../components/Button/Button";
import MDInput from "../../components/MDInput/MDInput";

const validate = values => {
  const errors = {};
  if (!values.name) {
    errors.name = "Required";
  }
  return errors;
};

class GroupForm extends Component {
  constructor(props) {
    super(props);
    this.state = { focusInput: "" };
    // this.handleSubmit = this.handleSubmit.bind(this);
    this.focusInput = this.focusInput.bind(this);
  }

  focusInput(input) {
    this.setState({ focusInput: input });
  }

  render() {
    return (
      <form onSubmit={this.props.handleSubmit}>
        <div className="fields-container">
          <Field name="name" component={MDInput} label="Name" />
          <Field name="image" component={MDInput} label="Image" />
          <Field
            full
            name="description"
            component={MDInput}
            label="Description"
          />
        </div>
        <Button type="submit" className="action" icon="fa-paper-plane">
          Submit
        </Button>
      </form>
    );
  }
}
function mapStateToProps(state) {
  return {
    initialValues: {
      ...state.groups.editing
    },
    validate
  };
}

GroupForm = reduxForm({ form: "group" })(GroupForm);
export default connect(mapStateToProps)(GroupForm);
