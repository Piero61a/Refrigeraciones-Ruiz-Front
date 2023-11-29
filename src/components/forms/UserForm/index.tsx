import { useForm } from 'react-hook-form';
import GeneralInput from '../../InputCustom/GeneralInput';
import { Button } from '@nextui-org/react';
import { GetUserById, PatchUserById } from '../../../services/users';
import { useContext, useEffect } from 'react';
import { AuthContext } from '../../../App';
import moment from 'moment';
import { useNavigate } from 'react-router-dom';

const UserForm = () => {
  const { user }: any = useContext(AuthContext);
  const navigate = useNavigate()
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const submit = async (data: any) => {
    try {
      if (user !== null) {
        const obj = {
          name: data.name,
          lastname: data.lastName,
          mobile: data.cellphone,
          emergencyphone: data.emergencyPhone,
          birthday: data.birthDate,
        }
        const response = await PatchUserById(user.token, user.id, obj);
        if (response.status === 200) {
          alert('Datos actualizados correctamente')
        }
      }
    } catch (error) {
      console.log(error)
    }
  }

  const getUser = async () => {
    try {
      if (user !== null) {
        const response = await GetUserById(user.token, user.id);
        if (response.status === 200) {
          reset({
            name: response.data.name,
            lastName: response.data.lastname,
            cellphone: response.data.mobile,
            emergencyPhone: response.data.emergencyphone,
            birthDate: moment(response.data.birthday).format('YYYY-MM-DD'),
          })
        }
      }
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(() => {
    getUser()
  }, [user])

  return (
    <div>
      <h1 className='font-bold text-2xl font-sans'> Datos Generales</h1>
      <p className='font-sans'>ID {user.id}</p>
      <form onSubmit={handleSubmit(submit)} className='mt-5'>
        <div className='flex flex-wrap gap-5 italic'>
          <div
            className='w-[300px] min-h-10 mr-5'
          >
            <GeneralInput
              label='Nombre(s)'
              type='text'
              placeholder='Escriba su nombre'
              name='name'
              register={register}
              errors={errors}
              rules={{
                required: 'Campo requerido',
              }}
              showError={true}
            />
          </div>
          <div
            className='w-[300px] min-h-10 mr-5 '
          >
            <GeneralInput
              label='Apellido(s)'
              type='text'
              placeholder='Escriba su apellido'
              name='lastName'
              register={register}
              errors={errors}
              rules={{
                required: 'Campo requerido',
              }}
              showError={true}
            />
          </div>
          <div
            className='w-[300px] mr-5 '
          >
            <GeneralInput
              label='Celular'
              type='text'
              placeholder='Escriba su celular'
              name='cellphone'
              register={register}
              errors={errors}
              rules={{
                required: 'Campo requerido',
                minLength: {
                  value: 10,
                  message: 'Mínimo 10 caracteres'
                }
              }}
              showError={true}
            />
          </div>
          <div
            className='w-[300px] mr-5 '
          >
            <GeneralInput
              label='Teléfono de emergencia'
              type='text'
              placeholder='Escriba su teléfono'
              name='emergencyPhone'
              register={register}
              errors={errors}
              rules={{
                required: false,
              }}
              showError={true}
            />
          </div>
          <div
            className='w-[300px] mr-5 '
          >
            <GeneralInput
              label='Fecha de nacimiento'
              type='date'
              placeholder='Escriba su nombre'
              name='birthDate'
              register={register}
              errors={errors}
              rules={{
                required: 'Campo requerido',
              }}
              showError={true}
            />
          </div>
        </div>

        <div className='flex justify-end mt-28 gap-5'>
          <div>
            <Button
              variant='ghost'
              radius='none'
              size='lg'
              onPress={() => navigate('/dashboard')}
            >
              Cancelar
            </Button>
          </div>
          <div>
            <Button
              variant='solid'
              radius='none'
              size='lg'
              className='font-bold'
              type='submit'
            >
              Guardar
            </Button>
          </div>
        </div>
      </form>
    </div>
  )
}

export default UserForm