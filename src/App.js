import { useState } from 'react';
import Cart from './components/Cart/Cart';
import Home from './components/Home/Home';
import Navbar from './components/Navbar';
import './output.css'
import { Provider } from 'react-redux';
import store from './redux/store';

export default function App() {
    const [navigationToHome, setNavigationToHome] = useState(true)

    const handelNavigation = (value) => {
        setNavigationToHome(value);
    }
    return (
        <Provider store={store}>
            <div className="testBG">
                {/* <!-- Navbar --> */}
                <Navbar handelNavigation={handelNavigation} />
                {/* <!-- Navbar ends --> */}
                {navigationToHome ? <Home /> : <Cart />}
            </div>
        </Provider>

    );
}
