import { useForm } from 'react-hook-form';
import GeneralInput from '../../InputCustom/GeneralInput';
import { Button } from '@nextui-org/react';
import { FC, useContext, useEffect } from 'react';
import { AuthContext } from '../../../App';
import { useNavigate, useParams } from 'react-router-dom';
import { EmployeesFormProps } from '../../../interfaces';
import TextAreaCustom from '../../InputCustom/TextAreaCustom';
import SelectCustom from '../../InputCustom/SelectCustom';
import { CreateService, GetServicesById, UpdateService } from '../../../services/services';
import moment from 'moment';

const allStatus = [
  {
    value: 'ingresado',
    label: 'Ingresado'
  },
  {
    value: 'aceptado',
    label: 'Aceptado'
  },
  {
    value: 'pendiente',
    label: 'Pendiente'
  },
  {
    value: 'asistido',
    label: 'Asistido'
  },
  {
    value: 'rechazado',
    label: 'Rechazado'
  },
]

const ServiceForm: FC<EmployeesFormProps> = ({
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
          service: data.serviceName,
          description: data.description,
          client: data.client,
          dateOfAssistance: data.AttendanceDate,
          budget: data.budget,
          status: data.status,
        }
        let res;
        if (typeCrud === 'create') {
          res = await CreateService(user.token, obj)
        }

        if (typeCrud === 'edit') {
          if (id !== undefined) {
            res = await UpdateService(user.token, id, obj)
          }
        }

        if (res.status === 200) {
          if (typeCrud === 'create') {
            alert('Empleado creado correctamente')
            navigate('/servicios')
          }
          if (typeCrud === 'edit') {
            alert('Empleado actualizado correctamente')
            navigate('/servicios')
          }
        }
      }
    } catch (error) {
      console.log(error)
    }
  }

  const getDataToShow = async () => {
    try {
      if (user !== null) {
        const res = await GetServicesById(user.token, id)
        if (res.status === 200) {
          reset({
            id: res.data.id,
            serviceName: res.data.service,
            description: res.data.description,
            client: res.data.client,
            AttendanceDate: moment(res.data.dateOfAssistance).format('YYYY-MM-DD'),
            budget: res.data.budget,
            status: res.data.status,
          })
        }
      }
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    if (id !== undefined) {
      getDataToShow()
    }
  }, [user])

  return (
    <div className='pl-32'>
      <h1 className='font-bold text-xl font-sans'> Datos Generales</h1>
      {
        typeCrud !== 'create'
          ? (
            <>
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
      <form onSubmit={handleSubmit(submit)} className='mt-5'>
        <div className='flex flex-wrap'>
          <div className='flex flex-wrap gap-5 italic flex-col'>
            <div
              className='w-[300px] min-h-10 mr-5'
            >
              <GeneralInput
                label='Servicio'
                type='text'
                placeholder='Escriba su servicio'
                disabled={typeCrud === 'view'}
                name='serviceName'
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
              <TextAreaCustom
                label='Descripción'
                disabled={typeCrud === 'view'}
                placeholder='Descripción'
                name='description'
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
                label='Client'
                type='text'
                placeholder='Escriba el cliente'
                disabled={typeCrud === 'view'}
                name='client'
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
                label='Fecha de asistencia'
                type='date'
                disabled={typeCrud === 'view'}
                name='AttendanceDate'
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
                label='Presupuesto'
                type='number'
                disabled={typeCrud === 'view'}
                placeholder='$0.00'
                name='budget'
                register={register}
                errors={errors}
                rules={{
                  required: 'Campo requerido',
                  min: 0,
                }}
                showError={true}
              />
            </div>
          </div>
          <SelectCustom
            label='Status'
            disabled={typeCrud === 'view'}
            name='status'
            register={register}
            rules={{
              required: 'Campo requerido',
            }}
            options={allStatus}
          />
        </div>

        <div >
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
                      onPress={() => navigate('/servicios')}
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
        </div>
      </form>
    </div>
  )
}

export default ServiceForm