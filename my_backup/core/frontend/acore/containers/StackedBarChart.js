import React, {Component} from 'react';
import PropTypes from 'prop-types';
import withStyles from '@material-ui/core/styles/withStyles';
import stackedBarChartStyle from '../../assets/styles/stackedBarChartStyle.js';
import {ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip} from 'recharts';
import Typography from '@material-ui/core/Typography';

class StackedBarChart extends Component {
    render() {
        const { classes, data, title, labels, colors } = this.props;
        let chartData = [];
        chartData.length = data.length;
        for (let i = 0; i < data.length; ++i) {
            let entry = {};
            entry['name'] = data[i][0];
            for (let j = 0; j < labels.length; ++j) {
                entry[labels[j]] = data[i][1 + j];
            }
            chartData[i] = entry;
        }

        return (
            <div className={classes.wrapper}>
                <Typography>{title}</Typography>
                <ResponsiveContainer aspect={20.0/3.0} width="99%">
                    <BarChart data={chartData}>
                        <CartesianGrid horizontal vertical={false}/>
                        <XAxis dataKey="name" tickLine={false} />
                        <YAxis tickLine={false} />
                        <Tooltip/>
                        {labels.map((label, i) => {
                            return (
                                <Bar dataKey={label} key={label} stackId="a" fill={colors[i]} />
                            );
                        })}
                    </BarChart>
                </ResponsiveContainer>
            </div>
        );
    }
}

StackedBarChart.propTypes = {
    classes: PropTypes.object.isRequired,
    data: PropTypes.array.isRequired,
    title: PropTypes.string.isRequired,
    labels: PropTypes.array.isRequired,
    colors: PropTypes.array.isRequired,
};

export default withStyles(stackedBarChartStyle)(StackedBarChart);
