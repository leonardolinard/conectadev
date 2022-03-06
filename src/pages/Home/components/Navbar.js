import React from "react";
import { makeStyles } from '@mui/styles';
import Paper from '@mui/material/Paper';
import Button from "@mui/material/Button";
import { ListSubheader, ListItem, ListItemText } from "@mui/material";



const useStyles = makeStyles({
    root: {
        padding: 16,
        width: 275,
        marginRight: 16,
    },
    button: {
        width: "100%"
    }
});

const tags = [
    { id: 1, name: "reactjs" },
    { id: 2, name: "javascript" },
    { id: 3, name: "dotnet" },
    { id: 4, name: "php" },
    { id: 5, name: "materialdesign" },
    { id: 6, name: "webdev" },
]

function Navbar() {
    const classes = useStyles();

    return (
        <Paper className={classes.root}>
            <Button variant="outlined" color="secondary" className={classes.button}> Registrar Grátis</Button>
            <ListSubheader>Tags em alta</ListSubheader>
            {
                tags.map((item) => (
                    <ListItem dense button key={`item-${item.id}-${item.name}`}>
                        <ListItemText primary={`#${item.name}`}></ListItemText>
                    </ListItem>
                ))
            }
            <ListItem button>
                Exibir mais tags
            </ListItem>
        </Paper>
    )
}

export default Navbar;