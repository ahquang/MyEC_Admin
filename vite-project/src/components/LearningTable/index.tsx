import React, { useState } from "react";
import { Table, ConfigProvider } from "antd";
import { observer } from "mobx-react-lite";
import type { TableColumnsType, TableProps } from "antd";
import dataStore from "../../context/store";
import deleteBtn from "../../assets/deleteBtn.svg"
import { FlexContainer } from "../CommonStyledComponent/index.styled";
import styled from "styled-components";

interface DataType {
  key: React.Key;
  learningActivities: string;
  type: string;
  domain: string;
  host: string;
  participants: number;
  progress: string;
  approvalStatus: string;
}

const StyledTable = styled(Table)<TableProps<any>>`
  .ant-pagination-item {
    border: none;
    & a {
      color: black;
    }
  }
`
const columns: TableColumnsType<DataType> = [
  {
    title: "Learning Activities",
    dataIndex: "learningActivities",
    sorter: {
      compare: (a, b) =>
        a.learningActivities.localeCompare(b.learningActivities),
    },
  },
  {
    title: "Type",
    dataIndex: "type",
    sorter: {
      compare: (a, b) => a.type.localeCompare(b.type),
    },
  },
  {
    title: "Domain",
    dataIndex: "domain",
    sorter: {
      compare: (a, b) => a.domain.localeCompare(b.domain),
    },
  },
  {
    title: "Host/Performer",
    dataIndex: "host",
    sorter: {
      compare: (a, b) => a.host.localeCompare(b.host),
    },
  },
  {
    title: "Participants",
    dataIndex: "participants",
    sorter: {
      compare: (a, b) => a.participants - b.participants,
    },
  },
  {
    title: "Progress",
    dataIndex: "progress",
    sorter: {
      compare: (a, b) => a.progress.localeCompare(b.progress),
    },
  },
  {
    title: "Approval Status",
    dataIndex: "approvalStatus",
    sorter: {
      compare: (a, b) => a.approvalStatus.localeCompare(b.approvalStatus),
    },
  },
];

const onChange: TableProps<DataType>["onChange"] = (
  pagination,
  filters,
  sorter,
  extra
) => {
  console.log("params", pagination, filters, sorter, extra);
};

const LearningTable: React.FC = observer(() => {

  const [selectedRowKeys, setSelectedRowKeys] = useState<React.Key[]>([]);
  const onSelectChange = (newSelectedRowKeys: React.Key[]) => {
    console.log("selectedRowKeys changed: ", newSelectedRowKeys);
    setSelectedRowKeys(newSelectedRowKeys);
  };
  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange,
  };
  const hasSelected = selectedRowKeys.length > 0;
  return (
    <ConfigProvider
      theme={{
        token: {
          colorBorder: "rgba(255, 244, 230, 1)",
          colorPrimary: "rgba(255, 149, 5, 1)",
        },
        components: {
          Table: {
            headerBg: "rgba(255, 244, 230, 1)",
            rowSelectedBg: "transparent",
            rowSelectedHoverBg: "transparent",
          },
          Checkbox: {
            colorPrimary: "rgba(255, 149, 5, 1)",
            colorPrimaryHover: "rgba(255, 149, 5, 1)",
          },
        },
      }}
    >
      <FlexContainer justify="start" style={{margin: '15px 0px', height: 32}}>
        {hasSelected && <img style={{ cursor: "pointer"}} src={deleteBtn} alt="" />}        
        <span style={{ marginLeft: 8, marginBottom: 16, fontSize: 12 }}>
          {hasSelected ? `${selectedRowKeys.length} record(s) selected` : ""}
        </span>
      </FlexContainer>
      <StyledTable
        rowSelection={rowSelection}
        columns={columns}
        dataSource={dataStore.initData}
        onChange={onChange}
        scroll={{y: 350}}
      />

      
    </ConfigProvider>
  );
});

export default LearningTable;
