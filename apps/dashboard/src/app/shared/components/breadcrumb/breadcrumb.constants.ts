export const ROUTE_BREADCRUMBS_CHAIN: { [key: string]: string[] } = {
  dashboard: ['sidebar_dashboard'],
  products: ['sidebar_products'],
  'products/form': ['sidebar_products', 'sidebar_products_form_add'],
  'products/form/:id': ['sidebar_products', 'sidebar_products_form_edit'],
  categories: ['sidebar_categories'],
  'categories/add': ['sidebar_categories', 'sidebar_categories_add'],
  'categories/update/:id': ['sidebar_categories', 'sidebar_categories_edit'],
  occasions: ['sidebar_occasions'],
  'occasions/add': ['sidebar_occasions', 'sidebar_occasions_add'],
  'occasions/update/:id': ['sidebar_occasions', 'sidebar_occasions_edit'],
  profile: ['user_dropdown_my_profile_label'],
};

export const BREADCRUMB_LINKS: { [key: string]: string } = {
  sidebar_dashboard: '/dashboard/overview',
  sidebar_products: '/dashboard/products',
  sidebar_categories: '/dashboard/categories',
  sidebar_occasions: '/dashboard/occasions',
  user_dropdown_my_profile_label: '/dashboard/profile',
};
