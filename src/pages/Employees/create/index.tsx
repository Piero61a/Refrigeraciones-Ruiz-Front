import EmployeesForm from "../../../components/forms/EmployeesForm"

const CreateEmployeePage = () => {
  return (
    <div className='w-full h-full'>
      <h1 className='text-center font-bold text-2xl font-sans'>Agregar Empleado</h1>
      <EmployeesForm typeCrud="create"/>
    </div>
  )
}

export default CreateEmployeePage