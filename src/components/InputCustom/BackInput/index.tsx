import { Button } from '@nextui-org/react'
import { FC } from 'react';
import { MdOutlineArrowBack } from "react-icons/md";
import { useNavigate } from 'react-router-dom';
import { BackButtonProps } from '../../../interfaces';

const ButtonBack: FC<BackButtonProps> = ({ to }) => {
  const router = useNavigate()
  return (
    <Button
      variant='solid'
      className='flex items-center justify-center'
      onClick={() => router(`/${to}`)}
    >
      <MdOutlineArrowBack size={20} />
      Regresar
    </Button>
  )
}

export default ButtonBack