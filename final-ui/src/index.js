import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles';
import Home from './Pages/home';
import store, { history } from './Config/store';
import {Provider} from 'react-redux';
import { ConnectedRouter } from 'react-router-redux'
const theme = createMuiTheme({
    pallette: {
        primary: '#000080'
    }
});

ReactDOM.render(
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <MuiThemeProvider theme={theme}>
                <Home/>
            </MuiThemeProvider>
        </ConnectedRouter>
    </Provider>, document.getElementById('root'));
registerServiceWorker();