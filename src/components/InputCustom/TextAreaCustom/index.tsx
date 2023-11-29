import { InputCustomProps } from '../../../interfaces'
import { FC } from 'react'
import { ErrorMessage } from '@hookform/error-message'

const TextAreaCustom: FC<InputCustomProps> = ({
  label,
  placeholder,
  register,
  errors,
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
        <textarea
          {...(register && register(name, rules))}
          className={
            withOutStyle
              ? 'border-none'
              : 'border-[1px] rounded-md p-2 w-full focus:outline-none focus:border-transparent'
          }
          
          disabled={disabled}
          placeholder={placeholder}
          name={name}
          onWheel={numberInputOnWheelPreventChange}
          style={errors[name] ? {borderColor: '#FF0000'} : { borderColor: '#5B5959'}}
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

export default TextAreaCustom