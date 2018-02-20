import _ from 'lodash';
import Communications from 'react-native-communications';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Card, CardSection, Button, Confirm } from './common';
import { employeeUpdate, employeeSave, employeesDelete } from '../actions';
import EmployeeForm from './EmployeeForm';

class EmployeeEdit extends Component {
    state = { showModal: false };
    
    componentWillMount() {
        // update employeeForm state taking every key/value pair with lodash
        _.each(this.props.employee, (value, prop) => {
            this.props.employeeUpdate({ prop, value });
        });
    }

    onButtonPress() {
        const { name, phone, shift } = this.props;
        this.props.employeeSave({ name, phone, shift, uid: this.props.employee.uid });
    }

    onSendTextMessage() {
        const { phone, shift } = this.props;
        Communications.text(phone, `You upcoming shift is on ${shift}`);
    }

    onDeclineModal() {
        this.setState({ showModal: !this.state.showModal });
    }

    onAcceptModal() {
        this.props.employeesDelete({ uid: this.props.employee.uid });
    }

    render() {
        return (
            <Card>
                <EmployeeForm />
                <CardSection>
                    <Button onPress={this.onButtonPress.bind(this)}>
                        Save Changes
                    </Button>
                </CardSection>
                <CardSection>
                    <Button onPress={this.onSendTextMessage.bind(this)}>
                        Text Schedule
                    </Button>
                </CardSection>
                <CardSection>
                    <Button onPress={this.onDeclineModal.bind(this)}>
                        Fire Employee
                    </Button>
                </CardSection>
                <Confirm
                    onAccept={this.onAcceptModal.bind(this)}
                    onDecline={this.onDeclineModal.bind(this)}
                    visible={this.state.showModal}
                >
                    Are you sure you want to delete this user?
                </Confirm>
            </Card>
        );
    }
}

const mapStateToProps = (state) => {
    const { name, phone, shift } = state.employeeForm;

    return { name, phone, shift };
};

export default connect(mapStateToProps, { 
    employeeUpdate,
    employeeSave,
    employeesDelete })(EmployeeEdit);
