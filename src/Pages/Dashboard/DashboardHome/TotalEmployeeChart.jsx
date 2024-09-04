import React, { useState, useEffect } from "react";
import { DownOutlined } from "@ant-design/icons";
import { Dropdown, Space } from "antd";
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const TotalEmployeeChart = () => {
  const data = [
    {
      name: "Jan",
      uv: 4000,
      pv: 2400,
      tv: "12k",
      amt: 10,
    },
    {
      name: "Feb",
      uv: 3000,
      pv: 1398,
      tv: 1200,
      amt: 20,
    },
    {
      name: "Mar",
      uv: 2000,
      pv: 9800,
      tv: 1200,
      amt: 30,
    },
    {
      name: "Apr",
      uv: 2780,
      pv: 3908,
      tv: 1200,
      amt: 40,
    },
    {
      name: "May",
      uv: 1890,
      pv: 4800,
      tv: 1200,
      amt: 50,
    },
    {
      name: "Jun",
      uv: 2390,
      pv: 3800,
      tv: 1200,
      amt: 60,
    },
    {
      name: "Jul",
      uv: 3490,
      pv: 4300,
      tv: 1200,
      amt: 70,
    },
    {
      name: "Aug",
      uv: 3490,
      pv: 4300,
      tv: 1200,
      amt: 80,
    },
    {
      name: "Sep",
      uv: 3490,
      pv: 4300,
      tv: 1200,
      amt: 90,
    },
    {
      name: "Oct",
      uv: 3490,
      pv: 4300,
      tv: 1200,
      amt: 100,
    },
    {
      name: "Nov",
      uv: 3490,
      pv: 4300,
      tv: 1200,
      amt: 110,
    },
    {
      name: "Dec",
      uv: 3490,
      pv: 4300,
      tv: 1200,
      amt: 120,
    },
  ];

  const [year, setYear] = useState(2024);

  const items = [
    {
      label: 2023,
      key: "2023",
    },
    {
      label: 2024,
      key: "2024",
    },
    {
      label: 2025,
      key: "2025",
    },
    {
      label: 2026,
      key: "2026",
    },
  ];

  const onClick = ({ key }) => {
    setYear(key);
  };

  /* useEffect(() => {
    if(year !== 2024){
      window.history.pushState(null, "", `?year=${year}`);
    }
  }, [year]);

  useEffect(() => {
    const searchParams = new URLSearchParams(window.location.search);
    const yearParam = searchParams.get('year');
    if (yearParam) {
      const parsedYear = parseInt(yearParam, 10);
      setYear(parsedYear);
    } else {
      window.location.reload();
    }
  }, []); */

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: 10,
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "end",
          justifyContent: "space-between",
          gap: 10,
          // marginTop: "10px",
          marginBottom: "10px",
        }}
      >
        <div className="space-y-1 mb-2 border bg-white p-4 rounded-md">
          <div className="flex items-center gap-2">
            <span className="block">
              <svg
                width="44"
                height="44"
                viewBox="0 0 44 44"
                fill="#68817F"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect width="44" height="44" rx="22" fill="#EFEFEF" />
                <path
                  d="M28 31C28 28.8783 27.1571 26.8434 25.6569 25.3431C24.1566 23.8429 22.1217 23 20 23C17.8783 23 15.8434 23.8429 14.3431 25.3431C12.8429 26.8434 12 28.8783 12 31"
                  fill="#68817F"
                />
                <path
                  d="M28 31C28 28.8783 27.1571 26.8434 25.6569 25.3431C24.1566 23.8429 22.1217 23 20 23C17.8783 23 15.8434 23.8429 14.3431 25.3431C12.8429 26.8434 12 28.8783 12 31H28Z"
                  stroke="#68817F"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M20 23C22.7614 23 25 20.7614 25 18C25 15.2386 22.7614 13 20 13C17.2386 13 15 15.2386 15 18C15 20.7614 17.2386 23 20 23Z"
                  fill="#68817F"
                  stroke="#68817F"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M32 30C32 26.63 30 23.5 28 22C28.6574 21.5068 29.1831 20.8591 29.5306 20.1143C29.878 19.3695 30.0365 18.5505 29.992 17.7298C29.9475 16.9091 29.7014 16.1121 29.2755 15.4092C28.8495 14.7063 28.2569 14.1193 27.55 13.7"
                  stroke="#68817F"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </span>
            <p
              style={{
                fontSize: "18px",
                fontWeight: "500",
                color: "#555555",
              }}
            >
              Total Employee Chart
            </p>
          </div>
          <p className="font-semibold text-lg text-[#68817F]">10.10K</p>
          <div className="flex items-center gap-3">
            <p>Daily Earning</p>
            <p className="text-[#767676]">100</p>
          </div>
        </div>

        <Dropdown menu={{ items, onClick }}>
          <p
            style={{
              // width: "79px",
              cursor: "pointer",
              color: "#717171",
              border: "1px solid #E9E9E9",
              borderRadius: "4px",
              padding: "4px 12px",
            }}
            onClick={(e) => e.preventDefault()}
          >
            {year}
            <DownOutlined style={{ paddingLeft: "18px" }} color="#717171" />
          </p>
        </Dropdown>
      </div>
      <ResponsiveContainer width={"100%"} height={180}>
        <BarChart data={data} barGap={100}>
          <CartesianGrid strokeDasharray="20 20" horizontal vertical={false} />
          <XAxis
            dataKey="name"
            padding="gap"
            minTickGap={2}
            fontSize="12px"
            fontWeight="400"
            strokeOpacity={0}
          />
          <Tooltip cursor={{ fill: "transparent" }} />
          <YAxis
            tickCount={15}
            width={40}
            fontSize="12px"
            fontWeight="400"
            strokeOpacity={0}
          />
          <Bar
            radius={[10, 10, 0, 0]}
            barSize={40}
            dataKey="pv"
            stackId="a"
            fill="#CAEEEC"
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default TotalEmployeeChart;
