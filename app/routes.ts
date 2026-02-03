import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
    index("routes/home.tsx"),
    route("font-example", "routes/font-example.tsx"),
] satisfies RouteConfig;
