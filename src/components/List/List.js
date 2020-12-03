import React from 'react';

const List = (props) => {
    const { recordsets } = props.listState;
    console.log(props)
    if (!recordsets || recordsets.recordsets.length === 0) return <p>Loading Data</p>;
    return (
        <table>
            <tbody>
                <tr>
                    <th>Email</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Screen Width</th>
                    <th>Screen Height</th>
                    <th># of Visits</th>
                    <th>Page Response (ms)</th>
                    <th>Domain</th>
                    <th>URL Path</th>
                </tr>
                {recordsets.recordset.map((recordset) => {
                    return (
                        <tr key={recordset.id} className='list'>
                            <td>{recordset.user_email}</td>
                            <td>{recordset.user_first_name}</td>
                            <td>{recordset.user_last_name}</td>
                            <td>{recordset.screen_width}</td>
                            <td>{recordset.screen_height}</td>
                            <td>{recordset.visits}</td>
                            <td>{recordset.page_response}</td>
                            <td>{recordset.domain}</td>
                            <td>{recordset.path}</td>
                        </tr>
                    )
                })}
            </tbody>
        </table>
    );
}

export default List;