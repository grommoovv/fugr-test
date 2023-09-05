import { FC, SelectHTMLAttributes } from 'react'
import cls from './Select.module.scss'
import { SelectFields } from './types'

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  defaultValue: string
  selectFields: SelectFields[]
  selectValue?: string
  handleChangeValue?: (selectValue: string) => void
}

export const Select: FC<SelectProps> = (props) => {
  const { defaultValue, selectFields, selectValue, handleChangeValue } = props

  return (
    <>
      <select
        className={cls.select}
        value={selectValue}
        // onChange={(e) => handleChangeValue(e.target.value)}
      >
        <option className={cls.option}>{defaultValue}</option>

        {selectFields.map((field) => (
          <option className={cls.option} value={field.value} key={field.value}>
            {field.text}
          </option>
        ))}
      </select>
    </>
  )
}
