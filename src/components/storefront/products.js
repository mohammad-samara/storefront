import React from 'react';
import { connect } from 'react-redux';
import { showCategory, changeCount } from '../../store/products';
import { addToCart} from '../../store/cart';
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
  // To use more than one function in one onClick
  function onClick(a,b,c){
    props.changeCount(a,b);
    props.addToCart(c);

  }
  const classes = useStyles();
  return (
    <section className="counter">
      <ul id="productLi">
        {props.productsTo.map( (product,id)=> 
          <Card className={classes.root} key={id}>
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
              price:{ product.price} &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp; inStock: {product.inStock}
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button size="small" color="primary" onClick={()=> onClick(product.name,props.Category.activeCategory,product)}>
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
  productsTo: state.Products.productsTo,
  Category: state.Category,
});

const mapDispatchToProps = {showCategory, changeCount,addToCart};

// const mapDispatchToProps = ({
//     showCategory: dispatch(showCategory()),
//     reset: dispatch(reset())
// })

// instead of exporting the component we export it after it's been connected the redux store
export default connect(mapStateToProps, mapDispatchToProps)(VotesCounter);