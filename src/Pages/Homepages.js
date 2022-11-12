import React from 'react';
import Notelist from '../Components/NoteList';
import { getActiveNotes } from '../utils/local-data';

class HomePage extends React.Component{
  constructor(props){
    super(props);
    this.state={
      notes : getActiveNotes(),
    }
  }

  render(){
    return(
      <section className='app-container'>
        <Notelist notes={this.state.notes} />
        </section>
    )
  }
}
export default HomePage;
