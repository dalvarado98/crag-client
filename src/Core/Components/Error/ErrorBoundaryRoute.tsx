import React from 'react';
import { Route } from 'react-router-dom';
import ErrorBoundary from './ErrorBoundary';

const ErrorBoundaryRoute = ({ component: Component, ...rest }: any) => {
    const encloseInErrorBoundary = (props: any) => (
        <ErrorBoundary>
            <Component {...props} />
        </ErrorBoundary>
    );

    if (!Component) throw new Error(`A component needs to be specified for path ${(rest as any).path}`);

    return <Route {...rest} render={encloseInErrorBoundary} />;
};

export default ErrorBoundaryRoute;
