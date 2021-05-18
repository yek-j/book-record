import React, {useState, useEffect} from 'react';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Delete from './Sections/Delete';         
import axios from 'axios';
import { withRouter } from 'react-router-dom';

function MyPage(props) {
    const [myreadBook, setmyreadBook] = useState([]);

    const variable = { writer: localStorage.getItem('userId')}

    useEffect(() => {

       // console.log(user.userData)
        axios.post('/api/book/myRead', variable)
        .then(response => {
            if(response.data.success){
                setmyreadBook(response.data.myread);
            }
        })

    }, [myreadBook])



    const bookRecords = myreadBook.map((record, index) => {
        return <TableRow>
            <TableCell>{record.bookname}</TableCell>
            <TableCell>{record.author}</TableCell>
            <TableCell>{record.record}</TableCell>
            <TableCell>{record.date}</TableCell>
            <TableCell>
                { 
                    <div>
                        <Delete bookId={record._id}/> &nbsp;
                        <Button variant="outlined" color="secondary" onClick={()=>{props.history.push({
                            pathname: "/update",
                            state: {bookId: record._id}
                        })}}>수정</Button>
                    </div>
                }
            </TableCell>
        </TableRow>
    }) 

       return (
            <div>
                <Box clone color="primary.main">
                    <Typography variant="inherit">MY 독서기록장</Typography>
                    
                 </Box>
                 <Box clone color="primary.main">
                   <Button  href="/write"  color="secondary">글쓰기</Button>      
                 </Box>
                 <hr />
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>이름</TableCell> 
                            <TableCell>저자</TableCell>  
                            <TableCell>한줄 감상</TableCell>  
                            <TableCell>날짜</TableCell>    
                            <TableCell>삭제 및 수정</TableCell>   
                        </TableRow> 
                    </TableHead> 
                    <TableBody>
                        
                        {bookRecords}
                        
                    </TableBody>
                </Table>      
            </div>
        );
}

export default withRouter(MyPage)
