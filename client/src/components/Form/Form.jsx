import React, { useState, useEffect } from "react";
import { TextField, Button, Typography, Paper } from "@material-ui/core";
import FileBase from "react-file-base64";
import { useDispatch, useSelector } from "react-redux";

import useStyles from "./styles";
import { createPostAsync, setCurrentId, updatePostAsync } from "../../store/posts/posts.action";

const Form = ({ curentId }) => {
	const [postData, setPostData] = useState({
		creator: "",
		title: "",
		message: "",
		tags: "",
		selectedFile: "",
	});

	const post = useSelector((state) => {
		if (curentId && state.post.posts) {
			return state.post.posts.find((p) => p._id === curentId);
		}
		return null;
	});

	const classes = useStyles();
	const dispatch = useDispatch();

	useEffect(() => {
		if (post) setPostData(post);
	}, [post]);

	const clear = () => {
		dispatch(setCurrentId(null));
		setPostData({ creator: "", title: "", message: "", tags: "", selectedFile: "" });
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		if (curentId) {
			dispatch(updatePostAsync(curentId, postData));
			clear();
		} else {
			dispatch(createPostAsync(postData));
			clear();
		}
	};

	return (
		<Paper className={classes.paper}>
			<form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
				<Typography variant="h6">{curentId ? "Editing" : "Creating"} a Memory</Typography>
				<TextField
					name="creator"
					variant="outlined"
					label="Creator"
					fullWidth
					value={postData.creator}
					onChange={(e) => setPostData({ ...postData, creator: e.target.value })}
				/>
				<TextField
					name="title"
					variant="outlined"
					label="Title"
					fullWidth
					value={postData.title}
					onChange={(e) => setPostData({ ...postData, title: e.target.value })}
				/>
				<TextField
					name="message"
					variant="outlined"
					label="Message"
					fullWidth
					value={postData.message}
					onChange={(e) => setPostData({ ...postData, message: e.target.value })}
				/>
				<TextField
					name="tags"
					variant="outlined"
					label="Tags"
					fullWidth
					value={postData.tags}
					onChange={(e) => setPostData({ ...postData, tags: e.target.value.split(",") })}
				/>
				<div className={classes.fileInput}>
					<FileBase type="file" multiple={false} onDone={({ base64 }) => setPostData({ ...postData, selectedFile: base64 })} />
				</div>
				<Button className={classes.buttonSubmit} variant="contained" color="primary" size="large" type="submit" fullWidth>
					Submit
				</Button>
				<Button className={classes.buttonSubmit} variant="contained" color="secondary" size="small" onClick={clear} fullWidth>
					Clear
				</Button>
			</form>
		</Paper>
	);
};

export default Form;

// @audit-info ...postData / sparate data, digunakan jika hanya mau mengubah 1 atribut saja, dan data sebelumnya sama seperti sebelumnya maka gunakan ...
