import './App.css';
import Dashboard from './Components/Dashboard';
import PatienceAdmission from './Components/PatienceAdmission';
import { createBrowserRouter, RouterProvider } from 'react-router';

function App() {
  const routes = createBrowserRouter([
    {
      path: "/",
      Component: Dashboard,
    },
    {
      path: "/patient-admission",
      Component: PatienceAdmission,
    },
  ]);

  // return (
  //   <div className="App">
  //     <header className="App-header">
  //       <Routes>
  //         <Route path="/" element={<Dashboard />} />
  //       </Routes>
  //     </header>
  //   </div>
  // );
  return <RouterProvider router={routes} />;
}

export default App;
