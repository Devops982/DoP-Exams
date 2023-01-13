import React from 'react'
import { Sidebar, Menu, MenuItem, useProSidebar } from 'react-pro-sidebar';
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import ContactsOutlinedIcon from "@mui/icons-material/ContactsOutlined";
import ReceiptOutlinedIcon from "@mui/icons-material/ReceiptOutlined";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import { Link } from 'react-router-dom';

const Component_SideBar = () => {
    const { collapseSidebar } = useProSidebar();
  return (
    <>
        <div id="app" style={({ height: "100vh" }, { display: "flex" })}>
      <Sidebar style={{ height: "100vh" }}>
        <Menu>
          <MenuItem
            icon={<MenuOutlinedIcon />}
            onClick={() => {
              collapseSidebar();
            }}
            style={{ textAlign: "center" }}
          >
            {" "}
            
          </MenuItem>

          <MenuItem icon={<HomeOutlinedIcon />} routerLink={<Link to="/signup" />}>Part 1 Registration </MenuItem>
          <MenuItem icon={<PeopleOutlinedIcon />}>Part 2 Registration </MenuItem>
          <MenuItem icon={<ContactsOutlinedIcon />}>Update Transfer </MenuItem>
          <MenuItem icon={<ReceiptOutlinedIcon />}>Update Promotion</MenuItem>
          <MenuItem icon={<HelpOutlineOutlinedIcon />}>FAQ</MenuItem>
          <MenuItem icon={<CalendarTodayOutlinedIcon />}>Calendar</MenuItem>
          <MenuItem icon={<CalendarTodayOutlinedIcon />}>Apply for Exam</MenuItem>
          <MenuItem icon={<CalendarTodayOutlinedIcon />}>View Applied Exams</MenuItem>
          <MenuItem icon={<CalendarTodayOutlinedIcon />}>View Profile</MenuItem>
        </Menu>
      </Sidebar>
      
    </div>
    </>
  )
}

export default Component_SideBar