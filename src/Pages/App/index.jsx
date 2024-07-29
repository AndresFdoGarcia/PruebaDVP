import { useRoutes,BrowserRouter } from 'react-router-dom';
import Home from '../Home';
import Navbar from '../../Components/Navbar';
import { AuthContext, AuthContextProvider } from '../../Context/AuthContext';
import LoginUser from '../Login';
import RegisterU from '../Register';
import { useContext } from 'react';

const AppRoutes = () =>{
    const { user } = useContext(AuthContext);    
    let routes = useRoutes([
        { path: '/', element: <Home /> },
        { path: '/login', element: (user ? <Home /> : <LoginUser />) },
        { path: '/register', element: (user ? <Home /> : <RegisterU />)  }
    ])
    return routes
}

const App = () => {
    return(
        <AuthContextProvider> 
        <BrowserRouter>
                   
                <Navbar />
                    <AppRoutes />
        </BrowserRouter>           
        </AuthContextProvider>
        
    )
}
export default App