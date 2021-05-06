import React, {useState, useEffect} from 'react';
import {useSelector} from 'react-redux'
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
           
import axios from 'axios';

function MainPage(){

    
   const user = useSelector(state => state.user)
    const [readBook, setreadBook] = useState([]);

    useEffect(() => {
        axios.get('/api/book/read')
        .then(response => {
            if(response.data.success){
                setreadBook(response.data.record);
            }else {
                alert('글을 가져오는데 실패')
            }
        })

        const data = {
            writer: user.userData._id
        } 

        axios.post('/api/book/delete')
        .then(response => {
            if(response.data.success){

            }else {
                alert('글 삭제에 실패했습니다')
            }
        })

    }, [readBook])

    const bookRecords = readBook.map((record, index) => {
        return <TableRow>
            <TableCell>{record.bookname}</TableCell>
            <TableCell>{record.author}</TableCell>
            <TableCell>{record.record}</TableCell>
            <TableCell>{record.date}</TableCell>
            
            <TableCell>
                <Button variant="contained" color="secondary">삭제</Button> &nbsp;
                <Button variant="outlined" color="secondary">수정</Button>
            </TableCell>
        </TableRow>
    }) 

       return (
            <div>
                <Box clone color="primary.main">
                    <Typography variant="inherit">독서기록장</Typography>
                    
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
                            <TableCell></TableCell>   
                        </TableRow> 
                    </TableHead> 
                    <TableBody>
                        
                        {bookRecords}
                        
                    </TableBody>
                </Table>      
            </div>
        );
}


export default MainPage
