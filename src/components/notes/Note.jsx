import { Typography } from '@mui/material';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import {styled} from '@mui/material/styles'
import { ArchiveOutlined as Archive, DeleteOutline as Delete } from '@mui/icons-material';
import React from 'react';

import { useContext } from 'react';
import {DataContext} from "../../context/DataProvider";

const StyledCard=styled(Card)`
    width: 240px;
    margin :8px;
    box-shadow:none;
    border-raadius: 8px;
    border: 1px solid #e0e0e0;

`

const Note=({note})=>{

    const {notes ,setNotes, setArchiveNotes, setDeleteNotes}=useContext(DataContext);

    const archiveNote=(note)=>{
        console.log("clicked");
        const updatedNotes=notes.filter(data => data.id !== note.id);
        setNotes(updatedNotes);
        setArchiveNotes(prevArr => [note,...prevArr]);

    }
    const deleteNote=(note)=>{
        const updatedNotes=notes.filter(data => data.id !== note.id);
        setNotes(updatedNotes);
        setDeleteNotes(prevArr => [note,...prevArr]);
    }

    return (
        <StyledCard>
            <CardContent>
                <Typography>{note.heading}</Typography>
                <Typography>{note.text}</Typography>
            </CardContent>
            <CardActions>
                <Archive
                    fontSize='small'
                    style={{marginLeft: 'auto'}}
                    onClick={()=> archiveNote(note)}
                />
                <Delete
                    ontSize='small'
                    onClick={()=> deleteNote(note)}
                />
            </CardActions>

        </StyledCard>
    );
}
export default Note;