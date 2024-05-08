import { Link } from "react-router-dom";
import { Typography } from "@mui/material";
// import * as MUi from '@material-ui/core';

function  Logo(){
return (
  <div style={{
    display:'flex',
    marginRight:'auto',
    alignItems:'center',
    gap:'8px',
  }}>
    <Link to={'/'}>
      <img
      src="https://tse2.mm.bing.net/th?id=OIP.1FR5dWqdKCuYy7mJxUZUcQHaHa&pid=Api&P=0&h=180"
      alt="logo"
      width={'30px'}
      height={'30px'}
      className="image-inverted"
      />
   
    
    </Link>
    <Typography sx={{display :{md:'block', sm:'none', xs:'none'}, mr:'auto', fontWeight:'800',textShadow:'2px 2px 20px #000' ,}}>
      <span style={{fontSize:'20px'}}>Chat</span>--GPt
      </Typography>

  </div>
)
}
export default Logo;