import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

import { DOCUMENTALES_VIEW, REGISTRAR_DOCUMENTAL } from '../constants/routes.constants';
import { RegistrarScreen } from '../views/Registrar.Screen';
import DocumentalesScreen from '../views/Documentales.Screen';
import MainLayout from '../layout/MainLayout';

export const IndexRoutes = () => {
	return (
		<>
			<BrowserRouter>
				<Switch>
					<MainLayout>
						<Route
							exact
							path={DOCUMENTALES_VIEW}
							component={DocumentalesScreen}
						/>

						<Route
							exact
							path={REGISTRAR_DOCUMENTAL}
							component={RegistrarScreen}
						/>
						<Redirect to={REGISTRAR_DOCUMENTAL} />
					</MainLayout>
				</Switch>
			</BrowserRouter>
		</>
	);
};
