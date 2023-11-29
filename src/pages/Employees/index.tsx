import { useLocation } from 'react-router-dom'
import NavigateCruds from '../../components/Wrappers/NavigateCruds'
import CreateEmployeePage from './create'
import EditEmployeePage from './editar'
import EmployeeTable from '../../components/Tables/EmployeeTable'

const EmployeesPage = () => {
  const { pathname } = useLocation()

  if (pathname.includes('crear')) {
    return <CreateEmployeePage />
  }
  if (pathname.includes('editar')) {
    return <EditEmployeePage typeCrud='edit' />
  }
  if (pathname.includes('ver')) {
    return <EditEmployeePage typeCrud='view' />
  }

  return (
    <div className='w-full h-full'>
      <NavigateCruds
        title={'Empleados'}
        typeCrud={'table'}
        createRoute={'empleados'}
        createButtonText={'Agregar empleado'}
        backRoute='dashboard'
      />
      <div className='mt-10'>
        <EmployeeTable />
      </div>
    </div>

  )
}

export default EmployeesPage