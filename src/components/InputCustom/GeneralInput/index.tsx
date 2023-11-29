import { InputCustomProps } from '../../../interfaces'
import { FC } from 'react'
import { ErrorMessage } from '@hookform/error-message'

const GeneralInput: FC<InputCustomProps> = ({
  onchange,
  label,
  placeholder,
  register,
  errors,
  type,
  name,
  rules,
  showError,
  disabled,
  withOutStyle
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
      <label htmlFor={name}>{label}</label>
      <div>
        <input
          {...(register && register(name, rules))}
          className={
            withOutStyle
              ? 'border-none bg-[transparent] text-xl'
              : 'border-[1px] rounded-md p-2 w-full focus:outline-none focus:border-transparent'
          }

          type={type}
          disabled={disabled}
          placeholder={placeholder}
          width="200px"
          name={name}
          onWheel={numberInputOnWheelPreventChange}
          style={errors[name] ? { borderColor: '#FF0000' } : { borderColor: '#5B5959' }}
          onChange={onchange}
        />
      </div>

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

export default GeneralInput