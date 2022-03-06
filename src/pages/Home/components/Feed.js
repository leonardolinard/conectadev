import React from "react";
import { makeStyles } from '@mui/styles';
import PostCard from "../../../components/PostCard";


const useStyles = makeStyles((theme) => ({
    root: {

    }
}))

const posts = [
    {
        id: 1,
        author: {
            id: 1,
            name: "Anakin",
            username: "anakin",
            avatar: "/images/avatars/avatar_1.png"
        },
        title: "Criando um app do zero utilizando React",
        date: "March 5, 2022",
        description: "Primeiro post do app.",
        hashtags: "#reactjs, #javascript",
        image: "/images/posts/post1.jpeg"
    },
    {
        id: 2,
        author: {
            id: 1,
            name: "Guts",
            username: "guts",
            avatar: "/images/avatars/avatar_2.png"
        },
        title: "Aprendendo mais sobre React",
        date: "March 5, 2022",
        description: "Segundo post do app.",
        hashtags: "#materialdesign, #webdev",
        image: "/images/posts/post2.jpeg"
    },
];

function Feed() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            {
                posts.map((post) => (
                    <PostCard key={post.id} post={post} />

                ))
            }

        </div>
    )
}

export default Feed;