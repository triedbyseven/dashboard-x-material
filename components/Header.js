import Head from 'next/head';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import AccountCircle from '@material-ui/icons/AccountCircle';

const Header = () => {
  return (
    <div>
      <Head>
        <title>Dashboard X</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no"
          key="viewport"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Roboto:300,400,500"
        />
      </Head>
      <AppBar position="fixed" color="primary">
        <Toolbar>
          <Typography variant="h6" color="inherit">
            Dashboard
          </Typography>
          <div style={{ width: '100%', textAlign: 'right' }}>
            <IconButton onClick={() => console.log('Hello')} color="inherit">
              <AccountCircle />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;
