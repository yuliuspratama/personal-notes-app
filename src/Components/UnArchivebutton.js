import React from 'react';
import PropTypes from 'prop-types'; 
 
function Unarchivebutton({ id, onArchive }) {
  return <button className='note-item__archive-button' onClick={() => onArchive(id)}>unarchivebutton</button>
}
 
Unarchivebutton.propTypes = {
  id : PropTypes.string.isRequired,
  onArchive: PropTypes.func.isRequired,
}
export default Unarchivebutton;