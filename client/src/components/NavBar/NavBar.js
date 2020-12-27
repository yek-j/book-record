import React from 'react';
import { withRouter } from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import ToolBar from '@material-ui/core/ToolBar';
import Button from '@material-ui/core/Button';
import { Box } from '@material-ui/core';

function NavBar(props){
    return (
        <div>
            <AppBar position="static">
                <ToolBar>
                    <Button color="inherit" href="/">BookRecord</Button>
                    <Box style={style}></Box>
                    <Button color="inherit" href="/login">로그인</Button>
                    <Button color="inherit" href="/register">회원가입</Button>
                </ToolBar>
            </AppBar>
        </div>
    )
}

const style = {
    flexGrow: 1
}

export default withRouter(NavBar)

