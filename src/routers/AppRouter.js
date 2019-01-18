import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Header from '../components/Header';
import ExpenseDashboardPage from '../components/ExenseDashboardPage';
import CreateExpense from '../components/CreateExpensePage';
import EditExpense from '../components/EditExpensePage';
import HelpPage from '../components/HelpPage';
import NotFoundPage from '../components/NotFoundPage';
import LoginPage from '../components/LoginPage';

const AppRouter = () => (
  <BrowserRouter>
    <div>
      <Header />
      <Switch>
        <Route path='/' component={LoginPage} exact={true} />
        <Route path='/dashboard' component={ExpenseDashboardPage} />
        <Route path='/create' component={CreateExpense} />
        <Route path='/edit/:id' component={EditExpense} />
        <Route path='/help' component={HelpPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default AppRouter;