import React, { useState } from 'react';
import Iframe from 'react-iframe';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({

}));

const Graphs = () => {
    const classes = useStyles();
    const [ state, setState ]  = useState("Poland");

    return <div>
        <Iframe url={`http://bazy.labagh.pl:3001/d-solo/wF8hSd-Gk/new-dashboard-copy?orgId=1&var-Country=${state}&var-is_admin=false&from=1580571504166&to=1612193904166&panelId=26`}/>
        <Iframe url="http://bazy.labagh.pl:3001/d-solo/wF8hSd-Gk/new-dashboard-copy?orgId=1&var-Country=Poland&var-is_admin=false&from=1580571669436&to=1612194069436&panelId=24"/>
        <Iframe url="http://bazy.labagh.pl:3001/d-solo/wF8hSd-Gk/new-dashboard-copy?orgId=1&var-Country=Poland&var-is_admin=false&from=1580571690838&to=1612194090838&panelId=22"/>
        <Iframe url="http://bazy.labagh.pl:3001/d-solo/wF8hSd-Gk/new-dashboard-copy?orgId=1&var-Country=Poland&var-is_admin=false&from=1580571878169&to=1612194278169&panelId=14"/>
        <Iframe url="http://bazy.labagh.pl:3001/d-solo/wF8hSd-Gk/new-dashboard-copy?orgId=1&var-Country=Poland&var-is_admin=false&from=1580571898537&to=1612194298537&panelId=4"/>
    </div>
};

export default Graphs;