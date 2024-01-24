import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AddUser } from './components/AddUser';
import { UsersList } from './components/UsersList';
import { EditUser } from "./components/EditUser";
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import usersData from "./data.json";
import { setData } from "./store/DataSlice";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setData(usersData))
  }, [dispatch]);

  return (
    <Router>
      <Routes>
        <Route path='/' element={<UsersList />} />
        <Route path='/user/add' element={<AddUser />} />
        <Route path='/user/edit/:user' element={<EditUser />} />
      </Routes>
    </Router>
  );
}

export default App;
