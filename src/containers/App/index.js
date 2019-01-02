import React from 'react';
import { Switch, Route } from 'react-router-dom';

import GetResources from '../GetResources';

export default function App() {
  return (
    <div>
      <Switch>
        <Route exact path="*" component={GetResources} />
      </Switch>
    </div>
  );
}
