import React from 'react';
import Header from './Components/Header';
import { Routes, Route } from 'react-router-dom';
import HomePage from './Pages/Homepages';
import DetailPageWrapper from './Pages/Detailpages';
import Addnotepages from './Pages/Addnotepages';
import ArchivePage from './Pages/ArchivePage';
import AllNotepages from './Pages/AllNotepages';
import Notfound from './Pages/Notfound';
import SearchPageWrapper from './Pages/SearchPage';

class App extends React.Component{
  render(){
    return(
      <div className='app-container'>
      <Header/>
      <main>
        <Routes>
          <Route path='/' element={<HomePage/>}/>
          <Route path='/notes/:id' element={<DetailPageWrapper/>}/>
          <Route path='/note/add' element={<Addnotepages/>}/>
          <Route path='/note/archive' element={<ArchivePage/>}/>
          <Route path='/note/all' element={<AllNotepages/>}/>
          <Route path='*' element={<Notfound/>}/>
          <Route path='/note/search' element={<SearchPageWrapper/>}/>
        </Routes>
      </main>
      </div>
    )
  }
}
export default App;
