import React from 'react';
import { withRouter } from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import ToolBar from '@material-ui/core/ToolBar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

function NavBar(props){
    return (
        <div>
            <AppBar position="static">
                <ToolBar>

                    <Typography variant="h6" style={style}>
                        BookRecord
                    </Typography>
                    <Button color="inherit">로그인</Button>
                    <Button color="inherit">회원가입</Button>
                </ToolBar>
            </AppBar>
        </div>
    )
}

const style = {
    flexGrow: 1
}

export default withRouter(NavBar)

