import styled from "styled-components";
import FilterIcon from "../../assets/bx-filter.svg";
import { Checkbox } from "antd";
import React from "react";
import type { MenuProps } from 'antd';
import { Menu, ConfigProvider } from 'antd';

type MenuItem = Required<MenuProps>['items'][number];
const items: MenuItem[] = [
  {
    key: 'sub1',
    label: 'Type',
    children: [
      { key: '1', label: <Checkbox>Join the club</Checkbox> },
      { key: '2', label: <Checkbox>Join the club</Checkbox> },
      { key: '3', label: <Checkbox>Join the club</Checkbox> },
      { key: '4', label: <Checkbox>Join the club</Checkbox> },
    ],
  },
  {
    type: 'divider',
  },
  {
    key: 'sub2',
    label: 'Domain',
    children: [
      { key: '5', label: <Checkbox>Join the club</Checkbox> },
      { key: '6', label: <Checkbox>Join the club</Checkbox> },
      { key: '7', label: <Checkbox>Join the club</Checkbox> },
      { key: '8', label: <Checkbox>Join the club</Checkbox> },
    ],
  },
  {
    type: 'divider',
  },
]

const FilterTitle = styled.div`
  font-weight: 600;          /* equivalent to font-semibold */
  font-size: 1rem;           /* assuming text-md is equivalent to text-base */
  display: flex;             /* equivalent to flex */
  align-items: center;
  padding: 20px 20px 0px 20px;
`
const FilterList = styled.div`
  background-color: rgba(255, 244, 230, 1);
  width: 15%;
`;

const StyledMenu = styled(Menu)`  
  .ant-menu-item {
    padding-left: 1.5rem !important;
  }
`
const FilterBar: React.FC = () => {
  return (
    <ConfigProvider
    theme={{
      token: {
        colorPrimary: 'rgba(255, 149, 5, 1)'
      },
      components: {
        Menu: {
          itemBg: "rgba(255, 244, 230, 1)",
          itemSelectedColor: "rgba(0, 0, 0, 0.88)",
          subMenuItemBg: "rgba(255, 244, 230, 1)",
          itemSelectedBg: "rgba(255, 244, 230, 1)",
        }
      }
    }}
    >
    <FilterList>
      <FilterTitle>
        <img src={FilterIcon} alt="" />
        <span style={{marginLeft: 8}}>FILTER</span>
      </FilterTitle>
      <StyledMenu
        style={{ width: 190, paddingLeft: 0 }}
        mode="inline"
        items={items}
      />
    </FilterList>
    </ConfigProvider>
  );
};

export default FilterBar;
