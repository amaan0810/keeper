import { Box, Grid } from "@mui/material";
import { styled } from '@mui/material/styles';
import Form from "./Form";
import Note from "./Note";
import { useContext } from "react";
import { DataContext } from "../../context/DataProvider";
import EmptyNotes from "./EmptyNotes";
import React from "react";

const DrawerHeader = styled('div')(({ theme }) => ({
    ...theme.mixins.toolbar,
}));

const Notes = () => {

    const { notes } = useContext(DataContext);

    return (
        <Box sx={{ display: 'flex', margin: 'auto' }}>

            <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
                <DrawerHeader />
                <Form />
                { 
                notes.length>0 ?
                <Grid container>
                    {
                        notes.map(note => (
                            <Grid key={note.id} item style={{marginTop: 15}}>
                            <Note note={note} />
                            </Grid>
                        ))
                    }
                </Grid>
                : <EmptyNotes/>
                }
            </Box>
        </Box>
    );
}
export default Notes;