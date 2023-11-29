import { Modal, ModalContent, ModalHeader, ModalFooter, Button, ModalBody } from "@nextui-org/react";
import { AuthContext } from "../../App";
import { FC, useContext } from "react";
import { DeleteEmployees } from "../../services/Employees";
import { DeleteModalProps } from "../../interfaces";
import { DeleteService } from "../../services/services";
import { DeleteTool } from "../../services/tools";

const DeleteModal: FC<DeleteModalProps> = ({
  isOpen,
  onOpenChange,
  id,
  title,
  textContent,
  type
}) => {
  const { user }: any = useContext(AuthContext);
  const DeleteEmployee = async () => {
    try {
      if (user !== null) {
        if (type === 'employee') {
          const response = await DeleteEmployees(user.token, id)
          if (response.status === 200) {
            alert('Empleado eliminado')
          }
        }
        if (type === 'service') {
          const response = await DeleteService(user.token, id)
          if (response.status === 200) {
            alert('Servicio eliminado')
          }
        }
        if (type === 'tool') {
          const response = await DeleteTool(user.token, id)
          if (response.status === 200) {
            alert('Servicio eliminado')
          }
        }
      }
    } catch (error) {

    }
  }

  return (
    <>
      <Modal
        backdrop="opaque"
        isOpen={isOpen}
        onOpenChange={onOpenChange}

      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">{title}</ModalHeader>
              <ModalBody>
                <p>{textContent}</p>
              </ModalBody>
              <ModalFooter>
                <Button
                  variant='ghost'
                  radius='none'
                  size='lg'
                  onPress={onClose}>
                  Cancelar
                </Button>
                <Button
                  variant='solid'
                  radius='none'
                  size='lg'
                  className='font-bold'
                  type='submit'
                  onPress={() => {
                    DeleteEmployee()
                    onClose()
                    window.location.reload();
                  }}>
                  Eliminar
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}

export default DeleteModal;