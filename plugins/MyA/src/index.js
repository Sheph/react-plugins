import React from 'react';
import {render} from 'react-dom';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

var pluginRegistry = window.acorePluginRegistry;

pluginRegistry.register('mya', 'Test');

render(
    <div>
    <Paper>
        <Typography variant="headline">Register new user</Typography>
    </Paper>
    </div>
    , document.getElementById('plugin'));
