/**
 * @class Signup
 * @description
 */

import * as React from 'react';

import { Form, Text, Field } from '../Form';
import { withContext, IContext } from 'src/web/Context';

const styles = require('./signupOrLogin.scss');

interface Props extends IContext {
  context: IContext;
}

function validate(data: any) {
  const errors: any = {};

  if (!data.email) {
    errors.email = 'Email is Required';
  }

  if (!data.password) {
    errors.password = 'Password is required';
  }

  return errors;
}

export class Signup extends React.Component<Props, any> {
  private action: string;

  constructor(props: any) {
    super(props);

    this.action = 'login';

    this.state = { loading: false };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.login = this.login.bind(this);
    this.signup = this.signup.bind(this);
  }

  handleSubmit(data:any) {
    const { authClient } = this.props.context;
    let method;

    this.setState({ loading: true });

    if (this.action === 'signup') {
      method = authClient && authClient.signup(data);
    } else {
      method = authClient && authClient.login(data);
    }

    // method.then(() => this.setState({ loading: false }));

    // TODO: should we handle auth error in state here?
    method && method.catch((error: any) => {
      console.error(error);
      this.setState({ loading: false })
    });
  }

  signup() {
    this.action = 'signup';
  }

  login() {
    this.action = 'login';
  }

  render() {
    const { loading } = this.state;

    if (loading) {
      return (
        <div className={styles.loading}>Loading...</div>
      );
    }

    return (
      <div>
        <h2 className={styles.heading}>Sign up or log in</h2>
        <Form onSubmit={this.handleSubmit} validation={validate}>
          <Field field="email" label="Email">
            <Text />
          </Field>

          <Field field="password" label="Password">
            <Text />
          </Field>

          <div className={styles.buttonRow}>
            <button className="button-primary" onClick={this.login}>Login</button>
            <button className="button-primary" onClick={this.signup}>Sign Up</button>
          </div>
        </Form>
      </div>
    );
  }
}

export default withContext(Signup);
