import React ,{useState,useEffect} from'react';
import { makeStyles} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    color: 'white',
  },
  appBarTransparent:{
     backgroundColor: 'green'
  },
  appBarSolid:{
    backgroundColor: 'yellow'
  }
}));

export default function ButtonAppBar() {
 const classes = useStyles()
 const [navbarBackground, setNavbarBackground] = useState('appBarTransparent')

 const navRef = React.useRef()
 navRef.current = navbarBackground 

 useEffect(() => {
  const handleScroll =()=> {
    const show = window.scrollY >310 
    if(show){
      setNavbarBackground('appBarSolid')
    } else{
      setNavbarBackground('appBarTransparent')
    }
  }
  document.addEventListener('scroll',handleScroll)
   return () => {
     document.removeEventListener('scroll',handleScroll)
   }
 }, [])


  return (
    <div className ={classes.root}>
      <AppBar position="fixed" className={classes[navRef.current]}>
        <Toolbar>
         <IconButton className={classes.menuButton}>
           <MenuIcon />
    <Typography variant ="h6" className={classes.title}>
      Hey
    </Typography>
           
         </IconButton>
        </Toolbar>
      </AppBar>
    </div>
  );
}