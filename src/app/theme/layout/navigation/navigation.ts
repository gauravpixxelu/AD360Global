export interface NavigationItem {
  id: string;
  title: string;
  type: 'item' | 'collapse' | 'group';
  translate?: string;
  icon?: string;
  hidden?: boolean;
  url?: string;
  classes?: string;
  exactMatch?: boolean;
  external?: boolean;
  target?: boolean;
  breadcrumbs?: boolean;
  badge?: {
    title?: string;
    type?: string;
  };
  children?: NavigationItem[];
}

export const NavigationItems: NavigationItem[] = [
  {
    id: 'navigation',
    title: 'Navigation',
    type: 'group',
    icon: 'icon-group',
    children: [
      {
        id: 'dashboard',
        title: 'Dashboard',
        type: 'item',
        url: '/super-admin',
        icon: 'feather icon-home',
        breadcrumbs: false
      },
      {
        id: 'accounts',
        title: 'Accounts',
        type: 'item',
        url: '/component/tabs-pills',
        icon: 'feather icon-box',
      },
      {
        id: 'reports',
        title: 'Reports',
        type: 'item',
        url: '/auth/signup',
        icon: 'feather icon-at-sign',
        target: true,
        breadcrumbs: false
      },
      {
        id: 'settings',
        title: 'Settings',
        type: 'item',
        url: '/auth/signin',
        icon: 'feather icon-log-in',
        target: true,
        breadcrumbs: false
      },
      {
        id: 'profile',
        title: 'Profile',
        type: 'item',
        url: '/testing',
        classes: 'nav-item',
        icon: 'feather icon-sidebar'
      },
      {
        id: 'contact',
        title: 'Contact',
        type: 'item',
        url: '/sample-page',
        classes: 'nav-item',
        icon: 'feather icon-sidebar'
      },
      {
        id: 'logout',
        title: 'Logout',
        type: 'item',
        url: '/test',
        icon: 'feather icon-menu',
      }
    ]
  }  
];
