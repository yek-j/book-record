import React from 'react';
import { withRouter } from 'react-router-dom';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    width: 500,
    height: 80,
    display: 'flex',
    flexWrap: 'wrap',
    textAlign: 'center',
    paddingTop: 100,
    opacity: 0.8,
    margin: "auto",
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: '20ch',
  },
}));

function RegisterPage(props) {
    const classes = useStyles();
    
    const onEmailHandler = (event) => {
        console.log("email");
    }

    const onNmaeHandler = (event) => {
        console.log("name");
    }

    const onPasswordHandler = (event) => {
        console.log("pwd");
    }

    const onConfirmPassworddHandler = (event) => {
        console.log("ConfirmPasswor");

    }

    const onSubmitHandler = (event) => {
        console.log("submit");

    }

    return (
        <div className={classes.root} > 
            <div>
                <form onSubmit={onSubmitHandler} >
                    <TextField
                    id="standard-full-width"
                    label="이메일"
                    style={{ margin: 8 }}
                    placeholder="Email"
                    fullWidth
                    margin="normal"
                    InputLabelProps={{
                        shrink: true,
                    }}
                    onChange={onEmailHandler}
                    />
                    <TextField
                    id="standard-full-width"
                    label="이름"
                    style={{ margin: 8 }}
                    placeholder="Name"
                    fullWidth
                    margin="normal"
                    InputLabelProps={{
                        shrink: true,
                    }}
                    onChange={onNmaeHandler}
                    />
                    <TextField
                    id="standard-full-width"
                    label="비밀번호"
                    style={{ margin: 8 }}
                    placeholder="Password"
                    fullWidth
                    margin="normal"
                    InputLabelProps={{
                        shrink: true,
                    }}
                    onChange={onPasswordHandler}
                    /> 
                    <TextField
                    id="standard-full-width"
                    label="비밀번호 확인"
                    style={{ margin: 8 }}
                    placeholder="Confirm Password"
                    fullWidth
                    margin="normal"
                    onChange={onConfirmPassworddHandler}
                    />
                    <Button style={{ marginTop: "10px", width: '25ch'}} variant="contained" color="primary" >Sign Up</Button>
                </form>
            </div>
        </div>
    );
}

export default withRouter(RegisterPage)