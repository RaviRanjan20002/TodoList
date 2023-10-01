import  HOME  from "./components/Home";
import Log from "./components/Log";
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';
import Register from "./components/Register";
function App() {
  return (
      <Router>
        <Routes>
          <Route path="/" element={<Log/>}/>
          <Route path="/todo" element={<HOME/>}/>
          <Route path="/register" element={<Register/>}/>
        </Routes>
      </Router>
  );
}

export default App;
