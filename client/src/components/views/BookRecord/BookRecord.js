import React, {useState} from 'react'
import { withRouter } from 'react-router-dom';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import {useDispatch} from 'react-redux';
import {bookRecord} from '../../../_actions/user_action';
import { useSelector } from "react-redux";

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

function WritePage(props) {
    const user = useSelector(state => state.user.userData)
    const classes = useStyles();
    
    const dispatch = useDispatch();
    const [Bookname, setBookname] = useState("")
    const [Author, setAuthor] = useState("")
    const [Record, setRecord] = useState("")
    const [Date, setDate] = useState("")

    const onBooknameHandler = (event) => {
        setBookname(event.currentTarget.value)
    }

    const onAuthorHandler = (event) => {
        setAuthor(event.currentTarget.value)
    }

    const onRecordHandler = (event) => {
        setRecord(event.currentTarget.value)
    }

    const onDateHandler = (event) => {
        setDate(event.currentTarget.value)
    }

    const onSubmitHandler = (event) => {
        event.preventDefault();  // 페이지 refresh 방지
       // console.log(user.name);
        let body = {
            bookname: Bookname,
            author: Author,
            record: Record,
            date: Date,
            uid: user.name
        }

        dispatch(bookRecord(body)).then(response => {
            if(response.payload.recordSuccess){
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
                    label="책 이름"
                    style={{ margin: 8 }}
                    placeholder="Bookname"
                    fullWidth
                    margin="normal"
                    variant="outlined"
                    value={Bookname}
                    InputLabelProps={{
                        shrink: true,
                    }}
                    onChange={onBooknameHandler}
                    />
                    <TextField
                    id="standard-full-width"
                    label="작가"
                    style={{ margin: 8 }}
                    placeholder="Author"
                    fullWidth
                    margin="normal"
                    variant="outlined"
                    value={Author}
                    InputLabelProps={{
                        shrink: true,
                    }}
                    onChange={onAuthorHandler}
                    />
                    <TextField
                    id="standard-full-width"
                    label="한줄 감상"
                    style={{ margin: 8 }}
                    placeholder="Record"
                    fullWidth
                    margin="normal"
                    variant="outlined"
                    value={Record}
                    InputLabelProps={{
                        shrink: true,
                    }}
                    onChange={onRecordHandler}
                    /> 
                    <TextField
                    id="standard-full-width"
                    label="날짜"
                    type="date"
                    style={{ margin: 8 }}
                    placeholder="Date"
                    fullWidth
                    margin="normal"
                    variant="outlined"
                    value={Date}
                    InputLabelProps={{
                        shrink: true,
                    }}
                    onChange={onDateHandler}
                    />
                    <Button style={{ marginTop: "10px", width: '25ch'}} onClick={onSubmitHandler} variant="contained" color="primary" >Save</Button>
                </form>
            </div>
        </div>
    )
}

export default withRouter(WritePage)