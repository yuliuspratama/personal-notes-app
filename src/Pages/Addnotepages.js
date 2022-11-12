import React from 'react';
import { addNote } from '../utils/local-data';
import Noteadd from '../Components/Noteadd';
import { useNavigate } from 'react-router-dom';

function  Tambahnote () {
    const navigate = useNavigate();

    function onAddNoteHandler(title,body){
        addNote(title,body)
        navigate('/');
        console.log(addNote)
    }

        return(
        <div className='Noteapp'>
        <Noteadd AddNote={onAddNoteHandler}/>
        </div>
        )
}


export default Tambahnote;