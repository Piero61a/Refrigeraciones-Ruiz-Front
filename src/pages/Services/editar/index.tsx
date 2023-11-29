import NavigateCruds from "../../../components/Wrappers/NavigateCruds"
import ServiceForm from "../../../components/forms/ServiceForm"

const EditServicePage = ({ typeCrud }: { typeCrud: 'edit' | 'view' }) => {
  return (
    <div className='w-full h-full'>
      <NavigateCruds
        title={typeCrud === 'edit' ? 'Editar servicio' : 'Consultar servicio'}
        createRoute="servicios"
        typeCrud={typeCrud}
        backRoute="servicios"
      />
      <ServiceForm typeCrud={typeCrud} />
    </div>
  )
}

export default EditServicePage