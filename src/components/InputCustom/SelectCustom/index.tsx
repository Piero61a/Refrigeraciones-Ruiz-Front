import { FC } from "react"
import { SelectCustomProps } from "../../../interfaces"

const SelectCustom: FC<SelectCustomProps> = ({
  options,
  name,
  register,
  rules,
  label,
  disabled
}) => {
  return (
    <div
      className='w-[300px] mr-5 '
    >
      <label className='italic' htmlFor={name}>{label}</label>
      <select
        {...register(name, rules)}
        disabled={disabled}
        name={name}
        defaultValue={"nothing"}
        className='w-full h-[42px] border-[1px] border-primary_input_border rounded-md p-1'>
        <option value={"nothing"} disabled hidden >
          Selecciona una opción
        </option>
        {
          options.map((item, index) => (
            <option
              key={index}
              value={item.value}>
              {item.label}
            </option>
          ))
        }
      </select>
    </div>
  )
}

export default SelectCustom