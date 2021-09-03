import { Icon } from '@iconify/react';
import pieChart2Fill from '@iconify/icons-eva/pie-chart-2-fill';
import peopleFill from '@iconify/icons-eva/people-fill';
// import shoppingBagFill from '@iconify/icons-eva/shopping-bag-fill';
import fileTextFill from '@iconify/icons-eva/file-text-fill';
// import lockFill from '@iconify/icons-eva/lock-fill';
// import personAddFill from '@iconify/icons-eva/person-add-fill';
import alertTriangleFill from '@iconify/icons-eva/alert-triangle-fill';
import book from '@iconify/icons-eva/book-open-outline';
import phonecall from '@iconify/icons-eva/phone-call-fill';
import mail from '@iconify/icons-eva/email-outline';

// ----------------------------------------------------------------------

const getIcon = (name) => <Icon icon={name} width={22} height={22} />;

const sidebarConfig = [
  {
    title: 'dashboard',
    path: '/dashboard/app',
    icon: getIcon(pieChart2Fill)
  },
  {
    title: 'Friends',
    path: '/dashboard/user',
    icon: getIcon(peopleFill)
  },
  // {
  //   title: 'product',
  //   path: '/dashboard/products',
  //   icon: getIcon(shoppingBagFill)
  // },
  {
    title: 'School Blogs',
    path: '/dashboard/blog',
    icon: getIcon(fileTextFill)
  },
  {
    title: 'Digi-Library',
    path: '/dashboard/digilibrary',
    icon: getIcon(book)
  },
  // {
  //   title: 'register',
  //   path: '/register',
  //   icon: getIcon(personAddFill)
  // },
  {
    title: 'Notice board',
    path: '/dashboard/NoticeBoard',
    icon: getIcon(mail)
  },
  {
    title: 'About Us',
    path: '/dashboard/AboutUs',
    icon: getIcon(phonecall)
  },
  {
    title: 'Not found',
    path: '/404',
    icon: getIcon(alertTriangleFill)
  }
];

export default sidebarConfig;
