// Layouts
import AuthLayout from '../layouts/AuthLayout';
import Page1Layout from '../layouts/Page1';

// Pages
import Login from '../pages/auth/Login';
import Schemas from '../pages/Schemas';

import Initializr from '../../src/components/Application';


export default [
  // auth
  {
    path: '/auth',
    noAuth: true, // noAuth routes don't need login
    component: Page1Layout,
    routes: [
      { path: '/auth', exact: true, redirect: '/auth/testSample' },
      { path: '/auth/testSample', component: Schemas },
    ],
  },
  // app
  {
    path: '/',
    component: Page1Layout,
    routes: [
      { path: '/', exact: true, redirect: '/Schemas', role: 'PAGE1' },
      {
        path: '/Schemas',
        component: Schemas,
        role: ['PAGE1'],
      },
     {
        path: '/initializr',
        component: Initializr,
      },
    ],
  },
];

