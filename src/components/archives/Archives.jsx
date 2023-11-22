import { Box, Grid } from "@mui/material";
import { styled } from '@mui/material/styles';
import Archive from "./Archive";
import { useContext } from "react";
import { DataContext } from "../../context/DataProvider";
import React from "react";

const DrawerHeader = styled('div')(({ theme }) => ({
    ...theme.mixins.toolbar,
}));

const Archives = () => {

    const { archiveNotes } = useContext(DataContext);

    return (
        <Box sx={{ display: 'flex', margin: 'auto' }}>

            <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
                <DrawerHeader />
                <Grid container>
                    {
                        archiveNotes.map(archive => (
                            <Grid item style={{marginTop: 15}}>
                            <Archive note={archive} />
                            </Grid>
                        ))
                    }
                </Grid>
                </Box>
        </Box>
    );
}
export default Archives;