import NavigateCruds from "../../../components/Wrappers/NavigateCruds"
import ToolsForm from "../../../components/forms/ToolsForm"

const EditToolsPage = ({ typeCrud }: { typeCrud: 'edit' | 'view' }) => {
  return (
    <div className='w-full h-full'>
      <NavigateCruds
        title={typeCrud === 'edit' ? 'Editar herramienta' : 'Consultar herramienta'}
        createRoute="herramientas"
        typeCrud={typeCrud}
        backRoute="herramientas"
      />
      <ToolsForm typeCrud={typeCrud} />
    </div>
  )
}

export default EditToolsPage