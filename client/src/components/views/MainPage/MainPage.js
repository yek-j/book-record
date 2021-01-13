import React, {useEffect} from 'react';
import { withRouter } from 'react-router-dom';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
//import BookRecord from '../BookRecord/BookRecord';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';

function MainPage(props) {
 
    return (
        <div>
            <Box clone color="primary.main">
              <Typography variant="inherit">독서기록</Typography>
            </Box>
            <Table>
               <TableHead>
                    <TableRow>
                        <TableCell>이름</TableCell> 
                        <TableCell>저자</TableCell>  
                        <TableCell>한줄 감상</TableCell>  
                        <TableCell>날짜</TableCell>     
                    </TableRow> 
                </TableHead> 
                <TableBody>
                    
                </TableBody>
            </Table>      
        </div>
    );
}


export default withRouter(MainPage)
