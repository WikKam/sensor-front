import React, { useState } from 'react';
import { Button, Menu, MenuItem, Typography} from '@material-ui/core';

const NavbarButton = ({ menuItems, children, style, onButtonClick, ...rest }) => {
    const [anchorEl, setAnchorEl] = useState(null);

    const onClick = (e) => setAnchorEl(e.currentTarget);
    const onClose = () => setAnchorEl(null);

    return(
        <>
        <Button style={style} onClick={onButtonClick || onClick} {...rest}>
        <Typography variant="body2">{children}</Typography>
        </Button>
        {menuItems &&
        <Menu
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={onClose}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
        transformOrigin={{ vertical: "top", horizontal: "center" }}
        getContentAnchorEl={null}
        >
          {menuItems.map(({text, onClick}, index) => <MenuItem key={index} onClick={onClick}>{text}</MenuItem>)}
        </Menu>
        }
        </>
    )
}

export default NavbarButton;