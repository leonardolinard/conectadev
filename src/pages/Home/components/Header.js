import React from "react";
import Button from "@mui/material/Button";
import { makeStyles } from '@mui/styles';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import SvgIcon from '@mui/material/SvgIcon';
import { Bell } from "react-feather";
import Avatar from '@mui/material/Avatar';

const useStyles = makeStyles({
    appBar: {
        boxShadow: "none",
    },
    img: {
        maxHeight: 55,
    },
    grow: {
        flexGrow: 1
    },
    userSection: {
        display: "flex",
        alignItems: "center"
    },
    bell: {
        margin: 10
    }
});

function Header() {
    const classes = useStyles();

    return (
        <AppBar position="fixed" color="inherit" className={classes.appBar}>
            <Toolbar>
                <img src="/images/logo.png" alt="Logo" className={classes.img} />
                <div className={classes.grow}></div>
                <div className={classes.userSection}>
                    <Button variant="contained" color="primary">Novo Post</Button>
                    <SvgIcon className={classes.bell}>
                        <Bell></Bell>
                    </SvgIcon>
                    <Avatar alt="User" src="/" />
                </div>

                {/* <div>
                    <a href="/">ConectaDev</a>
                </div>
                <div>
                    
                    <span>img1</span>
                </div> */}
            </Toolbar>

        </AppBar>
    )
}

export default Header;