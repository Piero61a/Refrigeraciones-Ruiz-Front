import { Button } from '@nextui-org/react'
import { Link } from 'react-router-dom'
import { logout } from '../../services/utilts'
import { useLocation } from 'react-router-dom';
import moment from 'moment';
const Header = () => {
  const currentDate = moment().format('DD/MM/YYYY');
  const { pathname } = useLocation();

  return (
    <div className='flex justify-between items-center px-4 py-2 h-auto bg-white border-b-2 border-primary_input_border'>
      <h1 className='text-primary_text text-3xl'>Refrigeraciones Ruiz</h1>
      <p>{currentDate}</p>
      <div className='flex flex-col' >
        <Button
          variant='solid'
          onPress={() => logout()}
        >
          logout
        </Button>
        {
          pathname === '/configuracion'
            ? <></>
            : (
              <Link
                to='/configuracion'
                className='text-primary_text'
              >
                Configuración
              </Link>
            )
        }
      </div>
    </div>
  )
}

export default Header