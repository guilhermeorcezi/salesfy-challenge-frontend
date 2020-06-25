import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import Translate from './pages/Translate';
import store from './store'
import GlobalStyle from './styles/GlobalStyle'

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Routes = () => {
	return (
		<Provider store={store}>
			<BrowserRouter>
				<Route component={Translate} path="/" exact />
				<GlobalStyle/>
				<ToastContainer />
			</BrowserRouter>
		</Provider>
	);
};

export default Routes;