import ButtonBack from '../../components/InputCustom/BackInput'
import UserForm from '../../components/forms/UserForm'

const Configuracion = () => {
  return (

    <div className='w-full min-h-full flex' >
      <div className='w-2/12 h-full' >
        <ButtonBack to='dashboard' />
      </div>
      <div className='w-full'>
        <UserForm />
      </div>
    </div>

  )
}

export default Configuracion