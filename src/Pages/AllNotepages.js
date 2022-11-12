import React from 'react';
import Notelist from '../Components/NoteList';
import { getAllNotes } from '../utils/local-data';

class AllNotepages extends React.Component{
  constructor(props){
    super(props);
    this.state={
      notes : getAllNotes(),
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
export default AllNotepages;
