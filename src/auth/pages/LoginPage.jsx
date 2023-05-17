import { Link as RouterLink } from 'react-router-dom';
import { Google } from '@mui/icons-material';
import { Button, Grid, Link, TextField, Typography } from "@mui/material";
import { AuthLayout } from '../layout/AuthLayout';
import { useForm } from '../../hooks';
import { useDispatch, useSelector } from 'react-redux';
import { checkingCredentials, startGoogleSignIn } from '../../store/auth';

export const LoginPage = () => {
  //const { } = useSelector(state => state.auth)
  const dispatch = useDispatch();

  const { email, password, onInputChange} = useForm({
    email: 'papayon@chacaopizza.com',
    password: '123456'
  });

  const onSubmit = ( event ) => {
    event.preventDefault();
    console.log({ email, password });
    dispatch(checkingCredentials());
  }

  const onGoogleSignIn = () => {
    console.log('onGoogleSignIn')
    dispatch(startGoogleSignIn());
  }

  return (
    <AuthLayout title="Login">
      <form onSubmit={ onSubmit }>
          <Grid container>
            <Grid item xs={ 12 } sx={{ mt:2 }}>
              <TextField 
              label="Correo" 
              type="email" 
              placeholder="papayon@chacaopizza.com"
              fullWidth 
              name="email"
              value={ email }
              onChange={ onInputChange }
            />
            </Grid>
            <Grid item xs={ 12 } sx={{ mt:2 }}>
              <TextField 
              label="Contraseña" 
              type="password" 
              placeholder="contraseña"
              fullWidth 
              name="password"
              value={ password }
              onChange={ onInputChange }
            />
            </Grid>
            <Grid container spacing={ 2 } sx={{ mb: 2 }}>
              <Grid item xs={ 12 } sm={ 6 }>
                <Button type="submit" variant="contained" fullWidth sx={{mt: 1}} >
                  Login
                </Button>
              </Grid>
              <Grid item xs={ 12 } sm={ 6 }>
                <Button 
                  variant="contained" 
                  fullWidth 
                  sx={{mt: 1}}
                  onClick={ onGoogleSignIn }
                  >
                  <Google />
                </Button>
              </Grid>
            </Grid>

            <Grid container direction='row' justifyContent='end'>
              <Link component={ RouterLink } color='inherit' to="/auth/register">
                Crear una cuenta
              </Link>
            </Grid>
          </Grid>
        </form>
    </AuthLayout>
  )
}
