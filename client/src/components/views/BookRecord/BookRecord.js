import React from 'react';
import { withRouter } from 'react-router-dom';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';

function BookRecord(props) {

  
    return (
        <div>
            <TableRow>
                <TableCell>책이름</TableCell> 
                <TableCell>저자</TableCell>  
                <TableCell>한줄 감상</TableCell>  
                <TableCell>읽은날</TableCell>     
            </TableRow>       
        </div>
    );
}

export default withRouter(BookRecord)
