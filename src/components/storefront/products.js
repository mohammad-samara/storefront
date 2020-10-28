/* eslint-disable no-unused-vars */
import React,{useEffect} from 'react';
import { connect } from 'react-redux';
import { addToCart } from '../../store/cart';
import { decreaseInventory, getProducts } from '../../store/products';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import { Box } from '@material-ui/core';
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

const Products = props => {
  const getProducts = props.getProducts;
  
    useEffect(() => {
      getProducts();
    }, [getProducts]);
    
  
    const buttonHandler = product => {
      props.addToCart(product);
      props.decreaseInventory(product);
    }

    const productList = props.products.filter(product => product.category === props.active);


  const classes = useStyles();
  return (
    
    <section className="counter">
      {/* <Box className={classes.jss5} textAlign="center">
                <Typography variant="h2" color="textPrimary">
                    {productList.length > 0 ? productList[0].category.toUpperCase() : ''}
                </Typography>
                <Typography variant="h6" color="textSecondary">
                {productList.length > 0 ? 'Category Description Goes Here' : ''}
                </Typography>
            </Box> */}
      <ul id="productLi">
        {productList.map( (product,id)=> 
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
              <Button size="small" color="primary" onClick={()=> buttonHandler(product)}>
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

const mapStateToProps = store => ({
  products: store.Products.products,
  active: store.Category.activeCategory,
});

const mapDispatchToProps = { addToCart, decreaseInventory, getProducts };

export default connect(mapStateToProps, mapDispatchToProps)(Products);