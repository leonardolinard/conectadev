import React from "react";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Feed from "./components/Feed"
import { makeStyles } from '@mui/styles';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';


const useStyles = makeStyles({
    root: {
        display: "flex",
        flexDirection: "column"
    },
    main: {
        height: "100vh",
        padding: 24,
    },
    toolbar: {
        minHeight: 64
    }
})

function Home() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Header />
            <div className={classes.toolbar}></div>
            <main className={classes.main}>
                <Container maxWidth="lg">
                    <Box display="flex">
                        <Navbar></Navbar>
                        <Feed></Feed>
                    </Box>
                </Container>
            </main>
        </div>
    )
}

export default Home;