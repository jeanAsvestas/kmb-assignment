import './App.scss';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home } from './pages/home-page/Home';
import { NavBar } from './components/navbar/NavBar';

export const App = () => {
  return (
    <>
      {/* <React.StrictMode> */}
      <Router>
        <NavBar />

        <br />
        <Routes>
          <Route path="*" element={<p>Not Found</p>} />
          <Route path="">
            <Route index element={<Home />} />
          </Route>
        </Routes>
      </Router>
      {/* </React.StrictMode> */}
    </>
  );
};
