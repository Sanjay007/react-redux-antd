import React, { Component } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import { Layout, Button, Divider, Menu, Modal, Row, Col, Icon } from 'antd';
import { TestActions } from '../../actions'
import './index.css';

class Home extends Component {

    constructor() {
        super();
        this.state = {
            testData: "This is a test data of the state"
        }
    }
    setTestDataOfState = (newData) => {
        this.setState({
            testData: newData
        })
    }
    render() {
        return (
            <React.Fragment>
                Test Data of State: {this.state.testData} --- <button onClick={() => this.setTestDataOfState("Updated Test Data of State")}>Update this</button><br />
                Test Data of Store: {this.props.testData.responseData} --- <button onClick={this.props.fetchTestData}>Fetch this</button><br />

                Service Status: {this.props.testData.status} <br />
                Service Response: {JSON.stringify(this.props.testData.response)}
            </React.Fragment >
        );
    }
}


var mapStateToProps = (state) => {
    return {
        testData: state.TestData
    }
}

var mapDispatchToProps = (dispatch) => {
    return {
        fetchTestData: bindActionCreators(TestActions.fetchTestData, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
