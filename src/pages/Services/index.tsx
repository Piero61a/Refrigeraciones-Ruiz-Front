import { useLocation } from 'react-router-dom'
import NavigateCruds from '../../components/Wrappers/NavigateCruds'
import ServicesTable from '../../components/Tables/ServicesTable'
import CreateServicePage from './create'
import EditServicePage from './editar'

const ServicesPage = () => {
  const { pathname } = useLocation()

  if (pathname.includes('crear')) {
    return <CreateServicePage/>
  }
  if (pathname.includes('editar')) {
    return <EditServicePage typeCrud='edit'/>
  }
  if (pathname.includes('ver')) {
    return <EditServicePage typeCrud='view'/>
  }

  return (

    <div className='w-full h-full'>
      <NavigateCruds
        title={'Servicios'}
        typeCrud={'table'}
        createRoute={'servicios'}
        createButtonText={'Agregar servicio'}
        backRoute='dashboard'
      />
      <div className='mt-10'>
        <ServicesTable />
      </div>
    </div>
  )
}

export default ServicesPage