import type { RouteConfig } from "@react-router/dev/routes";
import { index, layout, route } from "@react-router/dev/routes";

export default [
  layout("layouts/sidebar.tsx", [
    index("routes/home.tsx"),
    route("contacts/:contactId", "routes/contacts/contact.tsx"),
    route("contacts/:contactId/edit", "routes/contacts/edit-contact.tsx"),
    route("contacts/:contactId/delete", "routes/contacts/delete-contact.tsx"),
  ]),
  route("about", "routes/about.tsx"),
] satisfies RouteConfig;
