import React from "react";
import { Typography, Box } from "@mui/material";
import { useStyles } from "./style";
import { LoadingButton } from "@mui/lab";
import { PasswordField } from "../../components";
import { InputField } from "../../components";
import { ValidateEmail } from "../../utils";

export const LoginComponent = ({
  title = "",
  subTitle = "",
  subTitle1 = "",
  field = [],
  onSubmit = () => false,
}) => {
  const classes = useStyles();
  const [state, setState] = React.useState({});
  const [error, setError] = React.useState({});

  const onChange = (id, value) => {
    let stateData = state;
    stateData[id] = value;
    setState({ ...stateData });
  };

  const constructState = () => {
    let stateData = {};
    field.forEach((item) => {
      stateData[item.key] = null;
    });
    setState({ ...stateData });
    setError({ ...stateData });
  }

  //   constrcuting value and error state from props field list
  React.useEffect(() => {
    constructState()
    // eslint-disable-next-line
  }, []);

  const Validation = () => {
    let result = true;
    let errorData = error;
    field?.forEach((val) => {
      switch (val.type) {
        case "email":
          let isValidated = ValidateEmail(state[val?.key]);
          if (isValidated) {
            errorData[val?.key] = null;
          } else {
            result = false
            errorData[val?.key] = "Invalid Email Id";
          }
          break;
        case "password":
          if (state[val?.key]?.length > 6) {
            errorData[val?.key] = null;
          } else {
            result = false
            errorData[val?.key] = "Invalid Password";
          }
          break;
        case "matchpassword":
          if (state["password"] === state[val?.key]) {
          } else {
            result = false;
            errorData[val?.key] = "Password not matching";
          }
          break;
        default:
      }
    });
    setError({ ...errorData });
    return result;
  };

  const submit = () => {
    if (Validation()) {
      onSubmit(state);
    }
  };

  const getFields = ({ value }) => {
    switch (value.type) {
      case "email": {
        return (
          <Box marginTop={2} marginBottom={3}>
            {/*InputField*/}
            <InputField
              label={value?.label}
              type={value?.type}
              value={state[value?.key]}
              onChange={(e, index) => onChange(value?.key, e.target.value)}
              placeholder={value?.placeholder}
              fullWidth={value?.fullWidth}
              isError={error[value.key] ? true : false}
              helperText={error[value.key]}
            />
          </Box>
        );
      }
      case "text": {
        return (
          <Box marginTop={2} marginBottom={3}>
            {/*InputField*/}
            <InputField
              label={value?.label}
              type={value?.type}
              value={state[value?.key]}
              onChange={(e, index) => onChange(value?.key, e.target.value)}
              placeholder={value?.placeholder}
              fullWidth={value?.fullWidth}
              isError={error[value.key] ? true : false}
              helperText={error[value.key]}
            />
          </Box>
        );
      }
      case "paragraph": {
        return (
          <Box marginTop={2} marginBottom={3}>
            <Typography
              className={classes.title}
              textAlign="left"
              marginTop={1}
              marginBottom={3}
              fontSize={"10px"}
            >
              {value?.label || ""}
            </Typography>

          </Box>
        );
      }
      case "password": {
        return (
          <Box marginBottom={1}>
            {/* PasswordField */}
            <PasswordField
              label={value?.label || ""}
              type={value?.type || ""}
              placeholder={value?.placeholder}
              fullWidth={value?.fullWidth}
              value={state[value?.key]}
              onChange={(e, index) => onChange(value?.key, e.target.value)}
              isError={error[value.key] ? true : false}
              helperText={error[value.key]}
            />
          </Box>
        );
      }

      case "forgotpassword": {
        return (
          <Box>
            {/* Forgot password */}
            <Typography
              className={classes.forgotpassword}
            >
              Forgot Password?{" "}
            </Typography>
          </Box>
        );
      }
      case "button": {
        return (
          <Box marginTop={4} style={{textAlign:value?.textAlign ? value?.textAlign:  "center"}}>
            {/* LoadingButton */}
            <LoadingButton
              className={classes.btn}
              variant={value?.variant}
              color={value?.color}
              fullWidth={value?.fullWidth}
              onClick={(e) => submit(e)}
            >
              {value?.actionBtnName}
            </LoadingButton>
          </Box>
        );
      }
      default: {
        return;
      }
    }
  };
  return (
    <div className={classes.align}>
      <Box>
        {/* Title */}
        <Typography
          className={classes.title}
          textAlign="center"
          marginTop={1}
          marginBottom={3}
          fontSize={"20px"}
        >
          {title}
        </Typography>

        {/* Subtitle */}

        {subTitle1 && (
          <Typography
            className={classes.subtitle}
            fontFamily={"medium"}
            textAlign="center"
            fontSize={"19px"}
          >
            {subTitle}
          </Typography>
        )}

        {/* subTitle1 */}
        <Typography
          className={classes.subtitle1}
          fontFamily={"medium"}
          textAlign="center"
          fontSize={"20px"}
        >
          {subTitle1}
        </Typography>

        {/* map fun */}

        {field?.map((value, index) => {
          return getFields({ value });
        })}
      </Box>
    </div>
  );
};
