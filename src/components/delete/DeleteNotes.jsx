import { Box, Grid } from "@mui/material";
import { styled } from '@mui/material/styles';
import DeleteNote from "./DeleteNote";
import { useContext } from "react";
import { DataContext } from "../../context/DataProvider";
import React from "react";


const DrawerHeader = styled('div')(({ theme }) => ({
    ...theme.mixins.toolbar,
}));

const DeleteNotes = () => {

    const { deleteNotes } = useContext(DataContext);

    return (
        <Box sx={{ display: 'flex', margin: 'auto' }}>

            <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
                <DrawerHeader />
                <Grid container>
                    {
                        deleteNotes.map(note => (
                            <Grid item style={{marginTop: 15}}>
                            <DeleteNote note={note} />
                            </Grid>
                        ))
                    }
                </Grid>
            </Box>
        </Box>
    );
}
export default DeleteNotes;