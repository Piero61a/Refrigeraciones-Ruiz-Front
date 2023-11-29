import NavigateCruds from "../../../components/Wrappers/NavigateCruds"
import EmployeesForm from "../../../components/forms/EmployeesForm"

const EditEmployeePage = ({ typeCrud }: { typeCrud: 'edit' | 'view' }) => {
  return (
    <div className='w-full h-full'>
      <NavigateCruds
        title={typeCrud === 'edit' ? 'Editar empleado' : 'Consultar empleado'}
        createRoute="empleados"
        typeCrud={typeCrud}
        backRoute="empleados"
      />
      <EmployeesForm typeCrud={typeCrud} />
    </div>
  )
}

export default EditEmployeePage