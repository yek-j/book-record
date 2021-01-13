import React, {useState} from 'react'
import {useDispatch} from 'react-redux';
import {loginUser} from '../../../_actions/user_action';
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

function LoginPage(props) {
  const classes = useStyles();

    const dispatch = useDispatch();
    const [Email, setEmail] = useState("")
    const [Password, setPassword] = useState("")

    const onEmailHandler = (event) => {
       setEmail(event.currentTarget.value)
    }

    const onPasswordHandler = (event) => {
        setPassword(event.currentTarget.value)
    }

    const onSubmitHandler = (event) => {
       event.preventDefault();  // 페이지 refresh 방지

        let body = {
            email: Email,
            password: Password
        }

        dispatch(loginUser(body)).then(response => {
            if(response.payload.loginSuccess){
                props.history.push('/')
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
                    InputLabelProps={{
                        shrink: true,
                    }}
                    onChange={onEmailHandler}
                    />
                    <TextField
                    id="standard-full-width"
                    label="비밀번호"
                    style={{ margin: 8 }}
                    type="password"
                    placeholder="Password"
                    fullWidth
                    margin="normal"
                    InputLabelProps={{
                        shrink: true,
                    }}
                    onChange={onPasswordHandler}
                    />
                    <Button style={{ marginTop: "10px", width: '25ch'}} onClick={onSubmitHandler} variant="contained" color="primary" >LogIn</Button>
                </form>
            </div>
        </div>
    );
}

export default withRouter(LoginPage)