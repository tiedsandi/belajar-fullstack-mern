import React, { useEffect } from "react";
import { Container, AppBar, Typography, Grow, Grid } from "@material-ui/core";

import Form from "./components/Form/Form";
import Posts from "./components/Posts/Posts";
import Memories from "./assets/memories.png";
import useStyles from "./styles";
import { useDispatch, useSelector } from "react-redux";
import { getPostsAsync } from "./store/posts/posts.action";

const App = () => {
	const curentId = useSelector((state) => state.post.currentId);
	const dispatch = useDispatch();
	const classes = useStyles();

	useEffect(() => {
		dispatch(getPostsAsync());
	}, [dispatch]);

	return (
		<Container maxWidth="lg">
			<AppBar className={classes.appBar} position="static" color="inherit">
				<Typography className={classes.heading} variant="h2" align="center">
					Memories
					<img className={classes.image} src={Memories} alt="memories" height="60" />
				</Typography>
			</AppBar>
			<Grow in>
				<Container>
					<Grid container justifyContent="space-between" alignItems="stretch" spacing={3}>
						<Grid item xs={12} sm={7}>
							<Posts />
						</Grid>
						<Grid item xs={12} sm={4}>
							<Form curentId={curentId} />
						</Grid>
					</Grid>
				</Container>
			</Grow>
		</Container>
	);
};

export default App;
