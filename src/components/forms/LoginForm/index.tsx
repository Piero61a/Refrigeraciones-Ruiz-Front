import LoginInput from '../../InputCustom/LoginInput'
import { useForm } from 'react-hook-form'
import { Button } from '@nextui-org/react'
import { PostLogin } from '../../../services/Login'
import { User } from '../../../interfaces'
import { Link, useNavigate } from 'react-router-dom'
import { useContext } from 'react'
import { AuthContext } from '../../../App'

const LoginForm = () => {
  const authContext = useContext(AuthContext)
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm();

  const login = async (data: any) => {
    try {
      const obj = {
        username: data.user,
        password: data.pass
      }
      const res = await PostLogin(obj)
      if (res.status === 401) {
        setError('user', {
          type: 'manual',
          message: 'Email o contraseña incorrectos'
        })
        setError('pass', {
          type: 'manual',
          message: 'Email o contraseña incorrectos'
        })
      }
      if (res.status === 200) {
        const user: User = {
          id: res.data.id,
          name: res.data.name,
          lastname: res.data.lastname,
          email: res.data.email,
          mobile: res.data.mobile,
          emergencyphone: res.data.emergencyphone,
          birthday: res.data.birthday,
          token: res.data.token
        }
        localStorage.setItem('user', JSON.stringify(user))
        if (authContext !== null) {
          authContext.setUser(user)
          navigate('/')
        }
      }
    } catch (error) {
      console.log(error)
    }
  };

  return (
    <form onSubmit={handleSubmit(login)}>
      <LoginInput
        name='user'
        label={'Usuario'}
        placeholder={'Escriba su correo'}
        register={register}
        type='text'
        errors={errors}
        rules={{
          required: 'El usuario es requerido',
          pattern: {
            value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
            message: 'El usuario debe ser un correo'
          }
        }}
      />
      <LoginInput
        name='pass'
        label={'Contraseña'}
        placeholder={'Escriba su contraseña'}
        register={register}
        type='password'
        errors={errors}
        rules={{
          required: 'La contraseña es requerida',
          minLength: {
            value: 6,
            message: 'La contraseña debe tener al menos 6 caracteres'
          }
        }}
      />
      <div className='w-full flex justify-end py-1'>
        <Link
          to={'/register'}
          className='text-primary_btn hover:text-opacity-80'
        >
          Registrate
        </Link>
      </div>
      <Button
        type='submit'
        color="primary"
        variant="solid"
        className='w-full mt-4'
      >
        Entrar
      </Button>
    </form>
  )
}

export default LoginForm