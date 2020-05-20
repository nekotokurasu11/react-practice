import React from 'react';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import "./Tag.css";

const TagCss = () => {
    return (
        <>
            <Container>
                <Grid container>
                    <Grid item xs={12} sm={12} md={12} lg={12}>
                        <Box textAlign="center" mt={5}>
                            <Box mb={1}>CSS</Box>
                            <div className="taggroupcss">
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

export default TagCss;