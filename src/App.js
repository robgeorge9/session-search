import React, { useState, useEffect } from 'react';
import Button from './components/Button/Button';
import SectionWrapper from './components/SectionWrapper/SectionWrapper';
import Output from './components/Output/Output';

function App() {

  let [data, setData] = useState('string');
  let [data2, setData2] = useState('string');
  let [listState, setListState] = useState({ recordsets: null });
  let [rows, setRows] = useState({ row: [1] });
  let [query1, setquery1] = useState({ row1: { 1: 'User Email', 2: 'equals', 3: '', 4: null } });


  useEffect(() => {
    const apiUrl = `http://localhost:5000/api/data`;
    fetch(apiUrl)
      .then((res) => res.json())
      .then((recordsets) => {
        setListState({ recordsets });
      });
  }, [setListState]);

  let addRow = () => setRows(rows.row[0] + 1)

  let changeDropdown = (e) => {
    let select = e.target;
    let type = select.options[select.selectedIndex].dataset.type;
    setData(data = type)
  }

  let changeDropdown2 = (e) => {
    let select = e.target;
    let type = select.options[select.selectedIndex].dataset.type;
    setData2(data2 = type)
  }

  const reset = (e) => {

  }

  return (
    <div className="App">
      <h2>Search for Sessions</h2>
      <SectionWrapper data={data} data2={data2} changeDropdown={changeDropdown} changeDropdown2={changeDropdown2} rows={rows} addRow={addRow} />
      <Button className='blueButton mr2' label='Search' type='searchIcon' />
      <Button className='greyButton' label='Reset' onClick={reset} />
      <Output listState={listState} />
    </div>
  );
}

export default App;


