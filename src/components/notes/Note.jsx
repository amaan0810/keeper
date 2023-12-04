import { Typography, TextField, Button } from '@mui/material';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import { styled } from '@mui/material/styles'
import { ArchiveOutlined as Archive, DeleteOutline as Delete } from '@mui/icons-material';
import React, { useState } from 'react';


import { useContext } from 'react';
import { DataContext } from "../../context/DataProvider";

import EditNoteIcon from '@mui/icons-material/EditNote';
import Modal from '@mui/material/Modal';

const StyledCard = styled(Card)`
    width: 240px;
    margin :8px;
    box-shadow:none;
    border-raadius: 8px;
    border: 1px solid #e0e0e0;

`




const style = {
    position: 'absolute',
    top: '30%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    display: 'flex',
    flexDirection: 'column',
    padding: '30px 30px',
    borderRadius: '8px',
    borderColor: '#e0e0e0',
    boxShadow: '0 1px 2px 0 rgb(60 64 67/ 30%), 0 2px 6px 2px rgb(60 64 67/15%)',
    p: 4,
};



const Note = ({ note }) => {

    const { notes, setNotes, setArchiveNotes, setDeleteNotes } = useContext(DataContext);

    const [editNote, setEditNote] = useState({ eheading: "", etext: "" });


    const [open, setOpen] = React.useState(false);

    
    const handleOpen = (note) => {
        setOpen(true);
        var enote = note;
        setEditNote({ eheading: enote.heading, etext: enote.text });
    };
    const handleClose = () => setOpen(false);

    const archiveNote = (note) => {
        const updatedNotes = notes.filter(data => data.id !== note.id);
        setNotes(updatedNotes);
        setArchiveNotes(prevArr => [note, ...prevArr]);

    };
    const deleteNote = (note) => {
        const updatedNotes = notes.filter(data => data.id !== note.id);
        setNotes(updatedNotes);
        setDeleteNotes(prevArr => [note, ...prevArr]);
    };


    const handleChange = (e) => {
        const changedNote = { ...editNote, [e.target.name]: e.target.value };
        setEditNote(changedNote);
    };

    const saveNote = (note) => {
        console.log(note.id);
        console.log(editNote);
        const index=notes.findIndex(data=> data.id===note.id);
        notes[index].heading=editNote.eheading;
        notes[index].text=editNote.etext;
        console.log(notes);
        handleClose();
    };

    return (
        <StyledCard>
            <CardContent>
                <Typography>{note.heading}</Typography>
                <Typography>{note.text}</Typography>
            </CardContent>
            <CardActions>
                <Archive
                    fontSize='small'
                    style={{ marginLeft: 'auto' }}
                    onClick={() => archiveNote(note)}
                />
                <EditNoteIcon
                    fontSize='small'
                    onClick={() => handleOpen(note)}
                />
                <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                >
                    <Card sx={style}>
                        <CardContent>
                            <Typography id="modal-modal-title" variant="h6" component="h2">
                                Update Note
                            </Typography>
                            <TextField
                                fullWidth
                                placeholder="Title"
                                variant='standard'
                                InputProps={{ disableUnderline: true }}
                                style={{ marginBottom: '10px', marginTop: '20px' }}
                                onChange={handleChange}
                                name='eheading'
                                value={editNote.eheading}
                            />
                            <TextField
                                fullWidth
                                placeholder='Take a Note...'
                                multiline
                                variant='standard'
                                InputProps={{ disableUnderline: true }}
                                onChange={handleChange}
                                name='etext'
                                value={editNote.etext}
                            />
                        </CardContent>
                        <CardActions>
                            <Button variant="text" onClick={()=>handleClose()} style={{ marginLeft: 'auto', color: 'rgba(0, 0, 0, 0.54)' }}>Close</Button>
                            <Button variant="text" onClick={()=>saveNote(note)} style={{ color: 'rgba(0, 0, 0, 0.54)' }}>Save</Button>
                        </CardActions>
                    </Card>

                </Modal>
                <Delete
                    fontSize='small'
                    onClick={() => deleteNote(note)}
                />

            </CardActions>

        </StyledCard>
    );
}
export default Note;