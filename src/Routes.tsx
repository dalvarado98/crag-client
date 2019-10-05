import React from 'react';
import { Switch } from 'react-router-dom';
import ErrorBoundaryRoute from './Core/Components/Error/ErrorBoundaryRoute';
import { APP_PATHS } from './shared/Utils/Constants';

import Home from './modules/Home/Home';
import ClimbingLocations from './modules/ClimbingLocations/ClimbingLocations';

const Routes = () => {
    return (
        <Switch>
            <ErrorBoundaryRoute exact path={APP_PATHS.base} component={Home} />
            <ErrorBoundaryRoute exact path={APP_PATHS.locations} component={ClimbingLocations} />
        </Switch>
    );

};

export default Routes;
