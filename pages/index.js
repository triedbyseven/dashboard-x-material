import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import CircularProgress from '@material-ui/core/CircularProgress';
import { withStyles } from '@material-ui/core/styles';
import Graph from '../components/Graph';
import TableSet from '../components/TableSet';
import Header from '../components/Header';

const styles = theme => ({
  root: {
    textAlign: 'left',
    padding: theme.spacing.unit * 10
  },
  progressContainer: {
    width: '100%',
    textAlign: 'center'
  },
  progress: {
    margin: theme.spacing.unit * 19.7
  }
});

class Index extends React.Component {
  state = {
    isReady: false
  };

  componentDidMount() {
    setTimeout(() => {
      this.setState({ isReady: true });
    }, 2000);
  }

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <Header />

        {/* Graph */}
        <Typography
          variant="h4"
          color="textPrimary"
          style={{ marginBottom: 20 }}
        >
          Graph
        </Typography>
        {!this.state.isReady ? (
          <div className={classes.progressContainer}>
            <CircularProgress className={classes.progress} color="secondary" />
          </div>
        ) : (
          <Paper elevation={1} style={{ paddingTop: 20 }}>
            <Graph />
          </Paper>
        )}

        <Button
          style={{ marginTop: 20 }}
          variant="contained"
          color="primary"
          onClick={() => console.log('Clicked, Fuck Yeah!')}
        >
          Button
        </Button>

        <Typography variant="h4" color="textPrimary" style={{ marginTop: 20 }}>
          Table
        </Typography>
        <TableSet />
      </div>
    );
  }
}

export default withStyles(styles)(Index);
