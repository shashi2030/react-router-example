import React from "react";
import Nav from './Nav';
class AboutUs extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }
    render() {
        return (
            <div className="container">
                 <Nav />
                AboutUs
            </div>
        );
    }
}

export default AboutUs;