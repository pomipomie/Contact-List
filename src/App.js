import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import ListContact from './components/ListContact';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AddContact } from './components/AddContact';
import { UpdateContact } from './components/UpdateContact';

function App() {
  return (
    <div>
      <Header/>
      <BrowserRouter>
        <Routes>
          <Route index path='/' element={<ListContact/>}></Route>
          <Route path='/contacts' element={<ListContact/>}></Route>
          <Route path='/contacts/new' element={<AddContact/>}></Route>
          <Route path='/contacts/:id' element={<UpdateContact/>}></Route>
        </Routes>
      </BrowserRouter>
      <Footer/>
    </div>
  );
}

export default App;
