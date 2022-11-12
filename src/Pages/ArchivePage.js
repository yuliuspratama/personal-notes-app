import React from 'react';
import Notelist from '../Components/NoteList';
import { getArchivedNotes } from '../utils/local-data';

class ArchivePage extends React.Component{
  constructor(props){
    super(props);
    this.state={
      notes : getArchivedNotes(),
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
export default ArchivePage;
