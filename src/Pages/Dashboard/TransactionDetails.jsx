import { useEffect, useRef, useState } from "react";
import { Input, Select, Table } from "antd";
import Logo from "../../assets/logossss.png";
import { FiArrowUpRight, FiSearch } from "react-icons/fi";
import UserDetailsModal from "../../Components/Dashboard/UserDetailsModal";
import { dateOptions, locationItems, ratingItems } from "../../constant";
import { CustomPaginationButton } from "../../Components/ui/CustomPaginationButton";
const data = [
  {
    sno: "#500",
    employerName: "Pásztor Kíra",
    providerName: "Takács Bianka",
    date: "12/06/2020",
    priceSystem: "Request to Book",
    bookingPrice: "100$/hour",
    spitzerEarning: "20$/hour",
    status: "Pending",
  },
  {
    sno: "#499",
    employerName: "Novák Réka",
    providerName: "Novák Réka",
    date: "32/06/2020",
    priceSystem: "Request to Book",
    bookingPrice: "100$/hour",
    spitzerEarning: "20$/hour",
    status: "Upcoming",
  },
  {
    sno: "#498",
    employerName: "Török Melinda",
    providerName: "Kende Lili",
    date: "15/08/2017",
    priceSystem: "Request to Book",
    bookingPrice: "300$/hour",
    spitzerEarning: "20$/hour",
    status: "Completed",
  },
  {
    sno: "#497",
    employerName: "Molnár Fruzsina",
    providerName: "Katona Beatrix",
    date: "15/08/2017",
    priceSystem: "Request to Book",
    bookingPrice: "300$/hour",
    spitzerEarning: "20$/hour",
    status: "Cancelled",
  },
  {
    sno: "#496",
    employerName: "László Cintia",
    providerName: "Varga Boglárka",
    date: "16/08/2013",
    priceSystem: "Instant Booking",
    bookingPrice: "300$/hour",
    spitzerEarning: "20$/hour",
    status: "Upcoming",
  },
  {
    sno: "#495",
    employerName: "Tóth Kamilla",
    providerName: "Mezei Ágnes",
    date: "28/10/2012",
    priceSystem: "Instant Booking",
    bookingPrice: "100$/hour",
    spitzerEarning: "20$/hour",
    status: "Completed",
  },
  {
    sno: "#494",
    employerName: "Surány Izabella",
    providerName: "Somogyi Adél",
    date: "07/05/2016",
    priceSystem: "Instant Booking",
    bookingPrice: "300$/hour",
    spitzerEarning: "20$/hour",
    status: "Cancelled",
  },
  {
    sno: "#493",
    employerName: "Gáspár Gréta",
    providerName: "Halász Emese",
    date: "07/05/2016",
    priceSystem: "Instant Booking",
    bookingPrice: "300$/hour",
    spitzerEarning: "20$/hour",
    status: "Completed",
  },
  {
    sno: "#492",
    employerName: "Dudás Nikolett",
    providerName: "Szűts Gabriella",
    date: "28/10/2012",
    priceSystem: "Instant Booking",
    bookingPrice: "100$/hour",
    spitzerEarning: "20$/hour",
    status: "Completed",
  },
  {
    sno: "#491",
    employerName: "Szűts Gabriella",
    providerName: "Pásztor Kíra",
    date: "18/09/2016",
    priceSystem: "Instant Booking",
    bookingPrice: "100$/hour",
    spitzerEarning: "20$/hour",
    status: "Completed",
  },
  {
    sno: "#490",
    employerName: "Miksa Fruzsina",
    providerName: "László Barbara",
    date: "28/10/2012",
    priceSystem: "Instant Booking",
    bookingPrice: "300$/hour",
    spitzerEarning: "20$/hour",
    status: "Completed",
  },
  {
    sno: "#490",
    employerName: "Kiss Laura",
    providerName: "Szekeres Dalma",
    date: "28/10/2012",
    priceSystem: "Instant Booking",
    bookingPrice: "300$/hour",
    spitzerEarning: "20$/hour",
    status: "Completed",
  },
];

const TransactionDetails = () => {
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
      dataIndex: "sno",
      key: "sno",
    },
    {
      title: "Providers Name",
      dataIndex: "providerName",
      key: "providerName",
      render: (providerName) => {
        return (
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 12,
            }}
          >
            <p
              style={{
                letterSpacing: 0.4,
                fontSize: "#666666",
                fontWeight: "400",
              }}
            >
              {providerName}
            </p>
          </div>
        );
      },
    },

    {
      title: "Providers Name",
      dataIndex: "providerName",
      key: "providerName",
    },
    {
      title: "Date",
      dataIndex: "date",
      key: "date",
    },
    {
      title: "Price System",
      dataIndex: "priceSystem",
      key: "priceSystem",
    },
    {
      title: "Booking Price",
      dataIndex: "bookingPrice",
      key: "bookingPrice",
    },
    {
      title: "Spitzer Earning ",
      dataIndex: "spitzerEarning",
      key: "spitzerEarning",
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
      render: (status) => {
        let textColor = "#00AA46";
        if (status.toLowerCase() == "pending") {
          textColor = "orange";
        }
        if (status.toLowerCase() == "upcoming") {
          textColor = "black";
        }
        if (status.toLowerCase() == "cancelled") {
          textColor = "#EF5546";
        }

        return (
          <p
            style={{
              color: textColor,
            }}
          >
            {status}{" "}
          </p>
        );
      },
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
    <div className=" ">
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
              All Transaction Details
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
                options={locationItems}
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

export default TransactionDetails;
