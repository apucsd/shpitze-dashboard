import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import Dashboard from "./Pages/Dashboard/Dashboard";
import DashboardHome from "./Pages/Dashboard/DashboardHome/DashboardHome";
import Notification from "./Pages/Dashboard/Notification";
import Otp from "./Pages/Auth/Otp";
import Login from "./Pages/Auth/Login";
import UpdatePassword from "./Pages/Auth/UpdatePassword";
import NotFound from "./404";
import PrivateRoute from "./routes/PrivateRoute";

import MakeAdmin from "./Pages/Dashboard/MakeAdmin";
import ChangePassword from "./Pages/Dashboard/ChangePassword";
// import Profile from "./Pages/Dashboard/Profile";
import ForgotPassword from "./Pages/Auth/ForgotPassword";

import DonorsRecord from "./Pages/Dashboard/DonorsRecord";
import UserDetailsList from "./Pages/Dashboard/ServiceProviders";
import BooksCategoryList from "./Pages/Dashboard/BooksCategoryList";

import AdminProfile from "./Pages/Dashboard/AdminProfile";
import About from "./Pages/Dashboard/Settings/About";
import PrivacyPolicy from "./Pages/Dashboard/Settings/PrivacyPolicy";
import Terms from "./Pages/Dashboard/Settings/Terms";
import FAQ from "./Pages/Dashboard/Settings/FAQ";
import BookList from "./Pages/Dashboard/AddCategory";
import SICguidelines from "./Pages/Dashboard/Settings/SICguidelines";
import Feedback from "./Pages/Dashboard/Feedback";
import UploadDonation from "./Pages/Dashboard/UploadDonation";
import ServiceProviders from "./Pages/Dashboard/ServiceProviders";
import EmployeeDetails from "./Pages/Dashboard/EmployeeDetails";
import ServiceList from "./Pages/Dashboard/ServiceList";
import TransactionDetails from "./Pages/Dashboard/TransactionDetails";
import AddCategory from "./Pages/Dashboard/AddCategory";
import AddSubCategory from "./Pages/Dashboard/AddSubCategory";
import Report from "./Pages/Dashboard/Settings/Report";

function App() {
  return (
    <>
      <div className="maincontainer">
        <Router>
          <Routes>
            <Route
              exact
              path="/"
              element={
                <PrivateRoute>
                  <Dashboard />
                </PrivateRoute>
              }
            >
              <Route path="/" element={<DashboardHome />} />
              <Route path="/service-providers" element={<ServiceProviders />} />
              <Route path="/employee-details" element={<EmployeeDetails />} />
              <Route path="/service-list" element={<ServiceList />} />
              <Route
                path="/transaction-details"
                element={<TransactionDetails />}
              />
              {/* 
              <Route
              path="/books-category-list"
              element={<BooksCategoryList />}
              /> */}
              <Route path="/add-category" element={<AddCategory />} />
              <Route path="/add-subcategory" element={<AddSubCategory />} />
              <Route path="/about" element={<About />} />
              <Route path="/faq" element={<FAQ />} />
              <Route path="/privacy-policy" element={<PrivacyPolicy />} />
              <Route path="/terms" element={<Terms />} />
              <Route path="/reports" element={<Report />} />
              <Route path="/add-admin" element={<MakeAdmin />} />

              <Route path="/notification" element={<Notification />} />
              <Route path="/setting" element={<FAQ />} />
              <Route path="/sic" element={<SICguidelines />} />
              <Route path="/make-admin" element={<MakeAdmin />} />
              <Route path="/admin-profile" element={<AdminProfile />} />
              <Route path="/upload-donation" element={<UploadDonation />} />

              <Route
                path="/setting-change-password"
                element={<ChangePassword />}
              />
              {/* <Route path="/privacy" element={<PrivacyPolicy />} /> */}

              {/* <Route path="/settings-profile" element={<Profile />} />  */}

              <Route path="/feedback" element={<Feedback />} />
            </Route>

            <Route path="/login" element={<Login />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
            <Route path="/otp" element={<Otp />} />
            <Route path="/update-password" element={<UpdatePassword />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;
