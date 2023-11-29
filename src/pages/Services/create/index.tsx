import ServiceForm from "../../../components/forms/ServiceForm"

const CreateServicePage = () => {
  return (
    <div className='w-full h-full '>
      <h1 className='font-bold text-2xl font-sans pl-32'>Agregar servicio</h1>
      <ServiceForm typeCrud="create"/>
    </div>
  )
}

export default CreateServicePage