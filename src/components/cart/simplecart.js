import React ,{useEffect} from 'react';
import { connect } from 'react-redux';
import {getCartData,deleteFromCart} from '../../store/cart';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Grid from '@material-ui/core/Grid';
//import Typography from '@material-ui/core/Typography';
import FolderIcon from '@material-ui/icons/Folder';
import DeleteIcon from '@material-ui/icons/Delete';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    maxWidth: 752,
  },
  demo: {
    backgroundColor: theme.palette.background.paper,
  },
  title: {
    margin: theme.spacing(4, 0, 2),
  },
}));

const CartCounter = props => {
  const classes = useStyles();
  const [dense] = React.useState(false);
  const [secondary] = React.useState(false);

  const fetchData = (e) => {
    e && e.preventDefault(); // if I have a form
    props.getCartData();
  };
  useEffect(()=> {
    fetchData();
  }, []);
  return (
    <section className="counter">
      <Grid item xs={12} md={6} id="cartList">
        {/* <Typography variant="h6" className={classes.title}>
            Avatar with text and icon
        </Typography> */}
        <div className={classes.demo}>
          <List dense={dense}>
            {props.Cart.cartProducts.map((item,id)=> 
              <ListItem key={id}>
                <ListItemAvatar>
                  <Avatar>
                  {console.log('{console.log(item.name)}{console.log(item.name)}',item.name)}
                    <FolderIcon />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText
                  primary={item.name}

                  secondary={secondary ? 'Secondary text' : null}
                />
                <ListItemSecondaryAction key={id}>
                  <IconButton edge="end" aria-label="delete" onClick={()=> props.deleteFromCart(item._id,props.products,item)}>
                    <DeleteIcon />

                  </IconButton>
                </ListItemSecondaryAction>
              </ListItem>,
            )}
          </List>
        </div>
      </Grid>
    </section>
  );

};

const mapStateToProps = state => ({
  products: state.Products.products,
  Cart: state.Cart,
});

const mapDispatchToProps = {getCartData,deleteFromCart};

// const mapDispatchToProps = ({
//     showCategory: dispatch(showCategory()),
//     reset: dispatch(reset())
// })

// instead of exporting the component we export it after it's been connected the redux store
export default connect(mapStateToProps, mapDispatchToProps)(CartCounter);