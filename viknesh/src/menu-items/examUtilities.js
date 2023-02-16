// assets
import { IconTypography, IconPalette, IconShadow, IconWindmill } from '@tabler/icons';
import HowToRegIcon from '@mui/icons-material/HowToReg';
import TransferWithinAStationIcon from '@mui/icons-material/TransferWithinAStation';
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';
import CreateIcon from '@mui/icons-material/Create';
import PreviewIcon from '@mui/icons-material/Preview';
// constant
const icons = {
    IconTypography,
    IconPalette,
    IconShadow,
    IconWindmill,
    HowToRegIcon,
    TransferWithinAStationIcon,
    WorkOutlineIcon,
    CreateIcon,
    PreviewIcon,
};

// ==============================|| UTILITIES MENU ITEMS ||============================== //

const examutilities = {
  id: "examutilities",
  title: 'Exam Management',
  type: "group",
  children: [
    {
      id: "Profile-Verification-Main",
      title: "Exam Configuration",
      type: "item",
      url: "/Admin/ProfileVerificationMain",
      icon: icons.HowToRegIcon,
      breadcrumbs: false,
    },
    {
      id: "Transfer-Verification-Main",
      title: "Exam Conducting Offices",
      type: "item",
      url: "/Admin/TransferVerificationMain",
      icon: icons.TransferWithinAStationIcon,
      breadcrumbs: false,
    },
    {
      id: "Promotion-Verification",
      title: "Exam Calender",
      type: "item",
      url: "/Admin/PromotionVerificationMain",
      icon: icons.WorkOutlineIcon,
      breadcrumbs: false,
    },
    {
      id: "UseraManagement",
      title: "Mapping of Officers for Exam",
      type: "item",
      url: "/Admin/UserManagement",
      icon: icons.CreateIcon,
      breadcrumbs: false,
    },

    {
      id: "OfficeManagement",
      title: "Schedule/Notification",
      type: "item",
      url: "/Admin/OfficeManagement",
      icon: icons.CreateIcon,
      breadcrumbs: false,
    },

    {
      id: "Admin-profile",
      title: "Documents Upload",
      type: "item",
      url: "/Admin/AdminProfile",
      icon: icons.PreviewIcon,
      breadcrumbs: false,
    },
    {
      id: "Reports-Dashboard",
      title: "Vacancy Details",
      type: "item",
      url: "/Admin/ReportsDashboard",
      icon: icons.WorkOutlineIcon,
      breadcrumbs: false,
    },

    {
      id: "IP-Details",
      title: "Candidate List",
      type: "item",
      url: "/Admin/IPDetails",
      icon: icons.PreviewIcon,
      breadcrumbs: false,
    },


    {
      id: "IP-Details",
      title: "Exam Center",
      type: "item",
      url: "/Admin/IPDetails",
      icon: icons.PreviewIcon,
      breadcrumbs: false,
    },


    {
      id: "IP-Details",
      title: "Generate Hall Ticket",
      type: "item",
      url: "/Admin/IPDetails",
      icon: icons.PreviewIcon,
      breadcrumbs: false,
    },
  ],
};

export default examutilities;
