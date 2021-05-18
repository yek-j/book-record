import React from 'react';
import Button from '@material-ui/core/Button';
import axios from 'axios';

function Delete(props) {

    const onDelete = (e) => {
        let variable = { _id: props.bookId}
        axios.post('/api/book/delete', variable)
        .then(response => {
            if(response.data.success){

            }else {
                alert('글 삭제에 실패했습니다')
            }
        })
    }

    return (
        <span>
            <Button onClick={onDelete} variant="contained" color="secondary">삭제</Button>
        </span>
    )
}

export default Delete
