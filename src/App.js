import 'bootstrap/dist/css/bootstrap.min.css';
import { Header } from './components/header';
import { Routes, Route } from 'react-router-dom';
import { Home } from './pages/home/home';
import { Features } from './pages/features/features';
import { Contacts } from './pages/contacts/contacts';



export const App = () => {
  return (
    <div className="App">
      <Header />

      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/features" element={<Features />}/>
        <Route path="/contacts" element={<Contacts />}/>
      </Routes>
    </div>
  );
}