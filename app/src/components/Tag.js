import React from 'react';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core';

const Tag = () => {
    const classes = tagStyle();
    return (
        <>
            <Container>
                <Grid container>
                    <Grid item xs={12} sm={12} md={12} lg={12}>
                        <Box textAlign="center" mt={5}>
                            <div className={classes.taggroup}>
                                <ul>
                                    <li><a href="#">JavaScript</a></li>
                                    <li><a href="#">React</a></li>
                                </ul>
                            </div>
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </>
    )
}

const tagStyle = makeStyles(() => ({
    taggroup: {
        "& ul": {
            margin: "0",
            padding: "0",
            listStyle: "none",
            "& li": {
                display: "inline-block",
                margin: "0 .3em .3em 0",
                padding: "0",
                "& a": {
                    display: "inline-block",
                    maxWidth: "100px",
                    height: "28px",
                    lineHeight: "28px",
                    padding: "0 1em",
                    backgroundColor: "#fff",
                    border: "1px solid #aaa",
                    borderRadius: "3px",
                    whitespace: "nowrap",
                    textOverflow: "ellipsis",
                    overflow: "hidden",
                    color: "#333",
                    fontSize: "13px",
                    textDecoration: "none",
                    "-webkit-transition": ".2s",
                    transition: ".2s",
                    "&:hover": {
                        backgroundColor: "#555",
                        color: "#fff"
                    }
                }
            }
        }
    }
}));


export default Tag;