import { Typography } from '@mui/material';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import {styled} from '@mui/material/styles'
import { UnarchiveOutlined , DeleteOutline } from '@mui/icons-material';
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

const Archive=({note})=>{

    const {setNotes, archiveNotes, setArchiveNotes, setDeleteNotes}=useContext(DataContext);

    const unArchiveNote=(note)=>{
        console.log("clicked");
        const updatedNotes=archiveNotes.filter(data => data.id !== note.id);
        setArchiveNotes(updatedNotes);
        setNotes(prevArr => [note,...prevArr]);

    }
    const deleteNote=(note)=>{
        const updatedNotes=archiveNotes.filter(data => data.id !== note.id);
        setArchiveNotes(updatedNotes);
        setDeleteNotes(prevArr => [note,...prevArr]);
    }

    return (
        <StyledCard>
            <CardContent>
                <Typography>{note.heading}</Typography>
                <Typography>{note.text}</Typography>
            </CardContent>
            <CardActions>
                <UnarchiveOutlined
                    fontSize='small'
                    style={{marginLeft: 'auto'}}
                    onClick={()=> unArchiveNote(note)}
                />
                <DeleteOutline
                    ontSize='small'
                    onClick={()=> deleteNote(note)}
                />
            </CardActions>

        </StyledCard>
    );
}
export default Archive;