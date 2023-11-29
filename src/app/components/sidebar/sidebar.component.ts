import { Component, OnInit } from '@angular/core';

declare const $: any;
declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}
export const ROUTES: RouteInfo[] = [
    { path: '/dashboard', title: 'Dashboard',  icon: 'dashboard', class: '' },
    { path: '/manage-survey', title: 'Manage Survey',  icon: 'content_paste', class: '' },
    { path: '/manage-questions', title: 'Manage Questions',  icon: 'contact_support', class: '' },
    { path: '/icons', title: 'Reports',  icon:'bubble_chart', class: '' },
    { path: '/settings/user-profile', title: 'Setting',  icon:'settings', class: '' },

    // { path: '/empty', title: 'Empty Page',  icon:'unarchive', class: '' },
    
    



    { path: '/maps', title: 'Maps',  icon:'location_on', class: '' },
    { path: '/misc/notifications', title: 'Notifications',  icon:'notifications', class: '' },
    // { path: '/upgrade', title: 'Upgrade to PRO',  icon:'unarchive', class: 'active-pro' },
];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  menuItems: any[];

  constructor() { }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
  }
  isMobileMenu() {
      if ($(window).width() > 991) {
          return false;
      }
      return true;
  };
}
