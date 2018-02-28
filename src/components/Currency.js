	
    import React, { Component } from 'react';
    import './Currency.css'

    class Currency extends Component {

        render() {
            let {
                id,
                name,
                symbol,
                price_usd,
                percent_change_1h,
                percent_change_24h,
                percent_change_7d,
            } = this.props.data;
            return (
                <li className={"cryptocurrency " + id}>
                    <p className="cryptocurrency-name">{name} ({symbol})</p>
                    <h1>${ (+price_usd).toFixed(2) }</h1>
                    <p>{percent_change_1h}% per hour</p>
                    <p>{percent_change_24h}% per day</p>
                    <p>{percent_change_7d}% per week</p>
                </li>
            );
        }
    }

    export default Currency;
	
