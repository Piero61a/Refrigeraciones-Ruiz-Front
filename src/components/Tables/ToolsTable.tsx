import { Spacer, Table, TableBody, TableCell, TableColumn, TableHeader, TableRow, useDisclosure } from '@nextui-org/react'
import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../App';
import { Tools } from '../../interfaces';
import { MdOutlineModeEditOutline } from "react-icons/md";
import { MdDeleteForever } from "react-icons/md";
import { Link } from 'react-router-dom';
import React from 'react';
import DeleteModal from '../Modals/DeleteModal';
import moment from 'moment';
import { GetTools } from '../../services/tools';

const ToolsTable = () => {
  const [tools, setTools] = useState<Tools[]>([])
  const { user }: any = useContext(AuthContext);
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [idToDelete, setIdToDelete] = useState<number>(0)

  const getTools = async () => {
    try {
      if (user !== null) {
        const res = await GetTools(user.token)
        if (res.status === 200) {
          setTools(res.data)
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
    getTools()
  }, [user])

  return (
    <>
      <Table classNames={classNames} aria-label="Tools table">
        <TableHeader  >
          <TableColumn >Nombre</TableColumn>
          <TableColumn >Descripción</TableColumn>
          <TableColumn >Portador</TableColumn>
          <TableColumn >Hora y fecha de salida</TableColumn>
          <TableColumn >Hora y fecha de retorno</TableColumn>
          <TableColumn >Cliente</TableColumn>
          <TableColumn >Servicio</TableColumn>
          <TableColumn > </TableColumn>
        </TableHeader>
        <TableBody emptyContent={"No existen clientes."} >
          {
            tools.map((tool) => (
              <TableRow key={tool.id}>
                <TableCell>
                  <Link className='font-bold' to={`/herramientas/ver/${tool.id}`} >
                    {tool.name}
                  </Link>
                </TableCell>
                <TableCell >{tool.description}</TableCell>
                <TableCell >{tool.bearer}</TableCell>
                <TableCell >{moment(tool.dateOfAperture).format('DD-MM-YYYY')}</TableCell>
                <TableCell >{moment(tool.returnDate).format('DD-MM-YYYY')}</TableCell>
                <TableCell >{tool.employee}</TableCell>
                <TableCell >{tool.service}</TableCell>
                <TableCell >
                  <div className='flex'>
                    <Link to={`/herramientas/editar/${tool.id}`} >
                      <MdOutlineModeEditOutline color={'darkblue'} size={20} />
                    </Link>
                    <Spacer x={2} />
                    <div className='cursor-pointer' onClick={() => {
                      setIdToDelete(Number(tool.id))
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
        title='Eliminar herramienta'
        textContent='¿Estás seguro que deseas eliminar esta herramienta?'
        type='tool'
      />
    </>
  )
}

export default ToolsTable