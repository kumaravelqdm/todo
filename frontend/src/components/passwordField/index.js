import React from "react";
import {useStyles} from "./style"
import { EyeIcon, EyeIconClose } from "../../assets";
import { TextField, InputAdornment, InputLabel } from "@mui/material";

export const PasswordField = ({
  label = "",
  placeholder = "",
  size = SIZE.small,
  fullWidth = false,
  onChange = () => false,
  isError = false,
  helperText = "",
  value = "",
  isRequired = false,
}) => {
  const  classes = useStyles();
  const [showpassword, setShowPassword] = React.useState(false);

  return (
    <div>
      {/* Label */}
      <InputLabel htmlFor="input-label" required={isRequired}>
        {label}
      </InputLabel>

      {/* Password TextField */}
      <TextField
      className={classes.textBox}
        type={showpassword ? "text" : "password"}
        value={value}
        size={size}
        fullWidth={fullWidth}
        onChange={onChange}
        placeholder={placeholder}
        helperText={helperText}
        error={isError}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end" className={classes.eyeIcon}>
              {/* EyeIcon */}
              {showpassword ? (
                <EyeIconClose
                  cursor="pointer"
                  onClick={() => setShowPassword(!showpassword)}
                />
              ) : (
                <EyeIcon
                  cursor="pointer"
                  onClick={() => setShowPassword(!showpassword)}
                />
              )}
            </InputAdornment>
          ),
        }}
      />
    </div>
  );
};

const SIZE = {
  small: "small",
  medium: "medium",
  large: "large",
};

PasswordField.size = SIZE;
