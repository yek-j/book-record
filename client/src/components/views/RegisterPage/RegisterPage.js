import React, {useState} from 'react'
import { withRouter } from 'react-router-dom';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import {useDispatch} from 'react-redux';
import {registerUser} from '../../../_actions/user_action';

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
    
    const dispatch = useDispatch();
    const [Email, setEmail] = useState("")
    const [Password, setPassword] = useState("")
    const [Name, setName] = useState("")
    const [ConfirmPassword, setConfirmPassword] = useState("")

    const onEmailHandler = (event) => {
        setEmail(event.currentTarget.value)
    }

    const onPasswordHandler = (event) => {
        setPassword(event.currentTarget.value)
    }

    const onNameHandler = (event) => {
        setName(event.currentTarget.value)
    }

    const onConfirmPassworddHandler = (event) => {
        setConfirmPassword(event.currentTarget.value)
    }

    

    const onSubmitHandler = (event) => {
        event.preventDefault();  // 페이지 refresh 방지

        if(Password !== ConfirmPassword){
            return alert('비밀번호와 비밀번호 확인이 다릅니다!');
        }

        let body = {
            email: Email,
            name: Name,
            password: Password
        }

        dispatch(registerUser(body)).then(response => {
            if(response.payload.success){
                props.history.push('/login')
            }else{
                alert('Error');
            }
        });

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
                    value={Email}
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
                    value={Name}
                    InputLabelProps={{
                        shrink: true,
                    }}
                    onChange={onNameHandler}
                    />
                    <TextField
                    id="standard-full-width"
                    label="비밀번호"
                    style={{ margin: 8 }}
                    type="password"
                    placeholder="Password"
                    fullWidth
                    margin="normal"
                    value={Password}
                    InputLabelProps={{
                        shrink: true,
                    }}
                    onChange={onPasswordHandler}
                    /> 
                    <TextField
                    id="standard-full-width"
                    label="비밀번호 확인"
                    style={{ margin: 8 }}
                    type="password"
                    placeholder="Confirm Password"
                    fullWidth
                    margin="normal"
                    value={ConfirmPassword}
                    onChange={onConfirmPassworddHandler}
                    />
                    <Button style={{ marginTop: "10px", width: '25ch'}} onClick={onSubmitHandler} variant="contained" color="primary" >Sign Up</Button>
                </form>
            </div>
        </div>
    )
}

export default withRouter(RegisterPage)