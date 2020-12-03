import React from 'react';
import './Dropdown.css';

const Dropdown = () => {
    return (
        <React.Fragment>
            <label for='firstSelect'>firstSelect</label>
            <select id='firstSelect' class="old-select">
                <option value="email" data-type='string'>User Email</option>
                <option value="width" data-type='integer'>Screen Width</option>
                <option value="height" data-type='integer'>Screen Height</option>
                <option value="visits" data-type='integer'># of Visits</option>
                <option value="firstname" data-type='string'>First Name</option>
                <option value="lastname" data-type='string'>Last Name</option>
                <option value="response" data-type='integer'>Page Response time (ms)</option>
                <option value="domain" data-type='string'>Domain</option>
                <option value="path" data-type='string'>Page Path</option>
            </select>
        </React.Fragment>
    )
}

export default Dropdown;