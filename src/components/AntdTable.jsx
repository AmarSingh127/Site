import React, { useState } from 'react';
import { Table, Input, Button } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import Antd from '../components/Antd.css'
function AntdTable() {
  const [dataSource, setDataSource] = useState([
    {
      name: 'John',
      age: 22,
      city: 'US',
      address:"abc Road"
    },
    {
      name: 'Roman',
      age: 32,
      city: 'London',
      address:"xyz Road 20th main road"
    },
    {
      name: 'Brok',
      age: 29,
      city: 'Canada',
      address:"1st main Road"
    },
    {
      name: 'Kahli',
      age: 56,
      city: 'Punjab',
      address:"xyz Road"
    },
    {
      name: 'Amar Singh',
      age: 29,
      city: 'Canada',
      address:"xyz Road 20th sector main road"
    },
    {
      name: 'Asim',
      age: 56,
      city: 'Punjab',
      address:"xyz Road"
    },
  ]);
  
  const columns = [
    
    {
      title: 'Name',
      dataIndex: 'name',
      filterDropdown: ({ setSelectedKeys, confirm, clearFilters }) => {
        return (
          <>
          <div className="input">
            <Input 
              autoFocus
              placeholder="Search By Name "
              value={setSelectedKeys[0]}
              onChange={(e) => {
                setSelectedKeys(e.target.value ? [e.target.value] : []);
                confirm({closeDropDown:false});
              }}
              onPressEnter={() => {
                confirm();
              }}
              onBlur={() => {
                confirm();
              }}
            ></Input>
            <Button onClick={() => {
              confirm(); // search confirm ko add kar diye
            }} type='primary' style={{
              width: '20%',
              padding: '2px',
              margin: '13px',
              justifyContent: 'center',
              textAlign: 'center',
            }} >Search</Button>
            {/* <Button onClick={() => {
              clearFilters();
             
            }} type='reset' style={{
              width: '20%',
              padding: '2px',
              margin: '13px',
            }} >Reset</Button> */}
            </div>
          </>
        );
      },
      filterIcon: () => {
        return <SearchOutlined />;
      },
      onFilter: (value, record) => {
        return record.name.toUpperCase().includes(value.toUpperCase());
      },
    },
    {
      title: 'Age',
      dataIndex: 'age',
    },
    {
      title: 'City',
      dataIndex: 'city',
      filterDropdown: ({ setSelectedKeys, confirm, clearFilters }) => {
        return (
          <>
          <div className="input">
            <Input 
              autoFocus
              placeholder="Search By City "
              value={setSelectedKeys[0]}
              onChange={(e) => {
                setSelectedKeys(e.target.value ? [e.target.value] : []);
                confirm({closeDropDown:false});
              }}
              onPressEnter={() => {
                confirm();
              }}
              onBlur={() => {
                confirm();
              }}
            ></Input>
            <Button onClick={() => {
              confirm(); // search confirm ko add kar diye
            }} type='primary' style={{
              width: '20%',
              padding: '2px',
              margin: '13px',
              justifyContent: 'center',
              textAlign: 'center',
            }} >Search</Button>
            {/* <Button onClick={() => {
              clearFilters();
             
            }} type='reset' style={{
              width: '20%',
              padding: '2px',
              margin: '13px',
            }} >Reset</Button> */}
            </div>
          </>
        );
      },
      filterIcon: () => {
        return <SearchOutlined />;
      },
      onFilter: (value, record) => {
        return record.city.toUpperCase().includes(value.toUpperCase());
      },
      
    },
     {
      title: 'Address',
      dataIndex: 'address',
      filterDropdown: ({ setSelectedKeys, confirm, clearFilters }) => {
        return (
          <>
          <div className="input">
            <Input 
              autoFocus
              placeholder="Search By City "
              value={setSelectedKeys[0]}
              onChange={(e) => {
                setSelectedKeys(e.target.value ? [e.target.value] : []);
                confirm({closeDropDown:false});
              }}
              onPressEnter={() => {
                confirm();
              }}
              onBlur={() => {
                confirm();
              }}
            ></Input>
            <Button onClick={() => {
              confirm(); // search confirm ko add kar diye
            }} type='primary' style={{
              width: '20%',
              padding: '2px',
              margin: '13px',
              justifyContent: 'center',
              textAlign: 'center',
            }} >Search</Button>
            {/* <Button onClick={() => {
              clearFilters();
             
            }} type='reset' style={{
              width: '20%',
              padding: '2px',
              margin: '13px',
            }} >Reset</Button> */}
            </div>
          </>
        );
      },
      filterIcon: () => {
        return <SearchOutlined />;
      },
      onFilter: (value, record) => {
        return record.address.toUpperCase().includes(value.toUpperCase());
      },
      
    },
  ];

  return (
    <div className="App">
      <div className="app-header">
      <h1 className='heading'>Data Table using Antd</h1>
        <Table className='table' columns={columns} dataSource={dataSource} />
      </div>
    </div>
  );
}

export default AntdTable;
