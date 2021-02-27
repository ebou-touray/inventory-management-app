import React, { lazy, Lazy, Suspense } from 'react';
import { Route, useRouteMatch, Switch } from 'react-router-dom';

const routes = [
  {
    path: '',
    component: lazy(() => import('../InventorySystemDashboard/InventorySystemDashboard')),
    exact: true,
  },
  {
    path: '/suppliers',
    component: lazy(() => import('../Suppliers/Suppliers')),
  },
  {
    path: '/inventories',
    component: lazy(() => import('../Inventories/Inventories')),
  },
  {
    path: '/users',
    component: lazy(() => import('../Users/Users')),
  },
];

export default function AppRouter() {
  const { url } = useRouteMatch();

  return (
    <Suspense>
      <Switch>
        {routes.map((route, index) => (
          <Route exact={route.exact} key={index} path={`${url}/${route.path}`}>
            <route.component />
          </Route>
        ))}
      </Switch>
    </Suspense>
  );
};
