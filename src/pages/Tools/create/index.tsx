import ToolsForm from "../../../components/forms/ToolsForm"

const CreateToolPage = () => {
  return (
    <div className='w-full h-full'>
      <h1 className='font-bold text-2xl font-sans pl-32'>Agregar articulo de herramienta</h1>
      <ToolsForm typeCrud="create"/>
    </div>
  )
}

export default CreateToolPage