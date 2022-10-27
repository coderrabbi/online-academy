import { RouterProvider } from 'react-router-dom';
import './App.css';
import { routes } from './Routes/Routes/Routes';
import { ToastContainer } from 'react-toastify';
function App() {
    return (
        <>
            <RouterProvider router={routes}></RouterProvider>
            <ToastContainer />
        </>
    );
}

export default App;
