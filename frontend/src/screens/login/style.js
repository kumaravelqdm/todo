import makeStyles from '@mui/styles/makeStyles'

export const useStyles = makeStyles(theme => ({
  root: {
    [theme.breakpoints.up('md')]: {
      backgroundColor: theme.palette.background.primary,
      height: '100vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
    },
    [theme.breakpoints.down('md')]: {
      backgroundColor: theme.palette.background.primary,
      height: '100vh',
      overflow:'auto'
    }
  },
  logo: {
    position: 'absolute',
    top: 14,
    left: 14
  },
  subtitle1: {
    [theme.breakpoints.up('md')]: {
      fontSize: '20px',
      marginBottom: '24px'
    },
    [theme.breakpoints.down('md')]: {
      marginBottom: '16px',
      fontSize: '20px'
    }
  },
  title: {
    [theme.breakpoints.up('md')]: {
      fontFamily: 'regular',
      color: theme.palette.text.black,
      fontSize: '20px',
      fontWeight: '600',
      marginBottom: '12px',
      marginTop: '20px'
    },
    [theme.breakpoints.down('md')]: {
      display: 'display',
      fontFamily: 'regular',
      color: theme.palette.text.black,
      fontSize: '20px',
      fontWeight: '600'
      // marginBottom: '12px',
      // marginTop: '20px',
    }
  },
  btn: {
    [theme.breakpoints.up('md')]: {
      borderRadius: '6px',
      padding: '12px'
    },
    [theme.breakpoints.down('md')]: {
      position: 'fixed',
      bottom: '0',
      left: '0px',
      padding: '12px 24px',
      borderRadius: '1px'
    }
  },
  forgotpassword: {
    [theme.breakpoints.up('md')]: {
      textAlign: 'right',
      marginTop: '10px',
      fontSize: '14px',
      fontFamily: 'medium',
      color: theme.palette.primary.main,
      cursor: 'pointer'
    },
    [theme.breakpoints.down('md')]: {
      textAlign: 'right',
      marginTop: '10px',
      fontSize: '14px',
      fontFamily: 'medium',
      color: theme.palette.primary.main,
      cursor: 'pointer'
    }
  },
  align: {
    // width: '95%',
    [theme.breakpoints.down('md')]: {
      width: '100%'
    }
  }
}))
