import React from 'react'
import { InputLabel, TextField } from '@mui/material'
import { useStyles } from './style'
export const InputField = ({
  label = '',
  placeholder = '',
  value = '',
  onChange = () => false,
  isError = false,
  helperText = '',
  isRequired = false,
  type = '',
  fullWidth,
  size = SIZE.small,
  parentProps = {},
  disabled = false
}) => {
  const classes = useStyles()
  return (
    <>
      {/* Label */}
      <InputLabel htmlFor='input-label' required={isRequired}>
        {label}
      </InputLabel>

      {/* TextField */}
      <TextField
        variant='outlined'
        value={value}
        size={size}
        placeholder={placeholder}
        onChange={value => onChange(value)}
        type={type}
        fullWidth={fullWidth}
        className={`${classes.textBox} ${isError ?? 'error'} `}
        helperText={helperText}
        required={isRequired}
        error={isError}
        disabled={disabled}
        {...parentProps}
      />
    </>
  )
}
// size ENUM
const SIZE = {
  small: 'small',
  medium: 'medium',
  large: 'large'
}
InputField.size = SIZE
