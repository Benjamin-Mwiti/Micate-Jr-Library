import React from 'react';
import './LandingPage.css';
import jez_timms_8muUTAmcWU4_unsplash2 from './images/jez_timms_8muUTAmcWU4_unsplash2.jpg';
import {Box, Typography} from '@material-ui/core';
import LocalLibraryRoundedIcon from '@material-ui/icons/LocalLibraryRounded';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import {BrowserRouter as Router, Route} from 'react-router-dom';

function LandingPage() {
    return (
        <div className="landingPage">
            <div className="left__container"></div>
            <div className="central__container">
                <Box className="landingPage__title">
                    <LocalLibraryRoundedIcon className="LocalLibraryRoundedIcon" style={{fontSize: 140}} />
                    <Typography className="landingPage__intro">
                        <h1>Micate Jr Library</h1>
                        <span>Add and edit books, write notes</span>
                    </Typography>
                </Box>
                <img src={jez_timms_8muUTAmcWU4_unsplash2} alt="Turned on desk lamp beside a pile of books" className="landingPage__image"/>
                <Router>
                    <Route path="">
                        <ExpandMoreIcon className="landingPage__arrow" style={{fontSize: 70}} />
                    </Route>
                </Router>
            </div>
            <div className="right__container"></div>
        </div>
    )
}

export default LandingPage;
