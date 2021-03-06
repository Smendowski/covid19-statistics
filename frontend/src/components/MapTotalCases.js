import React from 'react';
import Iframe from 'react-iframe';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    map: {
        width: '99vw',
        height: '70vh',
        position: 'absolute',
        marginLeft: 'auto',
        marginRight: 'auto',
        border: "0",
    }
}));

const MapTotalCases = () => {
    const classes = useStyles();
    return <div>
        <Iframe className={ classes.map } 
            url="https://bazy.labagh.pl:3001/d-solo/wF8hSd-Gk/new-dashboard-copy?orgId=1&from=1609769590748&to=1609791190749&panelId=2"
        />
    </div>
};

export default MapTotalCases;