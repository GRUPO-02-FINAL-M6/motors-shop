// import { createContext, useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { api } from "../services/api";

// export const UserContext = createContext({});

// export const UserProvider = ({ children }) => {
//   const [user, setUser] = useState(null);
//   const [loading, setLoading] = useState(false);

//   const currentPath = window.location.pathname;

//   useEffect(() => {
//     const token = localStorage.getItem("@TOKEN");
//     const userId = localStorage.getItem("@USERID");

//     const userLoad = async () => {
//       try {
//         setLoading(true);
//         const { data } = await api.get(`/users/${userId}`, {
//           headers: {
//             Authorization: `Bearer ${token}`,
//           },
//         });
//         setUser(data);
//         navigate(currentPath);
//       } catch (error) {
//         console.log(error);
//         localStorage.removeItem("@TOKEN");
//         localStorage.removeItem("@USERID");
//       } finally {
//         setLoading(false);
//       }
//     };

//     if (token && userId) {
//       userLoad();
//     }
//   }, []);

//   const navigate = useNavigate();

//   const userLogin = async (formData: any) => {
//     try {
//       const { data } = await api.post("/login", formData);
//       setUser(data.user);
//       localStorage.setItem("@TOKEN", data.accessToken);
//       localStorage.setItem("@USERID", data.user.id);
//       navigate("/scraplist");
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   const userRegister = async (formData: any) => {
//     try {
//       await api.post("/users", formData);
//       console.log("Cadastro realizado com sucesso!");
//       navigate("/");
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   const userLogout = () => {
//     setUser(null);
//     localStorage.removeItem("@TOKEN");
//     localStorage.removeItem("@USERID");
//   };

//   return (
//     <UserContext.Provider
//       value={{ user, userLogin, userRegister, userLogout, loading }}>
//       {children}
//     </UserContext.Provider>
//   );
// };
