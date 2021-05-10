import React, {useEffect} from 'react';
import {useSelector} from 'react-redux';
import Button from '@material-ui/core/Button';
import axios from 'axios';

function Delete() {

    const user = useSelector(state => state.user)

    useEffect(() => {
        
        const data = {
      //      writer: user.userData._id
        } 

        axios.post('/api/book/delete', data)
        .then(response => {
            if(response.data.success){

            }else {
                alert('글 삭제에 실패했습니다')
            }
        })
    }, [])

    const onDelete = (e) => {
        
    }

    return (
        <span>
            <Button onClick={onDelete} variant="contained" color="secondary">삭제</Button>
        </span>
    )
}

export default Delete
