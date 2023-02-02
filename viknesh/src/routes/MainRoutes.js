import { lazy } from 'react';

// project imports
import MainLayout from 'layout/MainLayout';
import Loadable from 'ui-component/Loadable';
import Home from 'views/pages/Home';
import ProfileVerification from 'views/pages/ProfileVerification';
import TransferVerification from 'views/pages/TransferVerification';
import PromotionVerification from 'views/pages/PromotionVerification';
import AdminProfile from 'views/pages/AdminProfile';
import UserManagement from 'views/pages/UserManagement';
import ReportsDashboard from 'views/pages/ReportsDashboard';
import ProfileVerificationMain from "views/pages/ProfileVerificationMain";
import TransferVerificationMain from 'views/pages/TransferVerificationMain';
// dashboard routing
const DashboardDefault = Loadable(lazy(() => import('views/dashboard/Default')));

// utilities routing
const UtilsTypography = Loadable(lazy(() => import('views/utilities/Typography')));
const UtilsColor = Loadable(lazy(() => import('views/utilities/Color')));
const UtilsShadow = Loadable(lazy(() => import('views/utilities/Shadow')));
const UtilsMaterialIcons = Loadable(lazy(() => import('views/utilities/MaterialIcons')));
const UtilsTablerIcons = Loadable(lazy(() => import('views/utilities/TablerIcons')));

// sample page routing
const SamplePage = Loadable(lazy(() => import('views/sample-page')));

// ==============================|| MAIN ROUTING ||============================== //

const MainRoutes = {
  path: "/Admin",
  element: <MainLayout />,
  children: [
    {
      path: "",
      element: <DashboardDefault />,
    },
    {
      path: "/Admin",
      children: [
        {
          path: "Admin",
          element: <DashboardDefault />,
        },
      ],
    },
    {
      path: "",
      children: [
        {
          path: "ProfileVerification",
          element: <ProfileVerification />,
        },
      ],
    },

    {
      path: "",
      children: [
        {
          path: "ProfileVerificationMain",
          element: <ProfileVerificationMain />,
        },
      ],
    },

    {
      path: "",
      children: [
        {
          path: "TransferVerificationMain",
          element: <TransferVerificationMain />,
        },
      ],
    },

    {
      path: "",
      children: [
        {
          path: "TransferVerification",
          element: <TransferVerification />,
        },
      ],
    },
    {
      path: "",
      children: [
        {
          path: "PromotionVerification",
          element: <PromotionVerification />,
        },
      ],
    },
    {
      path: "",
      children: [
        {
          path: "UserManagement",
          element: <UserManagement />,
        },
      ],
    },

    {
      path: "",
      children: [
        {
          path: "AdminProfile",
          element: <AdminProfile />,
        },
      ],
    },
    {
      path: "",
      children: [
        {
          path: "ReportsDashboard",
          element: <ReportsDashboard />,
        },
      ],
    },
  ],
};

export default MainRoutes;
