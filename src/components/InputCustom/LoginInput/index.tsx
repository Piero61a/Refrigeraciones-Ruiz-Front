import { Input } from '@nextui-org/react'
import styles from './styles.module.css'
import { InputCustomProps } from '../../../interfaces'
import { FC } from 'react'
import { ErrorMessage } from '@hookform/error-message'

const LoginInput: FC<InputCustomProps> = ({
  onchange,
  label,
  placeholder,
  register,
  errors,
  type,
  name,
  rules,
  showError,
}) => {
  const numberInputOnWheelPreventChange = (e: any) => {
    e.target.blur();
    e.stopPropagation();
    setTimeout(() => {
      e.target.focus();
    }, 0);
  };
  return (
    <div>
      {
        type === 'password' ? (
          <div>
            <Input
              {...(register && register(name, rules))}
              label={label}
              type={type}
              placeholder={placeholder}
              labelPlacement="outside"
              width="200px"
              name={name}
              autoFocus
              variant='bordered'
              autoComplete='off'
              radius='sm'
              classNames={{
                label: styles.label,
                inputWrapper: errors[name]
                ? styles.inputWrapperError
                : styles.inputWrapper,

              }}
              onChange={onchange}
              />
          </div>
        ) : (
          
          <div>
            <Input
              {...(register && register(name, rules))}
              label={label}
              type={type}
              autoComplete='off'
              placeholder={placeholder}
              labelPlacement="outside"
              width="200px"
              name={name}
              autoFocus
              onWheel={numberInputOnWheelPreventChange}
              variant='bordered'
              radius='sm'
              classNames={{
                label: styles.label,
                inputWrapper: errors[name]
                  ? styles.inputWrapperError
                  : styles.inputWrapper
              }}
              onChange={onchange}
            />
          </div>
        )
      }
      {showError === false ? (
        <></>
      ) : (
        <ErrorMessage
          errors={errors}
          name={name as any}
          render={({ message }) => {
            return (
              <p
                className='text-error_color text-sm'
              >
                {message}
              </p>
            );
          }}
        />
      )}
    </div>

  )
}

export default LoginInput