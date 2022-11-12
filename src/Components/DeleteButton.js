import React from 'react';
import PropTypes from 'prop-types'; 

function DeleteButton({ id, onDelete }) {
  return <button className='note-item__delete-button' onClick={() => onDelete(id)}>Hapus</button>
}

DeleteButton.propTypes = {
  id: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default DeleteButton;