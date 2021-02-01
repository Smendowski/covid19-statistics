import React from 'react';
import Iframe from 'react-iframe';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    map: {
        width: '99vw',
        height: '90vh',
        position: 'absolute',
        marginLeft: 'auto',
        marginRight: 'auto',
        border: "0",
    }
}));

const Graphs = () => {
    const classes = useStyles();
    return <div>
        <Iframe className={ classes.map } 
            
        />
    </div>
};

export default Graphs;