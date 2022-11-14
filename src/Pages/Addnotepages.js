import React from 'react';
import { addNote } from '../utils/Network-data';
import Noteadd from '../Components/Noteadd';
import { useNavigate } from 'react-router-dom';

function  Tambahnote () {
    const navigate = useNavigate();

    async function onAddNoteHandler(title,body){
        await addNote(title,body)
        navigate('/');
    }

        return(
        <div className='Noteapp'>
        <Noteadd AddNote={onAddNoteHandler}/>
        </div>
        )
}


export default Tambahnote;