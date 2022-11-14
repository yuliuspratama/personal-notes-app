import React from 'react';
import Notelist from '../Components/NoteList';
import { getActiveNotes } from '../utils/Network-data';


class HomePage extends React.Component{
  constructor(props){
    super(props);
    this.state={
      notes : getActiveNotes(),
    }
  }

  async componentDidMount() {
    const { data } = await getActiveNotes();
    
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
export default HomePage;
