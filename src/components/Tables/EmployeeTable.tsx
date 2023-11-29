import { Spacer, Table, TableBody, TableCell, TableColumn, TableHeader, TableRow, useDisclosure } from '@nextui-org/react'
import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../App';
import { GetEmployees } from '../../services/Employees';
import { Employees } from '../../interfaces';
import moment from 'moment';
import { MdOutlineModeEditOutline } from "react-icons/md";
import { MdDeleteForever } from "react-icons/md";
import { Link } from 'react-router-dom';
import React from 'react';
import DeleteModal from '../Modals/DeleteModal';

const EmployeeTable = () => {
  const [employees, setEmployees] = useState<Employees[]>([])
  const { user }: any = useContext(AuthContext);
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [idToDelete, setIdToDelete] = useState<number>(0)

  const getEmployees = async () => {
    try {
      if (user !== null) {
        const response = await GetEmployees(user.token)
        if (response.status === 200) {
          setEmployees(response.data)
        }
      }
    } catch (error) {
      console.log(error)
    }
  }

  const classNames = React.useMemo(
    () => ({
      th: ["bg-[#ccc]", "text-default-500", "border-b", "border-divider"],
      td: ["border-b", "border-divider"],
    }),
    [],
  );

  useEffect(() => {
    getEmployees()
  }, [user])



  return (
    <>
      <Table classNames={classNames} aria-label="Employees table">
        <TableHeader  >
          <TableColumn >Nombre</TableColumn>
          <TableColumn >Apellido</TableColumn>
          <TableColumn >Fecha de nacimiento</TableColumn>
          <TableColumn >Celular</TableColumn>
          <TableColumn >Teléfono de emergencia</TableColumn>
          <TableColumn > </TableColumn>
        </TableHeader>
        <TableBody emptyContent={"No existen clientes."} >
          {
            employees.map((employee) => (
              <TableRow key={employee.id}>
                <TableCell>
                  <Link className='font-bold' to={`/empleados/ver/${employee.id}`} >
                    {employee.name}
                  </Link>
                </TableCell>
                <TableCell >{employee.lastname}</TableCell>
                <TableCell >{moment(employee.birthday).format('DD-MM-YYYY')}</TableCell>
                <TableCell >{employee.mobile}</TableCell>
                <TableCell >{employee.emergencyphone}</TableCell>
                <TableCell >
                  <div className='flex'>
                    <Link to={`/empleados/editar/${employee.id}`} >
                      <MdOutlineModeEditOutline color={'darkblue'} size={20} />
                    </Link>
                    <Spacer x={2} />
                    <div className='cursor-pointer' onClick={() => {
                      setIdToDelete(Number(employee.id))
                      onOpen()

                    }} >
                      <MdDeleteForever color={'darkblue'} size={20} />
                    </div>
                  </div>
                </TableCell>
              </TableRow>
            ))
          }

        </TableBody>
      </Table>
      <DeleteModal
        onOpenChange={onOpenChange}
        isOpen={isOpen}
        id={Number(idToDelete)}
        title='Eliminar empleado'
        textContent='¿Está seguro que desea eliminar este empleado?'
        type='employee'
      />
    </>
  )
}

export default EmployeeTable