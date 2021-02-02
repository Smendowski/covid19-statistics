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

const MapRecoveredCases = () => {
    const classes = useStyles();
    return <div >
        <Iframe className={classes.map}
            src="https://bazy.labagh.pl:3001/d-solo/wF8hSd-Gk/new-dashboard-copy?orgId=1&var-Country=Poland&var-is_admin=false&from=1580571758022&to=1612194158022&panelId=12"
        />
    </div>
};

export default MapRecoveredCases;