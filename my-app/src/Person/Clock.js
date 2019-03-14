import React from 'react';

function FormattedDate( props ){
    return <h1>It is { props.date.toLocaleTimeString() }</h1>
}

class Clock extends React.Component {
    constructor( props ){
        super( props )
        this.state = { date: new Date() }
    }

    componentDidMount() {
        this.timerID = setInterval(
            () => this.tick(),
            1000
        )
    }

    componentWillUnmount() {
        clearInterval( this.tick() )
    }

    tick() {
        this.setState({
            date: new Date()
        });
    }

    dayin() {
        console.log(1)
    }

    render() {
        return (
            <div>
                <h1 onClick={this.dayin}>Hello, world!</h1>
                <FormattedDate date={this.state.date} />
            </div>
        )
    }
}

export default Clock;
