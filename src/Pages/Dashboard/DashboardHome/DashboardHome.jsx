import { Col, Row } from "antd";
import React from "react";

import TotalSellerChart from "./TotalSellerChart";
import DailyOverviewChart from "./DailyOverviewChart";
import { HiMiniUserGroup } from "react-icons/hi2";
import TotalEarningGoth from "./TotalEarningGrowth";
import doner from "../../../assets/doner.png";
import donation from "../../../assets/donation.png";
import { RiShareForwardBoxFill } from "react-icons/ri";
import TotalEarningGrowth from "./TotalEarningGrowth";
import TotalEmployeeChart from "./TotalEmployeeChart";

function DashboardHome() {
  const onChange = (pageNumber) => {
    console.log("Page: ", pageNumber);
  };

  const data = [
    {
      name: "Total User",
      count: "20.10K",
      title1: " Daily user",
      total: "1025",
      icon: <HiMiniUserGroup color="#DBB162" size={24} />,
      bgColor: "#EFEFEF",
      textColor: "#DBB162",
    },
    {
      name: "Total Salon",
      count: "920",
      title1: " Daily user",
      total: "125",
      icon: <img src={doner} />,
      textColor: "#8E3C50",
      bgColor: "#EFEFEF",
    },
    {
      name: "Total Earning",
      count: "150.10K",
      title1: " Daily donation",
      total: "$2.5k",
      icon: <img src={donation} />,
      textColor: "#F16365",
      bgColor: "#EFEFEF",
    },
  ];

  return (
    <div>
      {/* <div className="grid grid-cols-3 gap-3 items-center">
        {data.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-md p-10 "
            style={{
              display: "flex",
              alignItems: "center",
              gap: "12px",
            }}
          >
            <div
              style={{
                background: `${item.bgColor}`,
                width: "44px",
                height: "44px",
                borderRadius: "100%",
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              {item?.icon}
            </div>
            <div
              style={{
                flex: 1,
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <p
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",

                  fontSize: "1.2em",
                  fontWeight: "400",
                  color: "#6A6D7C",
                }}
              >
                {item.name}
              </p>
              <div>
                <p
                  style={{
                    fontSize: "1.6em",
                    fontWeight: "600",
                    color: `${item?.textColor}`,
                  }}
                >
                  {item.count} +
                </p>

                <p className="flex gap-3 items-center text-[#00B047] font-medium text-lg">
                  {" "}
                  <span> {item?.title1} </span> <span> {item?.total}</span>
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div
        className=" mt-[20px]"
        style={{
          borderRadius: "15px",
          backgroundColor: "#fff",
          width: "100%",
          height: "450px",
          padding: "10px 20px 20px 20px",
        }}
      >
        <TotalEarningGoth />
      </div>

      <div
        style={{
          marginTop: "20px",
          marginBottom: "15px",
          display: "grid",
          gridTemplateColumns: "auto auto",
          gap: "20px",
        }}
      >
        <div
          className="bg-black"
          style={{
            borderRadius: "15px",
            backgroundColor: "#fff",
            width: "100%",
            height: "370px",
            padding: "10px 20px 20px 20px",
          }}
        >
          <DailyOverviewChart />
        </div>
        <div
          style={{
            borderRadius: "15px",
            backgroundColor: "#fff",
            width: "100%",
            height: "370px",
            padding: "10px 20px 20px 20px",
          }}
        >
          <TotalSellerChart />
        </div>
      </div> */}
      <div>
        <div className="flex gap-4 items-center bg-[#F7F7F7] p-2 m-3 rounded-md">
          <div className="col-span-3 shadow-lg w-[250px] space-y-3 h-[380px] bg-white p-4 rounded-md">
            <div className="flex items-center  gap-2">
              <span className="block">
                <svg
                  width="44"
                  height="44"
                  viewBox="0 0 44 44"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect width="44" height="44" rx="22" fill="#EFEFEF" />
                  <path
                    d="M17.1888 19.3375C18.2276 19.336 19.2235 18.9227 19.9581 18.1881C20.6927 17.4535 21.1061 16.4576 21.1075 15.4187C20.8911 10.2202 13.4856 10.2217 13.27 15.4188C13.2715 16.4576 13.6848 17.4535 14.4194 18.1881C15.154 18.9227 16.1499 19.336 17.1888 19.3375ZM17.1888 15.7938C15.3832 15.7966 15.0301 13.7213 16.8138 13.36L16.8138 13.0562C16.8138 12.9568 16.8533 12.8614 16.9236 12.7911C16.9939 12.7208 17.0893 12.6812 17.1888 12.6812C17.2882 12.6812 17.3836 12.7208 17.4539 12.7911C17.5243 12.8614 17.5638 12.9568 17.5638 13.0562V13.36C17.8704 13.3889 18.157 13.5252 18.3731 13.7447C18.5892 13.9642 18.7209 14.2529 18.745 14.56C18.745 14.6594 18.7055 14.7548 18.6352 14.8252C18.5649 14.8955 18.4695 14.935 18.37 14.935C18.2706 14.935 18.1752 14.8955 18.1049 14.8252C18.0345 14.7548 17.995 14.6594 17.995 14.56C17.995 14.3275 17.665 14.0725 17.1888 14.0725C16.1334 14.1005 16.1296 15.0157 17.1888 15.0437C18.0625 15.0437 18.745 15.5875 18.745 16.2775C18.7209 16.5846 18.5892 16.8733 18.3732 17.0928C18.1571 17.3123 17.8705 17.4486 17.5638 17.4775V17.7812C17.5638 17.8807 17.5243 17.9761 17.454 18.0464C17.3836 18.1167 17.2882 18.1562 17.1888 18.1562C17.0893 18.1562 16.994 18.1167 16.9236 18.0464C16.8533 17.9761 16.8138 17.8807 16.8138 17.7812V17.4775C16.5074 17.448 16.2211 17.3115 16.0051 17.0921C15.7891 16.8728 15.6572 16.5844 15.6325 16.2775C15.6325 16.178 15.6721 16.0827 15.7424 16.0123C15.8127 15.942 15.9081 15.9025 16.0075 15.9025C16.107 15.9025 16.2024 15.942 16.2727 16.0123C16.343 16.0827 16.3825 16.178 16.3825 16.2775C16.3825 16.5062 16.7163 16.765 17.1888 16.765C18.2454 16.7353 18.2482 15.821 17.1888 15.7938Z"
                    fill="#00B047"
                  />
                  <path
                    d="M13.8896 23.9944L13.482 24.194C13.3943 24.2387 13.3278 24.3161 13.2967 24.4094C13.2655 24.5027 13.2723 24.6045 13.3156 24.6929C13.3588 24.7813 13.435 24.8491 13.5278 24.8818C13.6206 24.9145 13.7225 24.9095 13.8116 24.8678C18.8245 22.487 23.2937 19.0998 26.9409 14.917V15.4185C26.9409 15.5179 26.9805 15.6133 27.0508 15.6836C27.1211 15.7539 27.2165 15.7935 27.3159 15.7935C27.4154 15.7935 27.5108 15.7539 27.5811 15.6836C27.6514 15.6133 27.6909 15.5179 27.6909 15.4185V13.8994C27.6868 13.8013 27.646 13.7083 27.5765 13.6388C27.5071 13.5694 27.4141 13.5285 27.3159 13.5244H25.7973C25.699 13.5262 25.6054 13.5665 25.5366 13.6367C25.4677 13.7068 25.4291 13.8011 25.4291 13.8994C25.4291 13.9977 25.4677 14.092 25.5366 14.1622C25.6054 14.2323 25.699 14.2726 25.7973 14.2744H26.5034C23.0006 18.3354 18.7092 21.6423 13.8896 23.9944Z"
                    fill="#00B047"
                  />
                  <path
                    d="M31.8738 31.75H30.73V18.4563C30.7297 18.3569 30.6901 18.2617 30.6199 18.1914C30.5496 18.1212 30.4544 18.0816 30.355 18.0813H27.3175C27.2682 18.0811 27.2194 18.0907 27.1738 18.1095C27.1282 18.1282 27.0868 18.1559 27.052 18.1907C27.0171 18.2256 26.9895 18.267 26.9707 18.3125C26.9519 18.3581 26.9423 18.407 26.9425 18.4563V31.75H26.17V21.4938C26.1702 21.4445 26.1606 21.3956 26.1418 21.35C26.123 21.3045 26.0954 21.2631 26.0606 21.2282C26.0257 21.1934 25.9843 21.1657 25.9387 21.147C25.8932 21.1282 25.8443 21.1186 25.795 21.1188H22.7613C22.712 21.1186 22.6631 21.1282 22.6176 21.1469C22.572 21.1657 22.5306 21.1933 22.4957 21.2282C22.4609 21.2631 22.4332 21.3045 22.4145 21.35C22.3957 21.3956 22.3861 21.4445 22.3863 21.4938V31.75H21.6138V24.5313C21.6139 24.482 21.6044 24.4331 21.5856 24.3875C21.5668 24.342 21.5392 24.3006 21.5043 24.2657C21.4695 24.2308 21.4281 24.2032 21.3825 24.1844C21.3369 24.1657 21.2881 24.1561 21.2388 24.1563H18.205C18.1557 24.1561 18.1069 24.1657 18.0613 24.1845C18.0157 24.2032 17.9743 24.2309 17.9395 24.2657C17.9046 24.3006 17.877 24.342 17.8582 24.3875C17.8394 24.4331 17.8298 24.482 17.83 24.5313V31.75H17.0575V27.5688C17.0577 27.5195 17.0481 27.4706 17.0293 27.425C17.0105 27.3795 16.9829 27.3381 16.9481 27.3032C16.9132 27.2684 16.8718 27.2407 16.8262 27.222C16.7807 27.2032 16.7318 27.1936 16.6825 27.1938H13.645C13.5457 27.1941 13.4504 27.2337 13.3802 27.3039C13.3099 27.3742 13.2703 27.4694 13.27 27.5688V31.75H12.1263C12.0279 31.7517 11.9341 31.7919 11.8651 31.862C11.7962 31.9322 11.7575 32.0266 11.7575 32.125C11.7575 32.2234 11.7962 32.3178 11.8652 32.388C11.9341 32.4581 12.0279 32.4984 12.1263 32.5H31.8738C31.9722 32.4985 32.0661 32.4583 32.1352 32.3881C32.2043 32.318 32.243 32.2235 32.243 32.125C32.243 32.0265 32.2043 31.932 32.1352 31.8619C32.0661 31.7917 31.9722 31.7515 31.8738 31.75Z"
                    fill="#00B047"
                  />
                </svg>
              </span>
              <h3 className="font-semibold">Total Earning</h3>
            </div>
            <h3 className="font-semibold text-4xl text-green-500">$150.10K</h3>
            <div className="flex items-center gap-3">
              <p>Daily Earning</p>
              <p className="text-[#767676]">$10,000</p>
            </div>
          </div>
          <div className=" w-full">
            {/* chart components */}
            <TotalEarningGoth />
          </div>
        </div>

        <div className="grid grid-cols-12  items-center">
          <div className="col-span-6 bg-[#F7F7F7] p-2 m-3 rounded-md">
            {/* total services */}

            <TotalSellerChart />
          </div>
          <div className="col-span-6 bg-[#F7F7F7] p-2 m-3 rounded-md">
            {/* total Employee */}
            <TotalEmployeeChart />
          </div>
        </div>
      </div>
    </div>
  );
}

export default DashboardHome;
