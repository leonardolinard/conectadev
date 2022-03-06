import React from "react";
import { makeStyles } from '@mui/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';


const useStyles = makeStyles({
    root: {
        marginBottom: 16
    },
    subheader: {
        display: "flex",
        alignItems: "center"
    },
    caption: {
        marginRight: 8
    }
});

function PostCard({ post }) {
    const classes = useStyles();

    return (
        <Card className={classes.root}>
            <CardHeader
                avatar={<Avatar src={post.author.avatar} />}
                title={<Typography variant="h6">{post.title}</Typography>}
                subheader={
                    <div className={classes.subheader}>
                        <Typography variant="caption" className={classes.caption}>
                            {"Criado por"}
                        </Typography>
                        <Typography variant="subtitle2" className={classes.caption}> 
                            {post.author.name}
                        </Typography>
                        <Typography variant="caption" className={classes.caption}>
                            {post.date}
                        </Typography>
                    </div>
                }
            />
            <CardContent>

            </CardContent>
            <CardActions>

            </CardActions>
        </Card>
    )
}

export default PostCard;