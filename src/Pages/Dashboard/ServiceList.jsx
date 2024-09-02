import { useEffect, useRef, useState } from "react";
import { Input, Select, Table } from "antd";
import Logo from "../../assets/logossss.png";
import { FiArrowUpRight, FiSearch } from "react-icons/fi";
import UserDetailsModal from "../../Components/Dashboard/UserDetailsModal";
import { locationItems, ratingItems } from "../../constant";

const data = [
  {
    key: "#1239",
    user: {
      name: "Mr. Mahmud",
      img: <img src={Logo} height={48} width={48} />,
    },
    email: "mr101@mail.ru",
    contact: "(+33)7 00 55 59 27",
    location: "Corona, Michigan",
    occupation: "Engineer",
    bookingSystem: "Online",
    price: 150,
    dateTime: "Aug 4, 2024 (9:00am-3:00pm)",
  },
  {
    key: "#1238",
    user: {
      name: "Lily",
      img: <img src={Logo} height={48} width={48} />,
    },
    email: "xterris@gmail.com",
    contact: "(+33)7 00 55 59 27",
    location: "Great Falls, Maryland",
    occupation: "Designer",
    bookingSystem: "Phone",
    price: 200,
    dateTime: "Aug 5, 2024 (10:00am-4:00pm)",
  },
  {
    key: "#1237",
    user: {
      name: "Kathry",
      img: <img src={Logo} height={48} width={48} />,
    },
    email: "irnabela@gmail.com",
    contact: "(+33)7 00 55 59 27",
    location: "Syracuse, Connecticut",
    occupation: "Artist",
    bookingSystem: "In-Person",
    price: 250,
    dateTime: "Aug 6, 2024 (11:00am-5:00pm)",
  },
  {
    key: "#1236",
    user: {
      name: "Priscilla",
      img: <img src={Logo} height={48} width={48} />,
    },
    email: "codence@gmail.com",
    contact: "(+33)7 00 55 59 27",
    location: "Lafayette, California",
    occupation: "Developer",
    bookingSystem: "Online",
    price: 300,
    dateTime: "Aug 7, 2024 (8:00am-2:00pm)",
  },
  {
    key: "#1235",
    user: {
      name: "Claire",
      img: <img src={Logo} height={48} width={48} />,
    },
    email: "quasiah@gmail.com",
    contact: "(+33)7 00 55 59 27",
    location: "Pasadena, Oklahoma",
    occupation: "Consultant",
    bookingSystem: "Phone",
    price: 350,
    dateTime: "Aug 8, 2024 (12:00pm-6:00pm)",
  },
  {
    key: "#1234",
    user: {
      name: "Irmar",
      img: <img src={Logo} height={48} width={48} />,
    },
    email: "xeno@yandex.ru",
    contact: "(+33)7 00 55 59 27",
    location: "Lansing, Illinois",
    occupation: "Manager",
    bookingSystem: "In-Person",
    price: 400,
    dateTime: "Aug 9, 2024 (1:00pm-7:00pm)",
  },
  {
    key: "#1233",
    user: {
      name: "Gloria",
      img: <img src={Logo} height={48} width={48} />,
    },
    email: "redaniel@gmail.com",
    contact: "(+33)7 00 55 59 27",
    location: "Coppell, Virginia",
    occupation: "Writer",
    bookingSystem: "Online",
    price: 450,
    dateTime: "Aug 10, 2024 (9:00am-3:00pm)",
  },
  {
    key: "#4",
    user: {
      name: "Gloria",
      img: <img src={Logo} height={48} width={48} />,
    },
    email: "jusef@gmail.com",
    date: "18 Jul, 2023  4:30pm",
    location: "Banasree",
    status: "Inactive",
    selling: 500,
    balance: 600,
    occupation: "Photographer",
    bookingSystem: "Online",
    price: 100,
    dateTime: "Aug 11, 2024 (10:00am-4:00pm)",
  },
  {
    key: "#5",
    user: {
      name: "Gloria",
      img: <img src={Logo} height={48} width={48} />,
    },
    email: "asad@gmail.com",
    date: "18 Jul, 2023  4:30pm",
    location: "Banasree",
    status: "Active",
    selling: 500,
    balance: 600,
    occupation: "Chef",
    bookingSystem: "Phone",
    price: 200,
    dateTime: "Aug 12, 2024 (11:00am-5:00pm)",
  },
  {
    key: "#6",
    user: {
      name: "Gloria",
      img: <img src={Logo} height={48} width={48} />,
    },
    email: "fahim@gmail.com",
    date: "18 Jul, 2023  4:30pm",
    location: "Banasree",
    status: "Inactive",
    selling: 500,
    balance: 600,
    occupation: "Artist",
    bookingSystem: "In-Person",
    price: 250,
    dateTime: "Aug 13, 2024 (8:00am-2:00pm)",
  },
  {
    key: "#7",
    user: {
      name: "Ashutosh",
      img: <img src={Logo} height={48} width={48} />,
    },
    email: "nadir@gmail.com",
    date: "18 Jul, 2023  4:30pm",
    location: "Banasree",
    status: "Active",
    selling: 500,
    balance: 600,
    occupation: "Developer",
    bookingSystem: "Online",
    price: 300,
    dateTime: "Aug 14, 2024 (9:00am-3:00pm)",
  },
  {
    key: "#8",
    user: {
      name: "Gloria",
      img: <img src={Logo} height={48} width={48} />,
    },
    email: "tushar@gmail.com",
    date: "18 Jul, 2023  4:30pm",
    location: "Banasree",
    status: "Inactive",
    selling: 500,
    balance: 600,
    occupation: "Consultant",
    bookingSystem: "Phone",
    price: 350,
    dateTime: "Aug 15, 2024 (10:00am-4:00pm)",
  },
  {
    key: "#9",
    user: {
      name: "Gloria",
      img: <img src={Logo} height={48} width={48} />,
    },
    email: "rahman@gmail.com",
    date: "18 Jul, 2023  4:30pm",
    location: "Banasree",
    status: "Active",
    selling: 500,
    balance: 600,
    occupation: "Manager",
    bookingSystem: "In-Person",
    price: 400,
    dateTime: "Aug 16, 2024 (11:00am-5:00pm)",
  },
  {
    key: "#10",
    user: {
      name: "Gloria",
      img: <img src={Logo} height={48} width={48} />,
    },
    email: "rafsan@gmail.com",
    date: "18 Jul, 2023  4:30pm",
    location: "Banasree",
    status: "Active",
    selling: 500,
    balance: 600,
    occupation: "Photographer",
    bookingSystem: "Online",
    price: 150,
    dateTime: "Aug 17, 2024 (12:00pm-6:00pm)",
  },
  {
    key: "#11",
    user: {
      name: "Gloria",
      img: <img src={Logo} height={48} width={48} />,
    },
    email: "jusef@gmail.com",
    date: "18 Jul, 2023  4:30pm",
    location: "Banasree",
    status: "Inactive",
    selling: 500,
    balance: 600,
    occupation: "Chef",
    bookingSystem: "Phone",
    price: 200,
    dateTime: "Aug 18, 2024 (1:00pm-7:00pm)",
  },
];

const ServiceList = () => {
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
      dataIndex: "key",
      key: "key",
    },
    {
      title: "Providers Name",
      dataIndex: "user",
      key: "user",
      render: (user) => {
        return (
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 12,
            }}
          >
            <p> {user?.img} </p>

            <p
              style={{
                letterSpacing: 0.4,
                fontSize: "#666666",
                fontWeight: "400",
              }}
            >
              {user?.name}
            </p>
          </div>
        );
      },
    },

    {
      title: "Occupation",
      dataIndex: "occupation",
      key: "occupation",
    },
    {
      title: "Booking System",
      dataIndex: "bookingSystem",
      key: "bookingSystem",
    },
    {
      title: "Price",
      dataIndex: "price",
      key: "price",
      render: (price) => {
        return <p> {price}$/hour </p>;
      },
    },
    {
      title: "Date & Time",
      dataIndex: "dateTime",
      key: "dateTime",
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
            <FiArrowUpRight size={26} className=" text-secondary" />
          </button>

          <div>
            <button>
              <svg
                width="40"
                height="32"
                viewBox="0 0 40 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect width="40" height="32" rx="6" fill="#F9F9F9" />
                <g clip-path="url(#clip0_1173_1999)">
                  <path
                    d="M19 16C22.309 16 25 13.309 25 10C25 6.691 22.309 4 19 4C15.691 4 13 6.691 13 10C13 13.309 15.691 16 19 16ZM19 6C21.206 6 23 7.794 23 10C23 12.206 21.206 14 19 14C16.794 14 15 12.206 15 10C15 7.794 16.794 6 19 6ZM27 26V27C27 27.552 26.552 28 26 28C25.448 28 25 27.552 25 27V26C25 22.691 22.309 20 19 20C15.691 20 13 22.691 13 26V27C13 27.552 12.552 28 12 28C11.448 28 11 27.552 11 27V26C11 21.589 14.589 18 19 18C23.411 18 27 21.589 27 26ZM34.697 14.217L30.705 18.092C30.124 18.674 29.337 18.999 28.5 18.999C27.663 18.999 26.876 18.673 26.285 18.082L24.314 16.228C23.912 15.85 23.893 15.217 24.272 14.814C24.651 14.412 25.283 14.393 25.686 14.772L27.678 16.647C28.149 17.117 28.873 17.096 29.301 16.668L33.303 12.782C33.699 12.397 34.332 12.407 34.717 12.803C35.102 13.199 35.092 13.833 34.696 14.217H34.697Z"
                    fill="#87DF50"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_1173_1999">
                    <rect
                      width="24"
                      height="24"
                      fill="white"
                      transform="translate(11 4)"
                    />
                  </clipPath>
                </defs>
              </svg>
            </button>
          </div>
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
              All Service List
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
                defaultValue="Locations"
                style={{
                  width: 120,
                  height: 40,
                }}
                options={locationItems}
              />
            </div>

            {/* <div
              style={{
                width: "40px",
                height: "40px",
                borderRadius: "100%",
                border: "1px solid #E9E9E9",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                padding: "5px 8px",
                color: "#F2F2F2",
                cursor: "pointer",
                background: "#DBB162",
              }}
            >
              <RiLoader3Fill size={20} />
            </div> */}
          </div>
        </div>
        <div>
          <Table
            columns={columns}
            dataSource={data}
            pagination={{
              pageSize: 10,
              defaultCurrent: parseInt(page),
              onChange: handlePageChange,
              total: 85,
              showTotal: (total, range) =>
                `Showing ${range[0]}-${range[1]} out of ${total}`,
              defaultPageSize: 20,
              // defaultCurrent: 1,
              style: {
                marginBottom: 20,
                marginLeft: 20,
                marginRight: 20,
                width: "100%",
                display: "flex",
                // gap: 10,
                // justifyContent: "space-between",
              },
            }}
          />
        </div>
      </div>
      <UserDetailsModal open={open} setOpen={setOpen} />
    </div>
  );
};

export default ServiceList;
