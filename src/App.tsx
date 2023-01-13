import { Route, Routes } from 'react-router-dom';
import routes from './routes';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      </header>
      <div>
        <Routes>
            {
              routes.map(({path, Component}, index) =>  <Route path={path} element={<Component/>} key={index}/> )
            }
        </Routes>
      </div>
    </div>
  );
}

export default App;