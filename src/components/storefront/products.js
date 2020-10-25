import React from 'react';
import { connect } from 'react-redux';
import { showCategory, reset } from '../../store/categories';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
});

const VotesCounter = props => {
  const classes = useStyles();
  return (
    <section className="counter">
      <ul id="productLi">
        {props.productsTo.map( product=> 
        //   <li  key={product.name}> |'name': { product.name} price:{ product.price} inStock: {product.inStock}|</li>,
          <Card className={classes.root}>
            <CardActionArea>
              <CardMedia
                component="img"
                alt="Contemplative Reptile"
                height="220"
                image={ product.url}
                title={ product.name}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  { product.name}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
              price:{ product.price} inStock: {product.inStock}
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button size="small" color="primary">
          ADD TO CART
              </Button>
              <Button size="small" color="primary">
          VIEW DETAILS
              </Button>
            </CardActions>
          </Card>,

        )}
      </ul>
    </section>
  );

};

const mapStateToProps = state => ({
  productsTo: state.Category.productsTo,
});

const mapDispatchToProps = {showCategory, reset};

// const mapDispatchToProps = ({
//     showCategory: dispatch(showCategory()),
//     reset: dispatch(reset())
// })

// instead of exporting the component we export it after it's been connected the redux store
export default connect(mapStateToProps, mapDispatchToProps)(VotesCounter);