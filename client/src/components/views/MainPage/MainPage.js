import React from 'react';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';

function MainPage(){

    return (
        <React.Fragment>
            <Container maxWidth="sm" disableGutters="true" style={{marginTop:'30vh'}}>
                <Typography variant="h5" component="div" style={{height:'80vh'}} alignCenter >
                 
                    <div>MyBookPage에서 당신의 독서량을 기록하세요 :  
                        <a href="/mybook">myBookPage</a>
                    </div>
                    
                </Typography>
            </Container >
        </React.Fragment>
    )
}


export default MainPage
