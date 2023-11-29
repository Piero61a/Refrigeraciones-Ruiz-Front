import { Spacer, Table, TableBody, TableCell, TableColumn, TableHeader, TableRow, useDisclosure } from '@nextui-org/react'
import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../App';
import { Services } from '../../interfaces';
import { MdOutlineModeEditOutline } from "react-icons/md";
import { MdDeleteForever } from "react-icons/md";
import { Link } from 'react-router-dom';
import React from 'react';
import DeleteModal from '../Modals/DeleteModal';
import moment from 'moment';
import { GetServices } from '../../services/services';

const ServicesTable = () => {
  const [services, setServices] = useState<Services[]>([])
  const { user }: any = useContext(AuthContext);
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [idToDelete, setIdToDelete] = useState<number>(0)

  const getServices = async () => {
    try {
      if (user !== null) {
        const res = await GetServices(user.token)
        if (res.status === 200) {
          setServices(res.data)
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
    getServices()
  }, [user])

  return (
    <>
      <Table classNames={classNames} aria-label="Services table">
        <TableHeader  >
          <TableColumn >Servicio</TableColumn>
          <TableColumn >Descripción</TableColumn>
          <TableColumn >Cliente</TableColumn>
          <TableColumn >Fecha de asistencia</TableColumn>
          <TableColumn >Presupuesto</TableColumn>
          <TableColumn >Estatus</TableColumn>
          <TableColumn > </TableColumn>
        </TableHeader>
        <TableBody emptyContent={"No existen servicios."} >
          {
            services.map((service) => (
              <TableRow key={service.id}>
                <TableCell>
                  <Link className='font-bold' to={`/servicios/ver/${service.id}`} >
                    {service.service}
                  </Link>
                </TableCell>
                <TableCell >{service.description}</TableCell>
                <TableCell >{service.client}</TableCell>
                <TableCell >{moment(service.dateOfAssistance).format('DD-MM-YYYY')}</TableCell>
                <TableCell >{service.budget}</TableCell>
                <TableCell >{service.status}</TableCell>
                <TableCell >
                  <div className='flex'>
                    <Link to={`/servicios/editar/${service.id}`} >
                      <MdOutlineModeEditOutline color={'darkblue'} size={20} />
                    </Link>
                    <Spacer x={2} />
                    <div className='cursor-pointer' onClick={() => {
                      setIdToDelete(Number(service.id))
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
        title='Eliminar servicio'
        textContent='¿Está seguro que desea eliminar este servicio?'
        type='service'
      />
    </>
  )
}

export default ServicesTable