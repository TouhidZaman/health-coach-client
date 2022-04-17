import { BrowserRouter } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import MyRoutes from "./components/MyRoutes";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
   return (
      <BrowserRouter>
         <Layout>
            <MyRoutes />
         </Layout>
      </BrowserRouter>
   );
}

export default App;
