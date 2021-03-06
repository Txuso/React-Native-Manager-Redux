import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text, Picker } from 'react-native';
import { employeeUpdate } from '../actions';
import { CardSection, Input } from './common';

class EmployeeForm extends Component {
    componentWillMount() {
        const { create } = this.props;
        if (create) {
            // reset user data if we are creating an user.
            // we should create a resetUserData action
            this.props.employeeUpdate({ prop: 'name', value: '' });
            this.props.employeeUpdate({ prop: 'phone', value: '' });
            this.props.employeeUpdate({ prop: 'shift', value: '' });
        }
    }

    render() {
        return (
            <View>
                <CardSection>
                   <Input 
                        label="Name"
                        placeholder="Txuso"
                        value={this.props.name}
                        onChangeText={text => this.props.employeeUpdate({
                            prop: 'name',
                            value: text })}
                   />
               </CardSection>

               <CardSection>
                   <Input 
                        label="Phone"
                        placeholder="666999666"
                        value={this.props.phone}
                        onChangeText={text => this.props.employeeUpdate({
                            prop: 'phone',
                            value: text })}
                   />
               </CardSection>
                  
               <CardSection style={{ flexDirection: 'column' }}>
                 <Text style={styles.pickerTextStyle}> Shift </Text>
                    <Picker
                        selectedValue={this.props.shift}
                        onValueChange={day => this.props.employeeUpdate({
                            prop: 'shift',
                            value: day })}
                    > 
                        <Picker.Item label="Monday" value="Monday" />
                        <Picker.Item label="Tuesday" value="Tuesday" />
                        <Picker.Item label="Wednesday" value="Wednesday" />
                        <Picker.Item label="Thurday" value="Thurday" />
                        <Picker.Item label="Friday" value="Friday" />
                        <Picker.Item label="Saturday" value="Saturday" />
                        <Picker.Item label="Sunday" value="Sunday" />
                    </Picker>
               </CardSection>
            </View>
        );
    }
}

const mapStateToProps = (state) => {
    const { name, phone, shift } = state.employeeForm;

    return { name, phone, shift };
};

const styles = {
    pickerTextStyle: {
        fontSize: 18,
        paddingLeft: 20,
    }
};

export default connect(mapStateToProps, { employeeUpdate })(EmployeeForm);
