import { Routes, Route } from 'react-router-dom';
import './App.scss';
import { Users, Users2, Users3, Users4, Users5, Error } from './pages';

function App() {
  return (
    <>
      <Routes>
        <Route path="users" element={<Users />} />
        <Route path="users2" element={<Users2 />} />
        <Route path="users3" element={<Users3 />} />
        <Route path="users4" element={<Users4 />} />
        <Route path="users5" element={<Users5 />} />
        <Route path="error" element={<Error />} />
      </Routes>
    </>
  );
}

export default App;
