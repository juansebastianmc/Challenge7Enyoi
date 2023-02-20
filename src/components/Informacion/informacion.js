import * as React from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import BackgroundHome from '../assets/BackgroundHome.jpg';

const Informacion = () =>{
    return(
        <Box sx={{ flexGrow: 1 }}>

        <Grid container spacing={2}  >
            <Grid style={{ fontFamily: 'arial', position: 'relatie', width: '225vh', height: '100vh', backgroundImage: `url(${BackgroundHome})`, backgroundSize: 'cover' }}>
                <Grid xs='auto' >
                    <Grid>

                        <h1 style={{ margin: '200px 50px 30px 50px', textAlign: 'center', alignItems: 'center', color: 'white' }}>Soy Juan Sebastian Muñoz.</h1>
                    </Grid>
                    
                </Grid>

                <h4 style={{ margin: '0 100px 0 100px', textAlign: 'center', alignItems: 'center', color: 'white' }}>Soy un joven de 26 años apasionado por aprender nuevas tecnologias, actualmente soy ingeniero civil, con el paso del tiempo me encamine hacia el desarrollo web encontrando algo que me apasiona mas que mi carrera actual. </h4>
            </Grid>
        </Grid>
        </Box>
    )
}

export default Informacion;