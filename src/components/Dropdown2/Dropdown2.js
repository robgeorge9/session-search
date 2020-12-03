import React from 'react';
import PropTypes from 'prop-types';


const Dropdown2 = props => {
    const { type } = props;
    // if (type === 'string') {
    return (
        <React.Fragment>
            <label>secondSelect</label>
            <select id='secondelect' className="old-select">
                <option value="equals">equals</option>
                <option value="contains">contains</option>
                <option value="starts">starts with</option>
                <option value="inlist">in list</option>
            </select>
        </React.Fragment>
    )
    // } else if (type === 'integer') {
    //     return (
    //         <React.Fragment>
    //             <label for='secondSelect'>secondSelect</label>
    //             <select id='secondelect' class="old-select">
    //                 <option value="equals">equals</option>
    //                 <option value="between">between</option>
    //                 <option value="greater">greater than</option>
    //                 <option value="less">less than</option>
    //                 <option value="inlist">in list</option>
    //             </select>
    //         </React.Fragment>
    //     )
    // }
}

Dropdown2.propTypes = {
    type: PropTypes.string,
}

Dropdown2.defaultProps = {
    type: 'string',
}

export default Dropdown2;