import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MemoryGame from "../MemoryGame/MemoryGame";
import AIFun from "../AIFun/AIFun";
import HomePage from "../HomePage/HomePage";
import NotFound from "../NotFound/NotFound";


import { Footer } from '../Footer/Footer';
import { NavbarCustom } from '../Navbar/Navbar';
const AppRoute = () => {

    return (

        
            <Router>
                <Routes>
                    
                    <Route path="/memory-game" element={<><NavbarCustom /> <MemoryGame /><Footer/></>} />
                    <Route path="/ai-fun-game" element={<><NavbarCustom /> <AIFun /><Footer/></>} />
                    <Route path="/" element={<><NavbarCustom /> <HomePage /> <Footer /></>} />

                    <Route path="*" element={ <NotFound />} /> {/* Fallback for unmatched routes */}
                    
                </Routes>

            </Router>
        
    );
}


export default AppRoute;