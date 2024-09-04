import { useEffect, useRef, useState } from "react";
import { CiEdit } from "react-icons/ci";
import { FaRegImage, FaRegTrashAlt } from "react-icons/fa";
import { Button, Form, Input, Modal, Select, Table } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import Swal from "sweetalert2";
import Logo from "../../assets/logo.png";
import { FiSearch } from "react-icons/fi";
import { CustomPaginationButton } from "../../Components/ui/CustomPaginationButton";

const data = [
  {
    sno: "#491",
    categoryName: "Szűts Gabriella",
  },
  {
    sno: "#492",
    categoryName: "Pásztor Kíra",
  },
  {
    sno: "#493",
    categoryName: "Halász Emese",
  },
  {
    sno: "#494",
    categoryName: "Somogyi Adél",
  },
  {
    sno: "#495",
    categoryName: "Mezei Ágnes",
  },
  {
    sno: "#496",
    categoryName: "Varga Boglárka",
  },
  {
    sno: "#497",
    categoryName: "Katona Beatrix",
  },
  {
    sno: "#498",
    categoryName: "Kende Lili",
  },
  {
    sno: "#499",
    categoryName: "Novák Réka",
  },
  {
    sno: "#500",
    categoryName: "Takács Bianka",
  },
];

const AddCategory = () => {
  const [openAddModel, setOpenAddModel] = useState(false);
  const [imgFile, setImgFile] = useState(null);
  const [category, setCategory] = useState("location");
  const [page, setPage] = useState(
    new URLSearchParams(window.location.search).get("page") || 1
  );
  const [selectionType, setSelectionType] = useState("checkbox");

  const onSelectChange = (newSelectedRowKeys) => {
    console.log("selectedRowKeys changed: ", newSelectedRowKeys);
    setSelectionType(newSelectedRowKeys);
  };
  const rowSelection = {
    selectionType,
    onChange: onSelectChange,
  };

  const handleChange = (e) => {
    const file = e.target.files[0];
    setImgFile(file);
  };

  const [itemForEdit, setItemForEdit] = useState(null);
  const dropdownRef = useRef();

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes",
      cancelButtonText: "No",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success",
          showConfirmButton: false,
          timer: 1500,
        });
      }
    });
  };

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
      sno: "key",
    },

    {
      title: "Category Name",
      dataIndex: "categoryName",
      key: "categoryName",
      // align: "center",
    },
    {
      title: "Action",
      dataIndex: "action",
      key: "action",
      align: "center",
      render: (_, record) => (
        <p
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 20,
          }}
        >
          <button
            onClick={() => {
              setOpenAddModel(true), setItemForEdit(record);
            }}
            style={{
              cursor: "pointer",
              border: "none",
              outline: "none",
              color: "#A1A1A1",
              background: "white",
            }}
          >
            <CiEdit size={25} />
          </button>
          <button
            onClick={() => handleDelete()}
            style={{
              cursor: "pointer",
              border: "none",
              outline: "none",
              background: "white",
              color: "#A1A1A1",
            }}
          >
            <FaRegTrashAlt size={20} />
          </button>
        </p>
      ),
    },
  ];

  const handlePageChange = (page) => {
    setPage(page);
    const params = new URLSearchParams(window.location.search);
    params.set("page", page);
    window.history.pushState(null, "", `?${params.toString()}`);
  };

  const onClick = ({ key }) => {
    setCategory(key);
    const params = new URLSearchParams(window.location.search);
    params.set("category", key);
    window.history.pushState(null, "", `?${params.toString()}`);
  };

  return (
    <div>
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
                fontSize: 24,
                fontWeight: "500",
              }}
            >
              Add A Category
            </h3>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
            {/* search  */}
            {/* <div
              style={{
                width: "330px",
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

            <Select
              defaultValue="Category"
              style={{
                width: 150,
                height: 40,
                color: "black",
              }}
              //   onChange={handleChange}
              options={items}
            /> */}
            {/* 
            <Button
              style={{
                borderRadius: 8,
                background: "#DBB162",
                height: 40,
                color: "white",
                fontSize: 14,
                fontWeight: "400",
              }}
            >
              Share Community
            </Button> */}

            <Button
              onClick={() => setOpenAddModel(true)}
              style={{
                borderRadius: 8,
                border: "none",
                background: "#C1EEBD",
                height: 40,
                color: "#767676",
                fontSize: 14,
                fontWeight: "400",
              }}
              icon={<PlusOutlined />}
            >
              Add Category
            </Button>
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
      <Modal
        centered
        open={openAddModel}
        onCancel={() => {
          // null;
          setImgFile(null);
          setOpenAddModel(false);
        }}
        width={500}
        footer={false}
      >
        <div className="p-6 ">
          <h1
            className="font-semibold text-[#555555] text-xl"
            style={{ marginBottom: "10px", marginTop: "8px" }}
          >
            {itemForEdit ? "Update  category" : "Add  category"}
          </h1>
          <Form>
            <div>
              <p className="text-[#6D6D6D] py-1">Category Name</p>
              <Form.Item
                name="title"
                rules={[
                  {
                    required: true,
                    message: "Please input Package Name",
                  },
                ]}
              >
                <Input
                  className="w-[100%] border outline-none px-3 py-[8px]"
                  type="text"
                />
              </Form.Item>
            </div>
            {/* 
            <div style={{ width: "100%", marginBottom: "10px" }}>
              <p className="text-black py-1">Category </p>
              <Select
                placeholder="Select Category"
                style={{
                  width: "100%",
                  height: 40,
                }}
              >
                <Option value="super-admin">Worldview</Option>
                <Option value="admin">Way of Life</Option>
              </Select>
            </div>

            <div className="mt-5">
              <p className="text-[#6D6D6D] py-1">Slider Image</p>

              <label
                htmlFor="image"
                style={{ display: "block", margin: "4px 0" }}
                className="p-3 border"
              >
                <Form.Item name="image">
                  <div className="flex justify-center items-center w-full h-full border-dashed border border-black py-10">
                    {imgFile ? (
                      <img src={URL.createObjectURL(imgFile)} alt="" />
                    ) : (
                      <FaRegImage className="text-2xl" />
                    )}
                  </div>

                  <div className="hidden">
                    <Input
                      id="image"
                      type="file"
                      onInput={handleChange}
                      style={{
                        border: "1px solid #E0E4EC",
                        height: "52px",
                        background: "white",
                        borderRadius: "8px",
                        outline: "none",
                      }}
                    />
                  </div>
                </Form.Item>
              </label>
            </div>

            <div className=" mt-5">
              <p className="text-[#6D6D6D] py-1">Include link</p>
              <Form.Item
                name="link"
                rules={[
                  {
                    required: true,
                    message: "Please input Package Name",
                  },
                ]}
              >
                <Input
                  className="w-[100%] h-[50px]  border outline-none px-3 py-[8px]"
                  type="text"
                />
              </Form.Item>
            </div> */}

            <div className="text-center mt-8">
              <button className="bg-[#BB6D42] px-6 py-3 w-full text-[#FEFEFE] rounded-md">
                Add Category
              </button>
            </div>
          </Form>
        </div>
      </Modal>
    </div>
  );
};

export default AddCategory;
