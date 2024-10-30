import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Main from './components/main';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />}  />
        </Routes>
        </BrowserRouter>
      </header>
    </div>
  );
}

export default App;
