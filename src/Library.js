import { Button } from '@material-ui/core';
import React from 'react';

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
