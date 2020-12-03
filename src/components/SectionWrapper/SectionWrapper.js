import React from 'react';
import Section from '../../components/Section/Section';

const SectionWrapper = (data) => {
    // const [rows, setRows] = useState({
    //     row: [1],
    // });
    // useEffect(() => {
    //     console.log(rows)
    // });

    // const addRow = () => setRows(rows.row[0] + 1)
    console.log(data)

    let addRowProp = data.addRow
    let rowsProp = data.rows

    return (
        <React.Fragment>
            <Section key={rowsProp} className="block" id={"block-"} {...data} />
            <button className='blueButton andButton mt05' onClick={() => { addRowProp() }}>And</button>

            <hr></hr>
        </React.Fragment>
    );
}

//<Section key={'rows'} className="block" id={"block-" + rows} />

// {
//     rows.rows[0].map((rows) => {
//         return (
//             <Section key={'rows'} className="block" id={"block-" + rows} data={data} data2={data2} setData={setData} setData2={setData2} />
//         )
//     })
// }

// { Array.from(Array(rows.row).map((x, index) => <Section key={rows} className="block" id={"block-" + index} data={data} data2={data2} setData={setData} setData2={setData2} />)) }

export default SectionWrapper;

