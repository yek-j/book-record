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
import Update from './Sections/Update';           
import axios from 'axios';

function LandingPage() {
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

    }, [])

    const bookRecords = readBook.map((record, index) => {
        return <TableRow>
            <TableCell>{record.bookname}</TableCell>
            <TableCell>{record.author}</TableCell>
            <TableCell>{record.record}</TableCell>
            <TableCell>{record.date}</TableCell>
            <TableCell></TableCell>
            <TableCell>
                { 
                    <div>
                        <Delete /> &nbsp;<Update />
                    </div>
                }
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

export default LandingPage
