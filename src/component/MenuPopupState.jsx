import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import PopupState, { bindTrigger, bindMenu } from 'material-ui-popup-state';
import { Link } from 'react-router-dom';
import './compo.css'


export default function MenuPopupState() {
  return (
    <PopupState variant="popover" popupId="demo-popup-menu">
      {(popupState) => (
        <React.Fragment>
          <Button variant="contained" {...bindTrigger(popupState)}>
            Option
          </Button>
          <Menu {...bindMenu(popupState)}>
            <MenuItem onClick={popupState.close}><Link to="/map">MAP</Link> </MenuItem>
            <MenuItem onClick={popupState.close }> <Link to="/liste">liste des cas</Link></MenuItem>
            <MenuItem onClick={popupState.close}>Logout</MenuItem>
          </Menu>
        </React.Fragment>
      )}
    </PopupState>
  );
}
