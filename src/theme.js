import { createMuiTheme } from '@material-ui/core/styles'

// This is a demo - edit bewlow as necessary!!
export default createMuiTheme({
  overrides: {
    MuiButton: {
      root: {
        fontWeight: 'bold',
        backgroundColor: 'red',
        margin: '10px',
        '&:hover': {
          backgroundColor: 'green'
        }
      }
    }
  }
})
