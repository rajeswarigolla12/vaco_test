// import React, { PureComponent, Fragment } from 'react';
import React from 'react';
import { Route, Switch, Redirect, withRouter } from 'react-router-dom';
import { RouteComponentProps } from "react-router";
import IdleTimer from 'react-idle-timer';
import { connect } from 'react-redux';
import { Modal, Form, Icon, Input, Button } from 'antd';

// config
import router from '../config/router.config';
import AuthorizedRoute from './AuthorizedRoute';

function hasErrors(fieldsError) {
  return Object.keys(fieldsError).some(field => fieldsError[field]);
}

type IProps = RouteComponentProps<any> & {
  form: any;
  dispatch: any;
};

interface IState {
  visible: boolean;
  idleTime: number;
};

interface MainApp {
  idleTimer: any;
  onIdle: any;
}

class MainApp extends React.PureComponent<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {
      visible: false,
      idleTime: null,
    };
    this.idleTimer = null
    this.onIdle = this._onIdle.bind(this)
  }

  // state = { visible: false }

  showModal = () => {
    this.setState({
      visible: true,
    });
  };

  handleOk = (e: React.MouseEvent<any, MouseEvent>) => {
    this.setState({
      visible: false,
    });
  };

  handleCancel = (e: React.MouseEvent<any, MouseEvent>) => {
    this.setState({
      visible: false,
    });
  };

  componentWillMount() {
    const { dispatch } = this.props;
    dispatch({
      type: 'user/getCurrentDetails',
    });
    // dispatch({
    //   type: 'user/login',
    //   payload: {
    //     name: 'Vedha',
    //     password: 'password',
    //   },
    // });
  }

  componentDidMount() {
    // To disabled submit button at the beginning.
    this.props.form.validateFields();
  }

  renderRoute(route: any, i: any) {
    const renderFn = (() => {
      if (!route.routes) {
        return props => <route.component {...props} />;
      }

      return props => (
        <route.component {...props}>
          {this.renderRoutes(route.routes, route)}
        </route.component>
      );
    })();

    const exact = route.exact || !route.routes;

    if (route.redirect) {
      return (
        <Redirect key={i} exact={exact} from={route.path} to={route.redirect} />
      );
    }

    const needsAuth = route.role || !route.noAuth;

    if (needsAuth) {
      return (
        <AuthorizedRoute
          key={i}
          exact={exact}
          path={route.path}
          render={renderFn}
          role={route.role}
        />
      );
    }

    return <Route key={i} exact={exact} path={route.path} render={renderFn} />;
  }

  renderRoutes(routesParam: any, parentRoute?: any) {
    const routes = routesParam;
    return (
      <Switch>
        {routes.map((routeParam: any, i: any) => {
          const route = routeParam;
          if (parentRoute && !route.role) {
            route.noAuth = parentRoute.noAuth;
          }
          return this.renderRoute(route, i);
        })}
      </Switch>
    );
  }

  handleSubmit = (e: React.KeyboardEvent<HTMLInputElement>) => {
    e.preventDefault();
    this.props.form.validateFields((err: any, values: any) => {
      if (!err) {
        const { dispatch } = this.props;
        dispatch({
          type: 'user/login',
          payload: {
            name: 'Vedha',
            password: 'password',
          },
        });
      }
    });
  };

  render() {
    const {
      getFieldDecorator,
      getFieldsError,
      getFieldError,
      isFieldTouched,
    } = this.props.form;

    // Only show error after a field is touched.
    const passwordError =
      isFieldTouched('password') && getFieldError('password');
    return (
      <React.Fragment>
        {this.renderRoutes(router)}
        <IdleTimer
          ref={ref => {
            (this.idleTimer) = ref;
          }}
          element={document}
          onIdle={this.onIdle}
          debounce={250}
          timeout={1000 * 60 * 30}
        />

        <Modal
          title="Login"
          visible={this.state.visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
        >
          {/* <p>Idle Since <Timestamp time={this.state.idleTime} precision={3} /></p> */}
          <Form layout="inline" onSubmit={this.handleSubmit}>
            <Form.Item
              validateStatus={passwordError ? 'error' : ''}
              help={passwordError || ''}
            >
              {getFieldDecorator('password', {
                rules: [
                  { required: true, message: 'Please input your Password!' },
                ],
              })(
                <Input
                  prefix={
                    <Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />
                  }
                  type="password"
                  placeholder="Password"
                />,
              )}
            </Form.Item>
            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                disabled={hasErrors(getFieldsError())}
              >
                Log in
              </Button>
            </Form.Item>
          </Form>
        </Modal>
      </React.Fragment>
    );
  }

  _onIdle(e) {
    this.setState({
      visible: true,
      idleTime: this.idleTimer.getLastActiveTime() / 1000,
    });
  }
}

export default Form.create()(connect()(withRouter(MainApp)));

