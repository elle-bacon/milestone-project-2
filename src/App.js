import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom';
import './App.css';
import Homepage from './components/homepage';
import Header from './components/header';
import LandingP from './components/landingpage';
import Mycomments from './components/mychats';
import FQA from './components/fqa';
import Buttoncreate from './components/button';

function App() {
  return (
    <div className="App">
      <Router>
      <div>
        <Header />
        <nav>
        <ul>
          <li>
            <Link className="Homepage" to='/'>Homepage</Link>
          </li>
          <li>
            <Link className="FQA" to="/FQA">FQA</Link>
          </li> 
          <li>
            <Link className="Createchats" to="/chats">Create Chats</Link>
          </li>
          <li>
            <Link className='Mycomments' to="/Mycomments">MyComments</Link>
          </li>
          <li>
            <Link className="LandingP" to="/LandingP">LandingP</Link>
          </li>
        </ul>
        </nav>
        </div>
        <div>
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/FQA" element={<FQA />} />
            <Route path="/Mycomments" element={<Mycomments />} />
            <Route path="/LandingP" element={<LandingP />} />
            <Route path="/Chats" element={<Chats />} />

          </Routes>
        </div>
      </Router>

    </div>
  );
}

export default App;
