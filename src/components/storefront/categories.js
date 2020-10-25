import React from 'react';
import { connect } from 'react-redux';
import { showCategory, reset } from '../../store/categories';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  '@global': {
    ul: {
      margin: 0,
      padding: 0,
      listStyle: 'none',
    },
  },
  appBar: {
    borderBottom: `1px solid ${theme.palette.divider}`,
  },
  toolbarTitle: {
    flex: 1,
  },
  link: {
    margin: theme.spacing(1, 1.5),
  },
  heroContent: {
    padding: theme.spacing(8, 0, 6),
  },
  cardHeader: {
    backgroundColor: theme.palette.grey[200],
  },
  fullHeight: {
    height: '100%',
  },
  footer: {
    borderTop: `1px solid ${theme.palette.divider}`,
    marginTop: theme.spacing(8),
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(3),
  },
}));
const VotesCounter = props => {
  const classes = useStyles();
  return (
    <section className="counter">
      <p id='categoriesTitle'>Browse our Categories</p>
      <ul id='categories'>
        {props.Category.categories.map( categories=> 
          <li onClick={()=> props.showCategory(categories.name)} key={categories.name}> |{categories.name.toUpperCase()}|</li>,
        )}
      </ul>
      {/*  what happens when maxWidth is set to xs, xl? */}
      <Container maxWidth="sm" component="main" className={classes.heroContent}>
        <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
          {props.Category.activeCategory.toUpperCase()}
        </Typography>
        <Typography variant="h5" align="center" color="textSecondary" component="p">
          Here's some really cool things you can do
        </Typography>
      </Container>
    </section>
  );

};

const mapStateToProps = state => ({
  Category: state.Category,
});

const mapDispatchToProps = {showCategory, reset};

// const mapDispatchToProps = ({
//     showCategory: dispatch(showCategory()),
//     reset: dispatch(reset())
// })

// instead of exporting the component we export it after it's been connected the redux store
export default connect(mapStateToProps, mapDispatchToProps)(VotesCounter);