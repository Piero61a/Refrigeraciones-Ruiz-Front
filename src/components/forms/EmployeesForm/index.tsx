import { useForm } from 'react-hook-form';
import GeneralInput from '../../InputCustom/GeneralInput';
import { Button } from '@nextui-org/react';
import { FC, useContext, useEffect } from 'react';
import { AuthContext } from '../../../App';
import { useNavigate, useParams } from 'react-router-dom';
import { EmployeesFormProps } from '../../../interfaces';
import { CreateEmployees, GetEmployeesById, UpdateEmployees } from '../../../services/Employees';
import moment from 'moment';

const EmployeesForm: FC<EmployeesFormProps> = ({
  typeCrud
}) => {
  const { user }: any = useContext(AuthContext);
  const navigate = useNavigate();
  const { id } = useParams()
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
        let res;
        if (typeCrud === 'create') {
          res = await CreateEmployees(user.token, obj)
        }

        if (typeCrud === 'edit') {
          if (id !== undefined) {
            res = await UpdateEmployees(user.token, id, obj)
          }
        }

        if (res.status === 200) {
          if (typeCrud === 'create') {
            alert('Empleado creado correctamente')
            navigate('/empleados')
          }
          if (typeCrud === 'edit') {
            alert('Empleado actualizado correctamente')
            navigate('/empleados')
          }
        }
      }
    } catch (error) {
      console.log(error)
    }
  }

  const getEmployees = async () => {
    try {
      if (user !== null) {
        if (id !== undefined) {
          const response = await GetEmployeesById(user.token, id)
          if (response.status === 200) {
            reset({
              id: response.data.id,
              name: response.data.name,
              lastName: response.data.lastname,
              cellphone: response.data.mobile,
              emergencyPhone: response.data.emergencyphone,
              birthDate: moment(response.data.birthday).format('YYYY-MM-DD'),
            })
          }
        }
      }
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(() => {
    getEmployees()
  }, [user])

  return (
    <div className='pl-32'>
      {
        typeCrud !== 'create'
          ? (
            <>
              <h1 className='font-bold text-xl font-sans'> Datos Generales</h1>
              <div
                className='w-[300px] min-h-10 mr-5 italic'
              >
                <GeneralInput
                  label='ID'
                  type='text'
                  disabled={true}
                  name='id'
                  register={register}
                  errors={errors}
                  rules={{
                    required: false,
                  }}
                  withOutStyle
                />
              </div>
            </>
          )
          : <></>
      }
      <form onSubmit={handleSubmit(submit)} className='mt-5 '>
        <div className='flex flex-wrap gap-5 italic'>
          <div
            className='w-[300px] min-h-10 mr-5'
          >
            <GeneralInput
              label='Nombre(s)'
              type='text'
              placeholder='Escriba su nombre'
              disabled={typeCrud === 'view'}
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
              disabled={typeCrud === 'view'}
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
              type='number'
              placeholder='Escriba su celular'
              disabled={typeCrud === 'view'}
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
              type='number'
              disabled={typeCrud === 'view'}
              placeholder='Escriba su teléfono'
              name='emergencyPhone'
              register={register}
              errors={errors}
              rules={{
                required: false,
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
              label='Fecha de nacimiento'
              type='date'
              disabled={typeCrud === 'view'}
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
        {
          typeCrud === 'view'
            ? <></>
            : (
              <div className='flex justify-end mt-28 gap-5'>
                <div>
                  <Button
                    variant='ghost'
                    radius='none'
                    size='lg'
                    onPress={() => navigate('/empleados')}
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
            )
        }
      </form>
    </div>
  )
}

export default EmployeesForm