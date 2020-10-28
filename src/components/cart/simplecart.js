import React ,{useEffect} from 'react';
import { connect } from 'react-redux';
import { removeFromCart } from '../../store/cart';
import { increaseInventory } from '../../store/products';
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

const SimpleCart = props => {
  const classes = useStyles();
  const [dense] = React.useState(false);
  const [secondary] = React.useState(false);

  const cart = props.cart;

  const removeHandler = item => {
    props.removeFromCart(item.name);
    props.increaseInventory(item);
};
  return (
    <section className="counter">
      <Grid item xs={12} md={6} id="cartList">
        {/* <Typography variant="h6" className={classes.title}>
            Avatar with text and icon
        </Typography> */}
        <div className={classes.demo}>
          <List dense={dense}>
            {cart.map((item,id)=> 
              <ListItem key={id}>
                <ListItemAvatar>
                  <Avatar>
                    <FolderIcon />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText
                  primary={item.name}

                  secondary={secondary ? 'Secondary text' : null}
                />
                <ListItemSecondaryAction key={id}>
                  <IconButton edge="end" aria-label="delete" onClick={()=> removeHandler(item)}>
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

const mapStateToProps = store => {
  return {
      cart: store.Cart.items,
  }
}

const mapDispatchToProps = { removeFromCart, increaseInventory };

export default connect(mapStateToProps, mapDispatchToProps)(SimpleCart);