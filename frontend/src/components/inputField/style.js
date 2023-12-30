import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme) => ({
  textBox: {
    "& .MuiOutlinedInput-root": {
      fontSize: "12px",
      fontFamily: "regular",
      padding: "2px 0px !important",
      "& input":{
        padding: "8px 12px !important",
        fontSize:'14px',
      },
    
      "&:hover":{
        borderColor:theme.palette.primary.main
      }
    },
    [theme.breakpoints.up("md")]: {
      "& .MuiOutlinedInput-root": {
        borderRadius: "8px",
      },
    
    },
    [theme.breakpoints.down("md")]: {
      "& .MuiOutlinedInput-root": {
        borderRadius: "8px",
        backgroundColor: "#FFFFFF",
      },
      borderRadius: "8px",
    },
    "& .MuiInputAdornment-positionEnd":{
      "& button":{
        marginRight:7,
        padding:2
      }
    }
  },
}));
