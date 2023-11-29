import LoginInput from '../../InputCustom/LoginInput'
import { useForm } from 'react-hook-form'
import { Button } from '@nextui-org/react'
import { useNavigate } from 'react-router-dom'
import { PostRegister } from '../../../services/Register'

const RegisterForm = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const Register = async (data: any) => {
    try {
      const obj = {
        name: data.create.name,
        lastname: data.create.lastname,
        email: data.create.email,
        mobile: data.create.mobile,
        emergencyphone: data.create.emergencyphone ?? "0",
        birthday: data.create.birthday,
        password: data.create.password,
      }
      const res = await PostRegister(obj)
      if (res.status === 200) {
        navigate('/login')
      }
    } catch (error) {
      console.log(error)
    }
  };

  return (
    <form onSubmit={handleSubmit(Register)}>
      <div className='flex flex-col gap-3'>
        <div className='flex gap-5'>
          <LoginInput
            name='create.name'
            label={'Nombre'}
            placeholder={'Escriba su nombre'}
            register={register}
            type='text'
            errors={errors}
            showError={true}
            rules={{
              required: 'El nombre es requerido',
            }}
          />
          <LoginInput
            name='create.lastname'
            label={'Apellidos'}
            placeholder={'Escriba sus apellidos'}
            register={register}
            type='text'
            errors={errors}
            rules={{
              required: 'Los apellidos son requeridos',
            }}
          />
        </div>

        <div className='flex gap-5'>
          <LoginInput
            name='create.email'
            label={'Correo electrónico'}
            placeholder={'Escriba sus correo'}
            register={register}
            type='text'
            errors={errors}
            rules={{
              required: 'El correo es requerido',
              pattern: {
                value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
                message: 'El usuario debe ser un correo'
              }

            }}
          />
          <LoginInput
            name='create.password'
            label={'Contraseña'}
            placeholder={'Escriba sus contraseña'}
            register={register}
            type='password'
            errors={errors}
            rules={{
              required: 'Debe escribir una contraseña',
              minLength: {
                value: 8,
                message: 'La contraseña debe tener al menos 8 caracteres'
              }
            }}
          />

        </div>
        <div className='flex gap-5'>
          <LoginInput
            name='create.mobile'
            label={'Celular'}
            placeholder={'Escriba su celular'}
            register={register}
            type='number'
            errors={errors}
            rules={{
              required: 'El celular es requerido',
              minLength: {
                value: 10,
                message: 'El celular debe tener al menos 10 caracteres'
              }
            }}
          />
          <LoginInput
            name='create.emergencyphone'
            label={'Teléfono de emergencia'}
            placeholder={'Escriba su teléfono de emergencia'}
            register={register}
            type='number'
            errors={errors}
            rules={{
              required: false,
              minLength: {
                value: 10,
                message: 'El celular debe tener al menos 10 caracteres'
              }
            }}
          />
        </div>
        <LoginInput
          name='create.birthday'
          label={'Fecha de nacimiento'}
          placeholder={'Escriba su fecha de nacimiento'}
          register={register}
          type='date'
          errors={errors}
          rules={{
            required: 'Dato requerido',
          }}
        />



      </div>
      <div className='flex gap-5'>

        <Button
          variant="ghost"
          className='w-full mt-4'
          onPress={() => navigate('/login')}
        >
          Cancelar
        </Button>
        <Button
          type='submit'
          color="primary"
          variant="solid"
          className='w-full mt-4' 
        >
          Crear
        </Button>
      </div>
    </form>
  )
}

export default RegisterForm