import React from "react";
import { Card, CardActions, CardContent, CardMedia, Button, Typography } from "@material-ui/core";
import ThumbUpAltIcon from "@mui/icons-material/ThumbUpAlt";
import DeleteIcon from "@mui/icons-material/Delete";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import moment from "moment";
import useStyles from "./styles";
import { useDispatch } from "react-redux";
import { deletePostAsync, setCurrentId, likePostAsync } from "../../../store/posts/posts.action";

const Post = ({ post }) => {
	const classes = useStyles();
	const dispatch = useDispatch();

	return (
		<Card className={classes.card}>
			<CardMedia
				className={classes.media}
				image={
					post.selectedFile ||
					"https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png"
				}
				title={post.title}
			/>
			<div className={classes.overlay}>
				<Typography variant="h6">{post.creator}</Typography>
				<Typography variant="body2">{moment(post.createdAt).fromNow()}</Typography>
			</div>
			<div className={classes.overlay2}>
				<Button style={{ color: "white" }} size="small" onClick={() => dispatch(setCurrentId(post._id))}>
					<MoreHorizIcon fontSize="small" />
				</Button>
			</div>
			<div className={classes.details}>
				<Typography variant="body2" color="textSecondary">
					{post.tags.map((tag) => `#${tag} `)}
				</Typography>
			</div>
			<Typography className={classes.title} gutterBottom variant="h5" component="h2">
				{post.title}
			</Typography>
			<CardContent>
				<Typography variant="body2" color="textPrimary" component="p">
					{post.message}
				</Typography>
			</CardContent>
			<CardActions className={classes.cardActions}>
				<Button size="small" color="primary" onClick={() => dispatch(likePostAsync(post._id))}>
					<ThumbUpAltIcon fontSize="small" />
					&nbsp; Like &nbsp;{post.likeCount}
				</Button>
				<Button size="small" color="primary" onClick={() => dispatch(deletePostAsync(post._id))}>
					<DeleteIcon fontSize="small" />
					Delete
				</Button>
			</CardActions>
		</Card>
	);
};

export default Post;
