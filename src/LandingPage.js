import React from 'react';
import './LandingPage.css';
import jez_timms_8muUTAmcWU4_unsplash2 from './images/jez_timms_8muUTAmcWU4_unsplash2.jpg';
import { Box, Typography, Button } from '@material-ui/core';
import LocalLibraryRoundedIcon from '@material-ui/icons/LocalLibraryRounded';
import { createMuiTheme, makeStyles, ThemeProvider  } from '@material-ui/core/styles';
import {BrowserRouter as Router,Link} from 'react-router-dom';
import $ from 'jquery';

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
    style: {
        style: 'style'
    }
});

$(function() {
    /* $('h1').text("Study Bay");
    $('.MuiSvgIcon-root').css('color', '#00bfff'); */
    $('.MuiButton-root').click(() => {
        $('.landingPage').slideToggle(1000);
        // $('.landingPage').slideToggle(2000);
    });
});

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
                    <ThemeProvider theme={Theme}>
                        <Link to="/library">
                            <Button variant="outlined" color="secondary">To the Library</Button>
                        </Link>
                    </ThemeProvider>
                </Router>
            </div>
            <div className="right__container"></div>
        </div>
    )
}

export default LandingPage;
