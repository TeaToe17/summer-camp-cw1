import { Navigate } from "react-router-dom";


export default function ProtectedRoute({ children, condition ,noAccess }) {
  return !condition ? noAccess : children;

  // if (condition == "true"){
  //   return children
  // }else { return noAccess}
}
