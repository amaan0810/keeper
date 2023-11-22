import { Typography } from '@mui/material';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import {styled} from '@mui/material/styles'
import { RestoreFromTrashOutlined, DeleteForeverOutlined} from '@mui/icons-material';
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

const DeleteNote=({note})=>{

    const {deleteNotes,setNotes, setDeleteNotes}=useContext(DataContext);

    const RestoreNote=(note)=>{
        console.log("clicked");
        const updatedNotes=deleteNotes.filter(data => data.id !== note.id);
        setDeleteNotes(updatedNotes);
        setNotes(prevArr => [note,...prevArr]);

    }
    const deleteForeverNote=(note)=>{
        const updatedNotes=deleteNotes.filter(data => data.id !== note.id);
        setDeleteNotes(updatedNotes);
    }

    return (
        <StyledCard>
            <CardContent>
                <Typography>{note.heading}</Typography>
                <Typography>{note.text}</Typography>
            </CardContent>
            <CardActions>
                <RestoreFromTrashOutlined
                    fontSize='medium'
                    style={{marginLeft: 'auto'}}
                    onClick={()=> RestoreNote(note)}
                />
                <DeleteForeverOutlined
                    ontSize='small'
                    onClick={()=> deleteForeverNote(note)}
                />
            </CardActions>

        </StyledCard>
    );
}
export default DeleteNote;