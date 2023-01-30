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

const utilities = {
    id: 'utilities',
    // title: 'Utilities',
    type: 'group',
    children: [
        {
            id: 'Profile-Verification',
            title: 'Profile Verification',
            type: 'item',
            url: '/Admin/ProfileVerification',
            icon: icons.HowToRegIcon,
            breadcrumbs: false
        },
        {
            id: 'Transfer-Verification',
            title: 'Transfer Verification',
            type: 'item',
            url: '/Admin/TransferVerification',
            icon: icons.TransferWithinAStationIcon,
            breadcrumbs: false
        },
        {
            id: 'Promotion-Verification',
            title: 'Promotion Verification',
            type: 'item',
            url: '/Admin/PromotionVerification',
            icon: icons.WorkOutlineIcon,
            breadcrumbs: false
        },
        {
            id: 'Useranagement',
            title: 'User Management',
            type: 'item',
            url: '/Admin/UserManagement',
            icon: icons.CreateIcon,
            breadcrumbs: false
        },
    
        {
            id: 'Admin-profile',
            title: 'View Profile',
            type: 'item',
            url: '/Admin/AdminProfile',
            icon: icons.PreviewIcon,
            breadcrumbs: false
        },
       
    ]
};

export default utilities;
