import React from 'react';
import { withRouter } from 'react-router-dom';
import {makeStyles} from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';

function MainPage(props) {

  
    return (
        <div>
            <Grid container spacing = {3}>
                <Grid item xs={3}>
                <Typography variant="h5" color="inherit" gutterBottom  align="left">
                BookRecord
                </Typography>
                
            </Grid>
                <Grid item xs={6}>
                    
                </Grid>
                <Grid item xs={3}>
                <Typography align="right">
                        Login
                    </Typography>
                </Grid>
                
            </Grid>    
        </div>
    );
}

export default withRouter(MainPage)
