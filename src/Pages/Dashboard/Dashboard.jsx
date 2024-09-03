import { Layout } from "antd";
import { useState } from "react";
import { Link, Outlet, useNavigate, useLocation } from "react-router-dom";
import Logo from "../../assets/logo.png";
import { RiNotification2Line } from "react-icons/ri";

import {
  AboutSVG,
  AddAdminSVG,
  AddCategorySVG,
  DashboardSVG,
  EmployerDetailsSVG,
  FAQSVG,
  LogOutSVG,
  PrivacySVG,
  ReportSVG,
  SecuritySVG,
  ServiceListSVG,
  ServiceProviderSVG,
  SubCategorySVG,
  TransactionSVG,
} from "../../SVGs";
const { Header, Sider, Content } = Layout;

const Dashboard = () => {
  const [setting, setSetting] = useState(false);
  const { pathname } = useLocation();
  const navigate = useNavigate();
  console.log(setting);
  const handleLogOut = () => {
    navigate("/login");
    window.location.reload();
  };

  const linkItems = [
    {
      title: "Dashboard",
      path: "/",
      icon: <DashboardSVG />,
    },
    {
      title: "Service Providers",
      path: "/service-providers",
      icon: <ServiceProviderSVG />,
    },
    {
      title: "Employee Details",
      path: "/employee-details",
      icon: <EmployerDetailsSVG />,
    },
    {
      title: "Services List",
      path: "/service-list",
      icon: <ServiceListSVG />,
    },

    {
      title: "Transaction Details",
      path: "/transaction-details",
      icon: <TransactionSVG />,
    },
    {
      title: "Add Category",
      path: "/add-category",
      icon: <AddCategorySVG />,
    },

    {
      title: "Add Subcategory",
      path: "/add-subcategory",
      icon: <SubCategorySVG />,
    },

    // {
    //   title: "Add Subcategory",
    //   path: "/setting",
    //   icon: <IoSettingsOutline size={24} />,
    //   option: true,
    //   optionsItems: [
    //     {
    //       title: "FAQ",
    //       path: "/faq",
    //     },
    //     {
    //       title: "Privacy Policy",
    //       path: "/privacy",
    //     },

    //     {
    //       title: "Terms & Condition",
    //       path: "/terms",
    //     },
    //     {
    //       title: "SIC guidelines",
    //       path: "/sic",
    //     },

    //     {
    //       title: "About Us",
    //       path: "/about",
    //     },
    //   ],
    // },
    {
      title: "About Us",
      path: "/about",
      icon: <AboutSVG />,
    },
    {
      title: "FAQ",
      path: "/faq",
      icon: <FAQSVG />,
    },

    {
      title: "Privacy Policy",
      path: "/privacy-policy",
      icon: <PrivacySVG />,
    },
    {
      title: "Terms & Condition",
      path: "/terms",
      icon: <SecuritySVG />,
    },
    {
      title: "Reports",
      path: "/reports",
      icon: <ReportSVG />,
    },
    {
      title: "Add Admin",
      path: "/add-admin",
      icon: <AddAdminSVG />,
    },
    {
      title: "Log out",
      path: "/login",
      icon: <LogOutSVG />,
    },
  ];

  return (
    <Layout style={{ height: "100vh", width: "100vw" }}>
      <Sider
        width="14vw"
        // className=" bg-[#F1E1C2]"
        style={{
          // overflow: "auto",
          position: "fixed",
          height: "100vh",
          marginTop: "95px",
          borderRadius: "20px",
          left: "20px",
          // paddingBottom: "60px",
          // overflowX: "hidden",
          zIndex: 2,
          backgroundColor: "white",
          maxHeight: "90vh",

          // overflowY: "scroll",
        }}
      >
        {/* <div
          className="logo"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginTop: "25px",
            width: "100%",
            // height: 60,
            padding: "0 0 20px 0",
          }}
        ></div> */}

        {/* <div
          style={{
            marginBottom: "30px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img src={LogoText} height="50px" width="50%" />
        </div> */}

        <ul
          style={{
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
            gap: "5px",
            height: "90%",
            marginTop: 10,
            color: "#767676",
          }}
        >
          {linkItems.map((item, index) => (
            <li
              key={index}
              style={{
                width: "100%",
                position: "relative",
                paddingLeft: "40px",
              }}
            >
              {item.option ? (
                <Link
                  to={item.path}
                  style={{
                    width: "100%",
                  }}
                >
                  <div
                    onClick={() => {
                      setSetting(!setting);
                    }}
                    style={{
                      display: "flex",

                      color: "#767676",
                      alignItems: "flex-end",
                      margin: "auto  0 auto 0",
                      gap: "14px",
                      background: setting ? "#EBEBEB" : "none",
                      width: "100%",
                      padding: "14px 8px 14px 12px",
                      borderRadius: "100px 0px 0px 100px",
                    }}
                  >
                    <div style={{ height: "24px" }}>{item.icon}</div>
                    <div
                      style={{
                        fontSize: "14px",
                        textAlign: "center",
                        height: "fit-content",
                      }}
                    >
                      {item.title}
                    </div>
                  </div>

                  <div
                    style={{
                      display: "flex",
                      justifyContent: "flex-end",
                      flexDirection: "column",
                      // marginTop: setting ? "5px" : 0,
                      // marginBottom: "-7px",
                    }}
                  >
                    {setting &&
                      item.optionsItems.map((optionItem, optionIndex) => (
                        <Link
                          to={optionItem.path}
                          key={optionIndex}
                          style={{
                            // width: "150px",
                            height: "40px",
                            // borderRadius: "0 10px 10px 0",
                            width: "100%",
                          }}
                        >
                          <Link
                            className="text-center"
                            to={optionItem.path}
                            style={{
                              display: "flex",

                              color: "#767676",
                              alignItems: "flex-end",

                              // borderRadius: "100px 0px 0px 100px",
                            }}
                          >
                            <div
                              className="  mx-auto "
                              style={{
                                fontSize: "14px",
                                marginBottom: "5px",
                                backgroundColor:
                                  optionItem.path === pathname ? "#D0D2CE" : "",
                                height: "fit-content",

                                margin: "10px 0px",
                                width: "100%",
                                padding: "14px 8px 14px 12px",
                                borderRadius: "100px 0px 0px 100px",
                              }}
                            >
                              {optionItem.title}
                            </div>
                          </Link>
                        </Link>
                      ))}
                  </div>
                </Link>
              ) : (
                <Link
                  to={item.path}
                  style={{
                    display: "flex",
                    color: item.path === pathname ? "" : "#767676",
                    alignItems: "flex-end",
                    margin: "auto  0 auto 0",
                    gap: "14px",
                    background: item.path === pathname ? "#EBEBEB" : "none",
                    width: "100%",
                    padding: "14px 8px 14px 12px",
                    borderRadius: "100px 0px 0px 100px",
                  }}
                >
                  <div style={{ height: "24px" }}>{item.icon}</div>
                  <div
                    style={{
                      fontSize: "14px",
                      textAlign: "center",
                      height: "fit-content",
                    }}
                  >
                    {item.title}
                  </div>
                </Link>
              )}
            </li>
          ))}
        </ul>
      </Sider>
      <Layout>
        <Header
          style={{
            position: "fixed",
            width: "100%",
            height: "80px",
            zIndex: 1,
            padding: 0,
            backgroundColor: "#fff",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            paddingRight: "75px",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <img className="mx-16 h-full" src={Logo} />
          </div>
          <div
            style={{
              width: "220px",
              display: "flex",
              alignItems: "center",
              gap: "15px",
              justifyContent: "space-between",
            }}
          >
            <Link to="/notification">
              <div
                style={{
                  background: "#F2F2F2",
                  width: 45,
                  height: 45,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: "50%",
                  position: "relative",
                }}
              >
                <RiNotification2Line color="black" size={19} />

                <div
                  style={{
                    width: "15px",
                    height: "15px",
                    borderRadius: "50%",
                    background: "#FEA500",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    color: "#fff",
                    position: "absolute",
                    padding: "5px",
                    top: 8,
                    right: 10,
                    fontWeight: "500",
                    fontSize: 12,
                  }}
                >
                  5
                </div>
              </div>
            </Link>
            <Link
              to={"/admin-profile"}
              style={{
                height: "42px",
                cursor: "pointer",
                borderRadius: "5px",
                display: "flex",
                alignItems: "center",
                gap: "10px",
                margin: "10px",
              }}
            >
              <img
                src={Logo}
                style={{
                  width: "44px",
                  height: "44px",
                  borderRadius: "100%",
                  borderColor: "#DBB162",
                  borderWidth: 2,
                }}
                alt=""
              />
              <h2
                style={{
                  color: "#333333",
                  fontSize: "16px",
                  fontWeight: "600",
                  width: 200,
                }}
              >
                Admin Asad
              </h2>
            </Link>
          </div>
        </Header>

        <Content
          style={{
            marginTop: "95px",
            backgroundColor: "white",
            // marginBottom: "20px",
            marginLeft: "16%",
            marginRight: "2%",
            borderRadius: "20px",
            overflow: "auto",
            // padding: "20px",
          }}
        >
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
};
export default Dashboard;
