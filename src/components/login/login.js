import * as React from 'react'
import './login.css'
import { useState } from 'react'
import Grid from '@mui/material/Grid'
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import Alert from '@mui/material/Alert';
import axios from 'axios'
import { Link } from 'react-router-dom';
import Allowed from '../Allowed/Allowed';




const Login = ({ childToParentData, handleLogin  }) => {
    const [showPassword, setShowPassword] = useState(false);
    const [alert, setAlert] = useState(false);
    const [alertUsuario, setAlertUsuario] = useState(false);
    const [usuario, setUsuario] = useState('')
    const [password, setPassword] = useState('')
    const [data, setData] = useState('')

    
   
  
    
    const onChangeUsuario = (event) => { setUsuario(event.target.value) }
    const onChangePassword = (event) => { setPassword(event.target.value) }

    const login = () => {
        if (usuario === '' || password === '') {
            setAlert(true)
        } else {
            setAlert(false)
            setAlertUsuario(false)
            axios.post('http://localhost:3001/inicio-sesion', {
                user: usuario,
                password: password
            }).then((response) => {

                console.log('Esta es la respuesta del back', response.data)
                setData(response.data)
                childToParentData(data)
                // setUsuario('')
                // setPassword('')
            }).catch((err) => {
                setData('')
                setAlertUsuario(true)
                childToParentData(data)
                console.log('entro al error')
            })
        }
    }


    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    return (
        <Grid container>
            <Grid item xs={4} />
            <Grid item xs={4} pt={8} >
                <div className='Item'>
                    <Typography
                     variant="h4" gutterBottom
                     id="inicio-esion">
                        Inicio de sesion
                    </Typography>
                    {
                        alert &&
                        <Alert severity="error">Usuario o contraseña no pueden estar vacios</Alert>
                    }
                    {
                        alertUsuario &&
                        <Alert severity="warning">Usuario no existe</Alert>
                    }
                    <Grid item pt={4}>
                        <TextField
                            value={usuario}
                            onChange={onChangeUsuario}
                            id="outlined-basic"
                            label="Usuario"
                            variant="outlined" />
                    </Grid>
                    <Grid item pt={2}>
                        <FormControl sx={{ m: 1 }} variant="outlined">
                            <InputLabel htmlFor="outlined-adornment-password">Constraseña</InputLabel>
                            <OutlinedInput
                                value={password}
                                onChange={onChangePassword}
                                id="outlined-adornment-password"
                                type={showPassword ? 'text' : 'password'}
                                endAdornment={
                                    <InputAdornment position="end">
                                        <IconButton
                                            aria-label="toggle password visibility"
                                            onClick={handleClickShowPassword}
                                            onMouseDown={handleMouseDownPassword}
                                            edge="end"
                                        >
                                            {showPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
                                        </IconButton>
                                    </InputAdornment>
                                }
                                label="Password"
                            />
                        </FormControl>
                    </Grid>
                    <Grid item pt={2} pb={4}>
                        <Stack pl={8} spacing={2} direction="row">
                            <Button
                                id="btnCreateUser"
                                variant="contained"
                            >
                                Crear usuario
                            </Button>
                            <Link to='/portafolio'>
                                <Button
                                id="btnLogin"
                                    variant="contained"
                                    onClick={() => { handleLogin() }}
                                >
                                    Iniciar sesion
                                </Button> 
                           </Link>                              
                        </Stack>
                    </Grid>
                </div>
            </Grid>
        </Grid>
    )
}

export default Login 

// import Card from 'react-bootstrap/Card';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import Button from 'react-bootstrap/Button';
// import Alert from 'react-bootstrap/Alert';

// const Login = ({handleLogin, handleLogaut, alert})=>{
   

//     return(
//         <div>
//             <h1 className='mb-5 '>Pagina Principal</h1>
//             {!alert ?
//                ""
//                :
//              <Alert variant='success' style={{width:'400px', margin:'auto', marginBottom:'15px', color:'#515151', fontSize:'15px',textAlign:'center'}}>Estado de usuario en True</Alert>
               
//             }
//     <Link to='/portafolio'>
//         <Button variant="primary" style={{marginLeft:'90px', width:'300px',height:'50px',marginTop:'40px'}} onClick={()=>{handleLogin()}}>Login</Button><br />
//         </Link>
//         <Button variant="secondary" style={{marginLeft:'90px', width:'300px',height:'50px', marginTop:'20px'}} onClick={()=>{handleLogaut()}}>Logaut</Button>
        
     
//         </div>
//     )
// }

// export default Login;