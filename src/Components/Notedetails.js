import React from 'react';
import PropTypes from 'prop-types';
import DeleteButton from "./DeleteButton"
import Archivebutton from "./Archivebutton"
import Unarchivebutton from './UnArchivebutton';
import { deleteNote , archiveNote,unarchiveNote } from '../utils/local-data';
import { useNavigate } from 'react-router-dom';

function NoteDetail({ id ,title, body, createdAt ,archived }) {
  const navigate = useNavigate();
  
  function Hapus(id) {
   deleteNote(id)
   navigate('/');
 }

 function ArchivesNote(id){
    archiveNote(id)
    navigate('/note/archive');
 }

 function UnarchivesNote(id){
    unarchiveNote(id)
    navigate('/');
 }
 
  return (
    <div className='detail-page'>
      <h2 className='detail-page__title'>{title}</h2>
      <p className='detail-page__createdAt'>{createdAt}</p>
      <p className='detail-page__body'>{body}</p>
      <DeleteButton id={id} onDelete={Hapus}/>
      {!archived ?  <Archivebutton id={id} onArchive={ArchivesNote}/> : <Unarchivebutton id={id} onArchive={UnarchivesNote}/>}
    </div>
  );
}

NoteDetail.propTypes = {
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
  id : PropTypes.string.isRequired,
  archived : PropTypes.bool.isRequired,
};

export default NoteDetail;
