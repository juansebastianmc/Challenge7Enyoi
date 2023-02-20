import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

const PaginaPrincipal = () => {
    return (
        <Box sx={{ 
            bgcolor: '#cfe8fc', 
            height: '100vh', 
             }} >
            <Grid container spacing={2}>
                <Grid className='paginaPrincipal ' item xs={12} md={8}>
                    <Grid item xs={4} pl={80}>
                    <h1> Bienvenidos!</h1>

                    </Grid>

                    

                </Grid>

            </Grid>
        </Box>


    )
}

export default PaginaPrincipal;