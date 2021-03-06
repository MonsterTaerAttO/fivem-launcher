import React from 'react';
import { makeStyles, CircularProgress } from '@material-ui/core';
import { Dot } from 'react-animated-dots';

import Loader from '../Loader';

const useStyles = makeStyles((theme) => ({
	wrapper: {
		width: 'fit-content',
		height: 'fit-content',
		position: 'absolute',
		top: 0,
		bottom: 0,
		right: 0,
		left: 0,
		margin: 'auto',
		textAlign: 'center',
		padding: 50,
		background: `${theme.palette.secondary.dark}14`,
        backdropFilter: 'blur(8px)',
        fontSize: 25,
        fontFamily: 'ReactRP',
		textShadow: `0 0 5px ${theme.palette.secondary.dark}`,
    },
    loadingText: {
        marginTop: 25,
    },
	dot1: {
		color: theme.palette.primary.main,
	},
	dot2: {
		color: theme.palette.text.main,
	},
	dot3: {
		color: '#0ad3ac',
	},
}));

export default () => {
	const classes = useStyles();

	return (
		<div className={classes.wrapper}>
            <Loader text='Loading' size={75} />
		</div>
	);
};
