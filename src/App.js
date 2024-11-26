import './App.css';
import Header from './components/header';
import List from './components/list';
import Form from './components/form'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className='ctc'>
        <Header></Header>
      </div>
      <Routes>
        <Route path="/" exact element={<List/>} />
        <Route path="/nueva-tarea" element={<Form type={1}/>} />
        <Route path="/editar-tarea" element={<Form type={2}/>} />
      </Routes>
    </Router>
  );
}

export default App;
