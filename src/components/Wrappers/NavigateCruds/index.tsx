import { FC } from 'react'
import ButtonBack from '../../InputCustom/BackInput'
import { Button } from '@nextui-org/react'
import { useNavigate } from 'react-router-dom'
import { NavigateCrudsProps } from '../../../interfaces'

const NavigateCruds: FC<NavigateCrudsProps> = ({
  title,
  typeCrud,
  createRoute,
  createButtonText,
  backRoute
}) => {
  const navigate = useNavigate()
  return (
    <div className='flex justify-between' >
      <div className='flex gap-2'>
        <ButtonBack to={backRoute} />
        <h1 className='font-bold text-2xl font-sans ml-1'>{title}</h1>
      </div>
      <div>
        {
          typeCrud === 'edit' || typeCrud === 'view'
            ? <></>
            : <Button onPress={() => navigate(`/${createRoute}/crear`)} >{createButtonText}</Button>
        }
      </div>
    </div>
  )
}

export default NavigateCruds