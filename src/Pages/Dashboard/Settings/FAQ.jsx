import { Button } from "antd";
import React from "react";
import { PlusOutlined } from "@ant-design/icons";

const FAQ = () => {
  return (
    <div className="p-4">
      <div>
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold">FAQ</h1>
          <Button
            style={{
              borderRadius: 8,
              background: "#C1EEBD",
              height: 40,
              color: "#767676",
              fontSize: 14,
              fontWeight: "400",
              border: "none",
            }}
            icon={<PlusOutlined />}
          >
            Add FAQ
          </Button>
        </div>
        <div>
          {/* faq 1 */}
          <div className="flex items-center gap-5 justify-between my-3">
            <h2 className="flex gap-3 text-secondary font-semibold shadow-md w-full py-2 px-2 rounded-md">
              <span>
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10 20C4.47715 20 0 15.5228 0 10C0 4.47715 4.47715 0 10 0C15.5228 0 20 4.47715 20 10C20 15.5228 15.5228 20 10 20ZM10 18C14.4183 18 18 14.4183 18 10C18 5.58172 14.4183 2 10 2C5.58172 2 2 5.58172 2 10C2 14.4183 5.58172 18 10 18ZM9 13H11V15H9V13ZM11 11.3551V12H9V10.5C9 9.9477 9.4477 9.5 10 9.5C10.8284 9.5 11.5 8.8284 11.5 8C11.5 7.17157 10.8284 6.5 10 6.5C9.2723 6.5 8.6656 7.01823 8.5288 7.70577L6.56731 7.31346C6.88637 5.70919 8.302 4.5 10 4.5C11.933 4.5 13.5 6.067 13.5 8C13.5 9.5855 12.4457 10.9248 11 11.3551Z"
                    fill="#F27405"
                  />
                </svg>
              </span>
              What is Shpitze?
            </h2>
            <button>
              {/* edit button */}
              <svg
                width="40"
                height="32"
                viewBox="0 0 40 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect width="40" height="32" rx="6" fill="#F9F9F9" />
                <path
                  d="M13 22.89H14.4142L23.7279 13.5763L22.3137 12.1621L13 21.4758V22.89ZM29 24.89H11V20.6473L24.435 7.21231C24.8256 6.82179 25.4587 6.82179 25.8492 7.21231L28.6777 10.0407C29.0682 10.4313 29.0682 11.0644 28.6777 11.4549L17.2426 22.89H29V24.89ZM23.7279 10.7478L25.1421 12.1621L26.5563 10.7478L25.1421 9.33363L23.7279 10.7478Z"
                  fill="#F27405"
                />
              </svg>
            </button>
          </div>
          <div className="flex items-start gap-5">
            <p className=" w-full py-2 px-2 rounded-md min-h-[140px] text-[#818181] font-medium shadow-md">
              Shpitze is a platform that connects businesses with qualified,
              on-demand professionals for temporary or part-time work. Our app
              makes it easy for businesses to find professionals when they need
              extra help or to cover staff shortages.
            </p>
            <button>
              {/* delete button */}
              <svg
                width="40"
                height="32"
                viewBox="0 0 40 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect width="40" height="32" rx="6" fill="#F9F9F9" />
                <path
                  d="M15 8V6H25V8H30V10H28V25C28 25.5523 27.5523 26 27 26H13C12.4477 26 12 25.5523 12 25V10H10V8H15ZM14 10V24H26V10H14ZM17 13H19V21H17V13ZM21 13H23V21H21V13Z"
                  fill="#D93D04"
                />
              </svg>
            </button>
          </div>
        </div>
        <div>
          {/* faq 2 */}
          <div className="flex items-center gap-5 justify-between my-3">
            <h2 className="flex gap-3 text-secondary font-semibold shadow-md w-full py-2 px-2 rounded-md">
              <span>
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10 20C4.47715 20 0 15.5228 0 10C0 4.47715 4.47715 0 10 0C15.5228 0 20 4.47715 20 10C20 15.5228 15.5228 20 10 20ZM10 18C14.4183 18 18 14.4183 18 10C18 5.58172 14.4183 2 10 2C5.58172 2 2 5.58172 2 10C2 14.4183 5.58172 18 10 18ZM9 13H11V15H9V13ZM11 11.3551V12H9V10.5C9 9.9477 9.4477 9.5 10 9.5C10.8284 9.5 11.5 8.8284 11.5 8C11.5 7.17157 10.8284 6.5 10 6.5C9.2723 6.5 8.6656 7.01823 8.5288 7.70577L6.56731 7.31346C6.88637 5.70919 8.302 4.5 10 4.5C11.933 4.5 13.5 6.067 13.5 8C13.5 9.5855 12.4457 10.9248 11 11.3551Z"
                    fill="#F27405"
                  />
                </svg>
              </span>
              How does Shpitze work for employers?
            </h2>
            <p>
              {/* edit button */}
              <svg
                width="40"
                height="32"
                viewBox="0 0 40 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect width="40" height="32" rx="6" fill="#F9F9F9" />
                <path
                  d="M13 22.89H14.4142L23.7279 13.5763L22.3137 12.1621L13 21.4758V22.89ZM29 24.89H11V20.6473L24.435 7.21231C24.8256 6.82179 25.4587 6.82179 25.8492 7.21231L28.6777 10.0407C29.0682 10.4313 29.0682 11.0644 28.6777 11.4549L17.2426 22.89H29V24.89ZM23.7279 10.7478L25.1421 12.1621L26.5563 10.7478L25.1421 9.33363L23.7279 10.7478Z"
                  fill="#F27405"
                />
              </svg>
            </p>
          </div>
          <div className="flex items-start gap-5">
            <p className=" w-full py-2 px-2 rounded-md min-h-[140px] text-[#818181] font-medium shadow-md">
              Shpitze is a platform that connects businesses with qualified,
              on-demand professionals for temporary or part-time work. Our app
              makes it easy for businesses to find professionals when they need
              extra help or to cover staff shortages.
            </p>
            <button>
              {/* delete button */}
              <svg
                width="40"
                height="32"
                viewBox="0 0 40 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect width="40" height="32" rx="6" fill="#F9F9F9" />
                <path
                  d="M15 8V6H25V8H30V10H28V25C28 25.5523 27.5523 26 27 26H13C12.4477 26 12 25.5523 12 25V10H10V8H15ZM14 10V24H26V10H14ZM17 13H19V21H17V13ZM21 13H23V21H21V13Z"
                  fill="#D93D04"
                />
              </svg>
            </button>
          </div>
        </div>
        <div>
          {/* faq 3 */}
          <div className="flex items-center gap-5 justify-between my-3">
            <h2 className="flex gap-3 text-secondary font-semibold shadow-md w-full py-2 px-2 rounded-md">
              <span>
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10 20C4.47715 20 0 15.5228 0 10C0 4.47715 4.47715 0 10 0C15.5228 0 20 4.47715 20 10C20 15.5228 15.5228 20 10 20ZM10 18C14.4183 18 18 14.4183 18 10C18 5.58172 14.4183 2 10 2C5.58172 2 2 5.58172 2 10C2 14.4183 5.58172 18 10 18ZM9 13H11V15H9V13ZM11 11.3551V12H9V10.5C9 9.9477 9.4477 9.5 10 9.5C10.8284 9.5 11.5 8.8284 11.5 8C11.5 7.17157 10.8284 6.5 10 6.5C9.2723 6.5 8.6656 7.01823 8.5288 7.70577L6.56731 7.31346C6.88637 5.70919 8.302 4.5 10 4.5C11.933 4.5 13.5 6.067 13.5 8C13.5 9.5855 12.4457 10.9248 11 11.3551Z"
                    fill="#F27405"
                  />
                </svg>
              </span>
              How does Shpitze work for service providers?
            </h2>
            <p>
              {/* edit button */}
              <svg
                width="40"
                height="32"
                viewBox="0 0 40 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect width="40" height="32" rx="6" fill="#F9F9F9" />
                <path
                  d="M13 22.89H14.4142L23.7279 13.5763L22.3137 12.1621L13 21.4758V22.89ZM29 24.89H11V20.6473L24.435 7.21231C24.8256 6.82179 25.4587 6.82179 25.8492 7.21231L28.6777 10.0407C29.0682 10.4313 29.0682 11.0644 28.6777 11.4549L17.2426 22.89H29V24.89ZM23.7279 10.7478L25.1421 12.1621L26.5563 10.7478L25.1421 9.33363L23.7279 10.7478Z"
                  fill="#F27405"
                />
              </svg>
            </p>
          </div>
          <div className="flex items-start gap-5">
            <p className=" w-full py-2 px-2 rounded-md min-h-[140px] text-[#818181] font-medium shadow-md">
              Shpitze is a platform that connects businesses with qualified,
              on-demand professionals for temporary or part-time work. Our app
              makes it easy for businesses to find professionals when they need
              extra help or to cover staff shortages.
            </p>
            <button>
              {/* delete button */}
              <svg
                width="40"
                height="32"
                viewBox="0 0 40 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect width="40" height="32" rx="6" fill="#F9F9F9" />
                <path
                  d="M15 8V6H25V8H30V10H28V25C28 25.5523 27.5523 26 27 26H13C12.4477 26 12 25.5523 12 25V10H10V8H15ZM14 10V24H26V10H14ZM17 13H19V21H17V13ZM21 13H23V21H21V13Z"
                  fill="#D93D04"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
