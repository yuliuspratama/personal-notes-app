import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

function NoteItem({ id ,title,body, createdAt }) {
  return (
    <article className='note-item'>
    <h3 className="note-item__title">
    {/* {title} */}
    <Link to={`/notes/${id}`}>{title}</Link>
    </h3>
    <p className="note-item__body">{body}</p>
    <p className="note-item__createdAt">{createdAt}</p>
    </article>
  );
}
 
NoteItem.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired
};
 
export default NoteItem;