import HomePage from './pages/HomePage.jsx'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

export default function RouterPath() {
    return(
        <div>
            <Router>
                <Routes>
                    <Route exact path="/" element={<HomePage />}>
                      
                    </Route>
                </Routes>
            </Router>
        </div>
    )
}
