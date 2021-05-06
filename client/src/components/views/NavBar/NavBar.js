import React from 'react';
import axios from 'axios';
import AppBar from '@material-ui/core/AppBar';
import ToolBar from '@material-ui/core/ToolBar';
import Button from '@material-ui/core/Button';
import { Box } from '@material-ui/core';
import { useSelector } from "react-redux";

function NavBar(props){

    const onClickHandler = () => {
        axios.get('/api/users/logout')
        .then(response => {
            if(response.data.success){
                props.history.push("/login");
            }else {
                alert("로그아웃 실패!");
            }
        })
    }

    const user = useSelector(state => state.user)

    const loginButton = [<Button color="inherit" href="/login">로그인</Button>, <Button color="inherit" href="/register">회원가입</Button>]
    const logoutButton = [<Button color="inherit" onClick={onClickHandler}>로그아웃</Button>]

    if(user.userData && !user.userData.isAuth){
        return (
            <div>
                <AppBar position="static">
                    <ToolBar>
                        <Button color="inherit" href="/">BookRecord</Button>
                        <Box style={style}></Box>
                        {loginButton}
                        
                    </ToolBar>
                </AppBar>
            </div>
        )
    }else {
        return (
            <div>
                <AppBar position="static">
                    <ToolBar>
                        <Button color="inherit" href="/">BookRecord</Button>
                        <Box style={style}></Box>
                        {logoutButton}
                        
                    </ToolBar>
                </AppBar>
            </div>
        )
    }
    
}

const style = {
    flexGrow: 1
}

export default NavBar

