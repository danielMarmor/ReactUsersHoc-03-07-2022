import React from 'react';
import { Card } from '@mui/material';
// import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
// import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import { WithRandomBackground } from './withRandomBackground';

class User extends React.Component{
    state = {
        user : this.props.user
    } 
    componentDidMount(){
    } 
    render(){
        const userCard = this.state.user;
        return(
            <Card sx={{minWidth:275, minHeight:325}}>
                <CardContent>
                    <Typography sx={{margin:1}} variant="h5" component="div">
                         {`${userCard.name}`}
                    </Typography> 
                    <Typography sx={{margin:1}} variant='body1'>
                         {`(${userCard.username})`}
                    </Typography>                
                    <Link href={userCard.email} underline="hover">
                         {userCard.email}
                    </Link>                   
                    <Typography sx={{margin:1}} variant='body2'>
                         {`${userCard.address.street} ${userCard.address.suite}, ${userCard.address.city}`}
                    </Typography>
                    <Typography sx={{ mb: 1.3 , margin:1}}>
                         {`${userCard.company.name}`}
                    </Typography>
                    <Typography sx={{ mb: 0.9, margin:1 }} color="text.secondary">
                         {`${userCard.company.bs}`}
                    </Typography>
                </CardContent>
            </Card>
        )
    }

}
export default WithRandomBackground(User);
