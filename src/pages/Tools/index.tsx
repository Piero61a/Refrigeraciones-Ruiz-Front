import { useLocation } from 'react-router-dom'
import NavigateCruds from '../../components/Wrappers/NavigateCruds'
import ToolsTable from '../../components/Tables/ToolsTable'
import CreateToolPage from './create'
import EditToolsPage from './editar'

const ToolsPage = () => {
    const { pathname } = useLocation()

    if (pathname.includes('crear')) {
        return <CreateToolPage/>
    }
    if (pathname.includes('editar')) {
        return <EditToolsPage typeCrud={'edit'}/>
    }
    if (pathname.includes('ver')) {
        return <EditToolsPage typeCrud={'view'}/>
    }

    return (

        <div className='w-full h-full'>
            <NavigateCruds
                title={'Herramientas'}
                typeCrud={'table'}
                createRoute={'herramientas'}
                createButtonText={'Agregar articulo de herramienta'}
                backRoute='dashboard'
            />
            <div className='mt-10'>
                <ToolsTable />
            </div>
        </div>
    )
}

export default ToolsPage