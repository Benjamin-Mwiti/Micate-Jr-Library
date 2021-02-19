import React from 'react';
import './LandingPage.css';
import Library from './Library'
import jez_timms_8muUTAmcWU4_unsplash2 from './images/jez_timms_8muUTAmcWU4_unsplash2.jpg';
import { Box, Typography, Button } from '@material-ui/core';
import LocalLibraryRoundedIcon from '@material-ui/icons/LocalLibraryRounded';
import { createMuiTheme, makeStyles, ThemeProvider  } from '@material-ui/core/styles';
import {BrowserRouter as Router, Route, NavLink, Link} from 'react-router-dom';
// import jQuery from 'file:///D:/Benjamin/Web%20Development%20Codes/Git/Websites/micate-jr-library/src/jquery-3.5.1.min.js';

const Theme = createMuiTheme({
    palette: {
        primary: {
            main: '#000'
        },
        secondary: {
            main: '#fff'
        },
        deepSkyBlue: {
            main: '#00bfff'
        }
    }
});

const useStyles = makeStyles({
    links: {
        textDecorationColor: 'none'
    }
});

const Transition = () => {};

function LandingPage() {
    
    const classStyles = useStyles();

    return (
        <div className="landingPage">
            <div className="left__container"></div>
            <div className="central__container">
                <Box className="landingPage__title">
                    <LocalLibraryRoundedIcon className="LocalLibraryRoundedIcon" style={{fontSize: 140}} />
                    <Typography className="landingPage__intro">
                        <h1>Study Room</h1>
                        <span>Simple library to study and write notes on the Web</span>
                    </Typography>
                </Box>
                <img src={jez_timms_8muUTAmcWU4_unsplash2} alt="Turned on desk lamp beside a pile of books" className="landingPage__image"/>
                <Router>
                    {/* <NavLink to="/Library" onClick={() => {preventDefault()}}>
                        <ThemeProvider theme={Theme}> */}
                        <Route path="/Library" component={Library}>
                            <Link to="/Library">
                                <Button className={classStyles.links} variant="outlined" color="secondary">To the Library</Button>
                            </Link>
                        </Route>
                        {/* </ThemeProvider>
                    </NavLink> */}
                    <Route path="/Library" component={Library}>
                    </Route>
                </Router>
            </div>
            <div className="right__container"></div>
        </div>
    )
}

export default LandingPage;
