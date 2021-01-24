import React from 'react';
import { withRouter } from 'react-router-dom';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
//import BookRecord from '../BookRecord/BookRecord';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
 //  console.log(response.data.record[0].bookname);
       //   console.log(this.state.record.map(item=> item.bookname))
           
import axios from 'axios';

class MainPage extends React.Component{
    state = {ItemList: []};

    showItem = async () => {
        axios.get('/api/book/read').then(({data}) => {
           this.setState({ItemList: data.record});
     })
     .catch(e=>{ 
        console.log(e);
     })
    };

    componentDidMount() {
        this.showItem(); 
    }
   
   render(){ 

       return (
            <div>
                <Box clone color="primary.main">
                    <Typography variant="inherit">독서기록장</Typography>
                    
                 </Box>
                 <Box clone color="primary.main">
                   <Button  href="/write" color="secondary">글쓰기</Button>      
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
                        
                    {
                        this.state.ItemList.map(item =>
                            <TableRow>
                                <TableCell>{item.bookname}</TableCell> 
                                <TableCell>{item.author}</TableCell>
                                <TableCell>{item.record}</TableCell>
                                <TableCell>{item.date}</TableCell>
                          </TableRow> 
                        )
                    }
                        
                    </TableBody>
                </Table>      
            </div>
        );
    }   
}


export default withRouter(MainPage)
