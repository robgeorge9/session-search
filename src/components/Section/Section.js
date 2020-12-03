import React from 'react';
import './Section.css';
import { ReactComponent as Logo } from '../../svg/close.svg';
import Input from '../Input/Input';

const Section = (data) => {
    let dataprop = data.data
    let dataprop2 = data.data2
    let cdprop = data.changeDropdown
    let cdprop2 = data.changeDropdown2
    let resetprop = data.reset

    const Dropdown = props => {
        return (
            <React.Fragment>
                <select id='row1' className="select1 mr1" onChange={cdprop}>
                    <option value="email" data-type='string' >User Email</option>
                    <option value="width" data-type='integer'>Screen Width</option>
                    <option value="height" data-type='integer'>Screen Height</option>
                    <option value="visits" data-type='integer'># of Visits</option>
                    <option value="firstname" data-type='string'>First Name</option>
                    <option value="lastname" data-type='string'>Last Name</option>
                    <option value="response" data-type='integer'>Page Response time (ms)</option>
                    <option value="domain" data-type='string'>Domain</option>
                    <option value="path" data-type='string'>Page Path</option>
                </select>
                <CondSelection {...props} />
            </React.Fragment>
        )
    }

    const CondSelection = props => {
        if (dataprop === 'string') {
            return (
                <React.Fragment>
                    <select id='secondselect' className="select2 mr1">
                        <option value="equals">equals</option>
                        <option value="contains">contains</option>
                        <option value="starts">starts with</option>
                        <option value="inlist">in list</option>
                    </select>
                    <Input type='text' name='name' placeholder='string' onChange={resetprop} />
                </React.Fragment>
            )
        } else if (dataprop === 'integer' && dataprop2 === 'string') {
            return (
                <React.Fragment>
                    <select id='secondselect' className="select3 mr1" onChange={cdprop2}>
                        <option value="equals" data-type='string'>equals</option>
                        <option value="between" data-type='range'>between</option>
                        <option value="greater" data-type='string'>greater than</option>
                        <option value="less" data-type='string'>less than</option>
                        <option value="inlist" data-type='string'>in list</option>
                    </select>
                    <Input type='text' name='name' placeholder='0' onChange={resetprop} />
                </React.Fragment>
            )
        } else if (dataprop === 'integer' && dataprop2 === 'range') {
            return (
                <React.Fragment>
                    <div className='isand mr1'>is</div>
                    <select id='secondselect' className="select3 mr1 range" onChange={cdprop2}>
                        <option value="equals" data-type='string'>equals</option>
                        <option value="between" data-type='range' defaultValue>between</option>
                        <option value="greater" data-type='string'>greater than</option>
                        <option value="less" data-type='string'>less than</option>
                        <option value="inlist" data-type='string'>in list</option>
                    </select>
                    <Input type='text' name='range1' className='range' placeholder='0' onChange={resetprop} />
                    <div className='isand ml1 mr1'>and</div>
                    <Input type='text' name='range2' className='range' placeholder='0' onChange={resetprop} />
                </React.Fragment>
            )
        }
    }


    const removeSection = () => {
        console.log('her')

    }

    let rowNum = 0

    return (
        <div className={'mt2 row flex'} id={rowNum + 1}>
            <div className="alignCenter"><Logo className='closeIcon mr1' onClick={removeSection} /></div>
            <Dropdown />
        </div>
    )
};


export default Section;