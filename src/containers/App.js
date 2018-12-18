import React, {Component} from 'react';
import {connect} from 'react-redux';

class App extends Component {
    componentWillMount() {
    }
    render() {
        return(
            <div>
                Hello
            </div>
        );
    }
}

App.propTypes = {
};

const mapDispatchToProps = (dispatch) => {
    return {
    };
};

function mapStateToProps(state) {
    return {
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
