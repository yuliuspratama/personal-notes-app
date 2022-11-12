import React from 'react';
import NoteItem from './NoteItems';
import PropTypes from 'prop-types';

function Notelist({notes, onDelete}){
  if (!notes.length) {
    return (<div className='notes-list-empty'>
      <p className='notes-list-empty p'>No Notes Found</p>
    </div>);
  }
  return(
      <div className="notes-list">
          {
      notes.map((notes) => (
          <NoteItem
          id ={notes.id}
          key ={notes.id}
          onDelete={onDelete}
          {...notes} />
      ))
}
</div>
  )
}

NoteItem.PropTypes = {
  notes: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired
}

export default Notelist;
