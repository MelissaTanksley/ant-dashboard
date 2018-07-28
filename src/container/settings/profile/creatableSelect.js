import React, { Component } from 'react';
import CreatableSelect from 'react-select/lib/Creatable';
import { colourOptions } from './options';

class CreatableSelect extends Component {
    handleChange = (newValue: any, actionMeta: any) => {
        console.group('Value Changed');
        console.log(newValue);
        console.log(`action: ${actionMeta.action}`);
        console.groupEnd();
    };
    handleInputChange = (inputValue: any, actionMeta: any) => {
        console.group('Input Changed');
        console.log(inputValue);
        console.log(`action: ${actionMeta.action}`);
        console.groupEnd();
    }
    render() {
        return (
            <CreatableSelect
                isClearable
                onChange={this.handleChange}
                onInputChange={this.handleInputChange}
                options={colourOptions}
            />
        );
    }
}

export default CreatableSelect;