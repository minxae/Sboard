import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router,Routes, Route, redirect} from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import Sboard from './pages/sboard';
import Login from './pages/login'
import reportWebVitals from './reportWebVitals';
import ProtectedRoutes from './middleware/protectedRoutes';
import store from './redux/store';
import { Provider } from 'react-redux';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    
    <React.StrictMode>
        <Provider store={store}>
            <Router>
                <Routes>
                    <Route exact path='/login' element={<Login/>}></Route>
                    <Route element={<ProtectedRoutes />}>
                        <Route path='/*' element={<Sboard />}></Route>
                    </Route>
                </Routes>
            </Router>
        </Provider>
    </React.StrictMode>
    
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
