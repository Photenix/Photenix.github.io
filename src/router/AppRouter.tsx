import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Init from '../module/Init'
import Portfolio from '../module/Portfolio';

const AppRouters = () => {
    return (
        <BrowserRouter>
            
            <Routes>
                <Route path="/" element={ <Init/> }/>
                <Route path="/portfolio" element={ <Portfolio/> }/>
            </Routes>
        </BrowserRouter>
    );
};

export default AppRouters;