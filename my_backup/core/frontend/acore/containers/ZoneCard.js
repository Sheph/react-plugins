import React, {Component} from 'react';
import PropTypes from 'prop-types';
import withStyles from '@material-ui/core/styles/withStyles';
import zoneCardStyle from '../../assets/styles/zoneCardStyle.js';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardHeader from '@material-ui/core/CardHeader';
import Checkbox from '@material-ui/core/Checkbox';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

class ZoneCard extends Component {
    render() {
        const { classes, zoneText, zoneImage, ...rest } = this.props;
        return (
            <Card className={classes.card}>
                <CardHeader className={classes.cardHeader} action={
                    <Checkbox className={classes.checkbox} color="primary" {...rest} />
                } />
                <CardMedia className={classes.media} image={zoneImage} />
                <CardContent>
                    <Typography component="p" variant="button" align="center">{zoneText}</Typography>
                </CardContent>
            </Card>
        );
    }
}

ZoneCard.propTypes = {
    classes: PropTypes.object.isRequired,
    zoneText : PropTypes.string.isRequired,
    zoneImage : PropTypes.string.isRequired,
};

export default withStyles(zoneCardStyle)(ZoneCard);
