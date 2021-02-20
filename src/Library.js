import React from 'react';
import { Button } from '@material-ui/core';
import LandingPage from './LandingPage';
import $ from 'jquery';

$(function() {
    $('.MuiButton-root').click(() => {
        $('.library').slideUp(1000);
    });
});

function Library() {
    return (
        <div className="library">
            <div className="appBar">
                <div className="navigation">
                    <Button>Home</Button>
                    <Button>Notes</Button>
                    <Button>About</Button>
                </div>
            </div>
            <h1>Content</h1>
        </div>
    )
}

export default Library;
