import React from 'react';
import { connect } from 'react-redux';
import { addToCart, removeFromCart} from '../../store/cart';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
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
  const [dense, setDense] = React.useState(false);
  const [secondary, setSecondary] = React.useState(false);
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
                    <FolderIcon />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText
                  primary={item.name.toUpperCase()}
                  secondary={secondary ? 'Secondary text' : null}
                />
                <ListItemSecondaryAction key={id}>
                  <IconButton edge="end" aria-label="delete" onClick={()=> props.removeFromCart(item.name)}>
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
  Cart: state.Cart,
});

const mapDispatchToProps = {addToCart, removeFromCart};

// const mapDispatchToProps = ({
//     showCategory: dispatch(showCategory()),
//     reset: dispatch(reset())
// })

// instead of exporting the component we export it after it's been connected the redux store
export default connect(mapStateToProps, mapDispatchToProps)(CartCounter);