import {
  type RouteConfig,
  index,
  layout,
  prefix,
  route,
} from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("about", "routes/about.tsx"),
  route("post/:postId", "routes/post.tsx"),

  // Create nested routes
  // case-b01
  // route("dashboard", "routes/dashboard.tsx", [
  //   index("routes/index-dashboard.tsx"),
  //   route("finances", "routes/finances.tsx"),
  //   route("personal-info", "routes/personal-info.tsx"),
  // ]),

  // case-b02
  // layout("routes/dashboard.tsx", [
  //   route("finances", "routes/finances.tsx"),
  //   route("personal-info", "routes/personal-info.tsx"),
  // ]),

  // case-b03
  // the purpose of prefix using for create group name of children item is this group
  // for example: As this code below, url path is "/dashboard/", "/dashboard/finances", "/dashboard/personal-info"
  layout("routes/dashboard.tsx", [
    ...prefix("dashboard", [
      index("routes/index-dashboard.tsx"),
      route("finances", "routes/finances.tsx"),
      route("personal-info", "routes/personal-info.tsx"),
    ]),
  ]),
] satisfies RouteConfig;
