import { useForm } from 'react-hook-form';
import GeneralInput from '../../InputCustom/GeneralInput';
import { Button } from '@nextui-org/react';
import { FC, useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../App';
import { useNavigate, useParams } from 'react-router-dom';
import { Employees, EmployeesFormProps } from '../../../interfaces';
import { GetEmployees } from '../../../services/Employees';
import TextAreaCustom from '../../InputCustom/TextAreaCustom';
import SelectCustom from '../../InputCustom/SelectCustom';
import { CreateTool, GetToolById, UpdateTool } from '../../../services/tools';
import { GetServices } from '../../../services/services';
import moment from 'moment';


const ToolsForm: FC<EmployeesFormProps> = ({
  typeCrud
}) => {
  const { user }: any = useContext(AuthContext);
  const [employees, setEmployees] = useState<any[]>([]);
  const [services, setServices] = useState<any[]>([]);
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
          name: data.toolName,
          description: data.description,
          dateOfAperture: data.departure,
          returnDate: data.AttendanceDate,
          employee: data.clientName,
          bearer: data.bearer,
          service: data.service,
        }
        let res;
        if (typeCrud === 'create') {
          res = await CreateTool(user.token, obj)
        }

        if (typeCrud === 'edit') {
          if (id !== undefined) {
            res = await UpdateTool(user.token, id, obj)
            console.log('edit')
          }
        }

        if (res.status === 200) {
          if (typeCrud === 'create') {
            alert('Herramienta creado correctamente')
            navigate('/herramientas')
          }
          if (typeCrud === 'edit') {
            alert('Herramienta actualizado correctamente')
            navigate('/herramientas')
          }
        }
      }
    } catch (error) {
      console.log(error)
    }
  }

  const getTool = async () => {
    try {
      if (user !== null) {
        const resp = await GetToolById(user.token, id)
        if (resp.status === 200) {
          reset({
            id: resp.data.id,
            toolName: resp.data.name,
            description: resp.data.description,
            departure: moment(resp.data.dateOfAperture).format('YYYY-MM-DD'),
            AttendanceDate: moment(resp.data.returnDate).format('YYYY-MM-DD'),
            clientName: resp.data.employee,
            bearer: resp.data.bearer,
            service: resp.data.service,
          })
        }
      }
    } catch (error) {
      console.log(error)
    }
  }

  const getEmployees = async () => {
    try {
      if (user !== null) {
        const res = await GetEmployees(user.token)
        const response = await GetServices(user.token)
        if (
          res.status === 200 &&
          response.status === 200
        ) {
          const FormatedEmployees = res.data.map((employee: Employees) => ({
            value: `${employee.name} ${employee.lastname}`,
            label: `${employee.name} ${employee.lastname}`
          }))
          const FormatedServices = response.data.map((service: any) => ({
            value: service.service,
            label: service.service
          }))
          setEmployees(FormatedEmployees)
          setServices(FormatedServices)
        }
      }
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    if (id !== undefined) {
      getTool()
    }
    getEmployees()
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
        <div className='flex flex-wrap gap-5'>

          <div className='flex flex-wrap gap-5 italic flex-col'>
            <div
              className='w-[300px] min-h-10 mr-5'
            >
              <GeneralInput
                label='Nombre'
                type='text'
                placeholder='Escriba el nombre de la herramienta'
                disabled={typeCrud === 'view'}
                name='toolName'
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
                label='Salida'
                type='date'
                placeholder='Hora y fecha de salida'
                disabled={typeCrud === 'view'}
                name='departure'
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
                label='Retorno'
                type='date'
                placeholder='Hora y fecha de retorno'
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
                label='Cliente'
                type='text'
                disabled={typeCrud === 'view'}
                placeholder='Escriba el cliente'
                name='clientName'
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
          <div className='flex flex-wrap gap-5 flex-col'>

            <SelectCustom
              label='Portador'
              name='bearer'
              register={register}
              disabled={typeCrud === 'view'}
              rules={{
                required: 'Campo requerido',
              }}
              options={employees}
            />
            <SelectCustom
              label='Servicio'
              name='service'
              disabled={typeCrud === 'view'}
              register={register}
              rules={{
                required: 'Campo requerido',
              }}
              options={services}
            />
          </div>
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
                      onPress={() => navigate('/herramientas')}
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

export default ToolsForm