// import React from "react";
// import ReactDOM from "react-dom";
// import { BrowserRouter as Router } from "react-router-dom";
// import App from "./App.js";
// import {
//   AddressProvider,
//   AuthProvider,
//   DataProvider,
//   ProductsDataProvider,
// } from "contexts";
// import "assets";

// // ReactDOM.render(
// //   <React.StrictMode>
// //     <AuthProvider>
// //       <AddressProvider>
// //         <ProductsDataProvider>
// //           <DataProvider>
// //             <Router>
// //               <App />
// //             </Router>
// //           </DataProvider>
// //         </ProductsDataProvider>
// //       </AddressProvider>
// //     </AuthProvider>
// //   </React.StrictMode>,
// //   document.getElementById("root")
// // );
// var rootElement = ReactDOM.createRoot(document.getElementById("root"));
// rootElement.render(
// <>
//  <React.StrictMode>
//   <AuthProvider>
//     <AddressProvider>
//       <ProductsDataProvider>
//         <DataProvider>
//           <Router> 
//             <App />
//           </Router>
//         </DataProvider>
//       </ProductsDataProvider>
//     </AddressProvider>
//   </AuthProvider>
// </>
// );




import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App.js";
import {
  AddressProvider,
  AuthProvider,
  DataProvider,
  ProductsDataProvider,
} from "contexts";
import "assets";

// Configure React to enable Concurrent Mode
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <AddressProvider>
        <ProductsDataProvider>
          <DataProvider>
            <Router>
              <App />
            </Router>
          </DataProvider>
        </ProductsDataProvider>
      </AddressProvider>
    </AuthProvider>
  </React.StrictMode>
);


