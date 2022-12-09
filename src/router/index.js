
// import { createBrowserRouter, Route } from "react-router-dom";
// import { LoginPage } from "../pages/Login";
// import { HomePage } from "../pages/Home";
// import { ProfilePage } from "../pages/Profile";
// import { SettingsPage } from "../pages/Settings";
// import { ProtectedLayout } from "../components/ProtectedRoute";
// import { HomeLayout } from "../components/HomeLayout";

// // interface RouteObject {
// //     caseSensitive?: boolean;
// //     children?: RouteObject[];
// //     element?: React.ReactNode;
// //     index?: boolean;
// //     path?: string;
// // }

// // declare function createRoutesFromElements(
// //     children: React.ReactNode
// //   ): RouteObject[];

// export const router = createBrowserRouter(
//     createRoutesFromElements(
//       <>
//         <Route element={<HomeLayout />}>
//           <Route path="/" element={<HomePage />} />
//           <Route path="/login" element={<LoginPage />} />
//         </Route>

//         <Route path="/dashboard" element={<ProtectedLayout />}>
//           <Route path="profile" element={<ProfilePage />} />
//           <Route path="settings" element={<SettingsPage />} />
//         </Route>
//       </>
//     )
//   );