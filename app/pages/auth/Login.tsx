/**
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */

import React from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';

import { Form, Icon, Input, Button, Checkbox, Row, Col } from 'antd';
import { FormComponentProps } from 'antd/lib/form';


const styles = require('./login.less');

/* eslint-disable react/prefer-stateless-function */

export interface LProps extends FormComponentProps {
  form: any;
  dispatch: any;
  history: any;
}

interface LState {

}

class Login extends React.PureComponent<LProps, LState> {
  constructor(props: LProps) {
    super(props);
    this.state = {

    };
  }

  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        this.props.history.push(`/Schemas`);
      }
    });
  };
  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <Row type="flex" justify="center">
        <Col span={8}>
          <h1>
            <FormattedMessage id="auth.message" defaultMessage="Samaara Login" />
          </h1>
          <Form onSubmit={this.handleSubmit} className={styles.loginForm}>
            <Form.Item>
              {getFieldDecorator('username', {
                rules: [{ required: true, message: 'Please input your username!' }],
              })(
                <Input
                  prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                  placeholder="Username"
                />,
              )}
            </Form.Item>
            <Form.Item>
              {getFieldDecorator('password', {
                rules: [{ required: true, message: 'Please input your Password!' }],
              })(
                <Input
                  prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                  type="password"
                  placeholder="Password"
                />,
              )}
            </Form.Item>
            <Form.Item>
              {getFieldDecorator('remember', {
                valuePropName: 'checked',
                initialValue: true,
              })(<Checkbox>Remember me</Checkbox>)}
              <a className={styles.loginFormForgot} href="">
                Forgot password
          </a>
              <Button type="primary" htmlType="submit" className={styles.loginFormButton}>
                Log in
          </Button>
          Or <a href="">register now!</a>
            </Form.Item>
          </Form>
        </Col>
      </Row>
    );
  }
}

export default Form.create()(connect()(Login));

