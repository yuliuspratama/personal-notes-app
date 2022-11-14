import React from 'react';
import Notelist from '../Components/NoteList';
import { getArchivedNotes } from '../utils/Network-data';

class ArchivePage extends React.Component{
  constructor(props){
    super(props);
    this.state={
      notes : getArchivedNotes(),
    }
  }

  async componentDidMount() {
    const { data } = await getArchivedNotes();
    
    this.setState(() => {
      return {
        notes: data
      }
    })
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
