import { useEffect, useRef, useState } from "react";
import { Input, Select, Table } from "antd";
import { FiArrowUpRight, FiSearch } from "react-icons/fi";
import { dateOptions, locationItems, reportTypes } from "../../../constant";
import UserDetailsModal from "../../../Components/Dashboard/UserDetailsModal";
import { CustomPaginationButton } from "../../../Components/ui/CustomPaginationButton";
const data = [
  {
    SNo: "#500",
    ReportTo: "Pásztor Kíra",
    ReportFor: "Takács Bianka",
    ReportType: "cancel booking",
    Date: "12/06/2020",
    ReportDetails: "At Shpitze, we are committed to...",
  },
  {
    SNo: "#499",
    ReportTo: "Novák Réka",
    ReportFor: "Novák Réka",
    ReportType: "payment report",
    Date: "12/06/2020",
    ReportDetails: "At Shpitze, we are committed to...",
  },
  {
    SNo: "#498",
    ReportTo: "Török Melinda",
    ReportFor: "Kende Lili",
    ReportType: "payment report",
    Date: "15/08/2017",
    ReportDetails: "At Shpitze, we are committed to...",
  },
  {
    SNo: "#497",
    ReportTo: "Molnár Fruzsina",
    ReportFor: "Katona Beatrix",
    ReportType: "payment report",
    Date: "15/08/2017",
    ReportDetails: "At Shpitze, we are committed to...",
  },
  {
    SNo: "#496",
    ReportTo: "László Cintia",
    ReportFor: "Varga Boglárka",
    ReportType: "payment report",
    Date: "16/08/2013",
    ReportDetails: "At Shpitze, we are committed to...",
  },
  {
    SNo: "#495",
    ReportTo: "Tóth Kamilla",
    ReportFor: "Mezei Ágnes",
    ReportType: "cancel booking",
    Date: "28/10/2012",
    ReportDetails: "At Shpitze, we are committed to...",
  },
  {
    SNo: "#494",
    ReportTo: "Surány Izabella",
    ReportFor: "Somogyi Adél",
    ReportType: "cancel booking",
    Date: "15/08/2017",
    ReportDetails: "At Shpitze, we are committed to...",
  },
  {
    SNo: "#493",
    ReportTo: "Gáspár Gréta",
    ReportFor: "Halász Emese",
    ReportType: "cancel booking",
    Date: "07/05/2016",
    ReportDetails: "At Shpitze, we are committed to...",
  },
  {
    SNo: "#492",
    ReportTo: "Dudás Nikolett",
    ReportFor: "Szűts Gabriella",
    ReportType: "cancel booking",
    Date: "28/10/2012",
    ReportDetails: "At Shpitze, we are committed to...",
  },
  {
    SNo: "#491",
    ReportTo: "Szűts Gabriella",
    ReportFor: "Pásztor Kíra",
    ReportType: "payment report",
    Date: "18/09/2016",
    ReportDetails: "At Shpitze, we are committed to...",
  },
  {
    SNo: "#490",
    ReportTo: "Miksa Fruzsina",
    ReportFor: "László Barbara",
    ReportType: "payment report",
    Date: "18/09/2016",
    ReportDetails: "At Shpitze, we are committed to...",
  },
  {
    SNo: "#489",
    ReportTo: "Kiss Laura",
    ReportFor: "Szekeres Dalma",
    ReportType: "payment report",
    Date: "28/10/2012",
    ReportDetails: "At Shpitze, we are committed to...",
  },
];

const Report = () => {
  const [page, setPage] = useState(
    new URLSearchParams(window.location.search).get("page") || 1
  );
  const [open, setOpen] = useState(false);

  const dropdownRef = useRef();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDate(false);
        setOpen("");
        setFilter(false);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const columns = [
    {
      title: "S.No",
      dataIndex: "SNo",
      key: "SNo",
    },

    {
      title: "Report to",
      dataIndex: "ReportTo",
      key: "ReportTo",
    },
    {
      title: "Report For",
      dataIndex: "ReportFor",
      key: "ReportFor",
    },
    {
      title: "Report Type",
      dataIndex: "ReportType",
      key: "ReportType",
    },
    {
      title: "Date",
      dataIndex: "Date",
      key: "Date",
    },
    {
      title: "Report Details",
      dataIndex: "ReportDetails",
      key: "ReportDetails",
    },

    {
      title: "Action",
      dataIndex: "action",
      key: "action",
      render: (_, record) => (
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "10px",

            paddingRight: 10,
          }}
        >
          <button
            onClick={() => setOpen(true)}
            style={{
              cursor: "pointer",
              border: "none",
              outline: "none",
            }}
          >
            <svg
              width="41"
              height="32"
              viewBox="0 0 41 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect x="0.5" width="40" height="32" rx="6" fill="#F9F9F9" />
              <path
                d="M24.5208 13.4038L15.9142 22.0104L14.5 20.5962L23.1066 11.9896H15.5208V9.98959H26.5208V20.9896H24.5208V13.4038Z"
                fill="#A1A1A1"
              />
            </svg>
          </button>
        </div>
      ),
    },
  ];

  const handlePageChange = (page) => {
    setPage(page);
    const params = new URLSearchParams(window.location.search);
    params.set("page", page);
    window.history.pushState(null, "", `?${params.toString()}`);
  };

  return (
    <div className="">
      <div
        style={{
          background: "white",
          padding: "20px",
          borderRadius: "12px",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            margin: "16px 0",
          }}
        >
          <div>
            <h3
              style={{
                color: "black",
                fontSize: 18,
                fontWeight: "500",
              }}
            >
              Reports
            </h3>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
            <div
              style={{
                width: "370px",
                height: "40px",
                borderRadius: "8px",
              }}
            >
              <Input
                placeholder="Search..."
                prefix={<FiSearch size={14} color="#868FA0" />}
                style={{
                  width: "100%",
                  height: "100%",
                  fontSize: "14px",
                }}
                size="middle"
              />
            </div>

            <div>
              <Select
                defaultValue="Date"
                style={{
                  width: 120,
                  height: 40,
                }}
                options={dateOptions}
              />
            </div>
            <div>
              <Select
                defaultValue="Locations"
                style={{
                  width: 120,
                  height: 40,
                }}
                options={reportTypes}
              />
            </div>
          </div>
        </div>
        <div>
          <Table
            columns={columns}
            dataSource={data}
            pagination={{
              itemRender: CustomPaginationButton,
              pageSize: 10,
              defaultCurrent: parseInt(page),
              onChange: handlePageChange,
              total: data.length,

              style: { display: "flex", justifyContent: "center" }, // Center the pagination
            }}
          />
        </div>
      </div>
      <UserDetailsModal open={open} setOpen={setOpen} />
    </div>
  );
};

export default Report;
