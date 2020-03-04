import React from "react";
import Nav from './Nav';

class Dashboard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }
    render() {
        return (
            <div className="container">
                <Nav />
                Dashboard
            </div>
        );
    }
}

export default Dashboard;