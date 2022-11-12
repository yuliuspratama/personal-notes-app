import React from 'react';
import PropTypes from 'prop-types'; 

function archivebutton({ id, onArchive }) {
  return <button className='note-item__archive-button' onClick={() => onArchive(id)}>archive</button>
}

archivebutton.propTypes = {
  id: PropTypes.string.isRequired,
  onArchive: PropTypes.func.isRequired
};
 
export default archivebutton;