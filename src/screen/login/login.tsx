import icon from '../../assets/image/login.svg'

// --------------- MATERIAL UI --------------------------------
import { Button } from '@mui/material';
import TextField from '@mui/material/TextField';

export default function Login() {
  return (
    <div className='container-login'>
        <section className='container-login_section1'>
            <h1>Almacen Telecable</h1>
            <div className='container-login_section1-input'>
                <TextField id="outlined-basic" label="Correo" variant="outlined" />
                <TextField id="outlined-basic" label="Contraseña" variant="outlined" type='password' />
                <Button variant="contained">Ingresar</Button>
            </div>
        </section>
        <section>
            <img src={icon} alt="icono" width={600} height={600} />
        </section>
    </div>
  )
}
