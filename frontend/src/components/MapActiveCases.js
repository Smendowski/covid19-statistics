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

const MapActiveCases = () => {
    const classes = useStyles();
    return <div >
        <Iframe className={classes.map}
            src="http://bazy.labagh.pl:3001/d-solo/wF8hSd-Gk/new-dashboard-copy?orgId=1&var-Country=Poland&var-is_admin=false&from=1580571610389&to=1612194010389&panelId=8"
        />
    </div>
};

export default MapActiveCases;