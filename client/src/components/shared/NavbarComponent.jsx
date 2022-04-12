import { AppBar, IconButton, Toolbar, Typography } from '@material-ui/core'
import { IoLogoBuffer } from "react-icons/io";

const NavbarComponent = () => {

  return (
    <AppBar position="static">
      <Toolbar variant="dense">
          <IconButton edge="start" color="inherit" aria-label="menu">
          <IoLogoBuffer />
          </IconButton>
          <Typography variant="h6" color="inherit">
          MsTest
          </Typography>
      </Toolbar>
    </AppBar>
  )
}

export default NavbarComponent