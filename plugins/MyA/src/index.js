import React from 'react';
import {render} from 'react-dom';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import {pluginRegistry, MyClass} from './acore';

pluginRegistry.register('mya', new MyClass());

render(
    <div>
    <Paper>
        <Typography variant="headline">Register new user</Typography>
    </Paper>
    </div>
    , document.getElementById('plugin'));
