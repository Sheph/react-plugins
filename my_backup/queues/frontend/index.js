import React, {Component} from 'react';
import {pluginRegistry} from 'acore';

class MyPlugin extends Component {
    render() {
        return (
            <div>Hello</div>
        );
    }
}

pluginRegistry.register('queues', MyPlugin);
