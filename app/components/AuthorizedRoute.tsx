import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import Authorized from './Authorized';

interface IProps {
  key: string,
  exact: string
  path: string,
  render: any,
  role: string,
  component?: any,
  redirectPath?: string
}

const AuthorizedRoute: React.SFC<IProps> = ({
  component: Component,
  render,
  role,
  redirectPath = '/auth',
  ...rest
}) => (
  <Authorized
    role={role}
    noMatch={
      <Route
        { ...rest as any }
        render={() => <Redirect to={{ pathname: redirectPath }} />}
      />
    }
  >
    <Route
      {...rest as any}
      render={props => (Component ? <Component {...props} /> : render(props))}
    />
  </Authorized>
);

export default AuthorizedRoute;
