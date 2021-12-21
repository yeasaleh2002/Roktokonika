import './App.css';
import AddTeamMembers from './Components/Dashboard/Admin/AddTeamMembers/AddTeamMembers';
import ManageTeamMembers from './Components/Dashboard/Admin/ManageTeamMembers/ManageTeamMembers';
import UpdateAddTeamMemberInfo from './Components/Dashboard/Admin/UpdateAddTeamMemberInfo/UpdateAddTeamMemberInfo';
import AddPost from './Components/Dashboard/Users/AddPost/AddPost';
import Teams from './Components/Home/About-Teams-Contact/Teams/Teams';
import {
  BrowserRouter ,
  Routes,
  Route,
} from "react-router-dom";
import Posts from './Components/Home/Posts/Posts/Posts';
import Dashboard from './Components/Dashboard/Dashboard/Dashboard';
import ManageAllPosts from './Components/Dashboard/Admin/ManageAllPosts/ManageAllPosts';
import ManagePosts from './Components/Dashboard/Users/ManagePosts/ManagePosts';
import UpdatePost from './Components/Dashboard/Users/UpdatePost/UpdatePost';
import UpdateBloodDonorRegistration from './Components/Dashboard/Users/volunteersRegistration/UpdateBloodDonorRegistration/UpdateBloodDonorRegistration';
import ManageAllBloodDonor from './Components/Dashboard/Admin/ManageAllBloodDonor/ManageAllBloodDonor';
import BloodDonorRegistration from './Components/Dashboard/Users/volunteersRegistration/BloodDonorRegistration/BloodDonorRegistration';
import RoktokonikaSupportHumanityTeamRegistration from './Components/Dashboard/Users/RoktokonikaSupportHumanityTeamRegistration/RoktokonikaSupportHumanityTeamRegistration';
import ManageAllRoktokonikaSupportHumanityTeam from './Components/Dashboard/Admin/ManageAllRoktokonikaSupportHumanityTeam/ManageAllRoktokonikaSupportHumanityTeam';
import RoktokonikaCleanTeamRegistration from './Components/Dashboard/Users/RoktokonikaCleanTeamRegistration/RoktokonikaCleanTeamRegistration';
import ManageAllRoktokonikaCleanTeam from './Components/Dashboard/Admin/ManageAllRoktokonikaCleanTeam/ManageAllRoktokonikaCleanTeam';
import Login from './Components/LoginRegister/Login/Login';
import Register from './Components/LoginRegister/Register/Register';
import AuthProvider from './Components/contexts/AuthProvider/AuthProvider';
import PrivateRoute from './Components/LoginRegister/PrivateRoute/PrivateRoute';
import About from './Components/Home/About-Teams-Contact/About/About';
import Contact from './Components/Home/About-Teams-Contact/Contact/Contact';
import AdminRoute from './Components/LoginRegister/AdminRoute/AdminRoute';
import MakeAdmin from './Components/Dashboard/Admin/MakeAdmin/MakeAdmin';
import Volunteers from './Components/Home/Volunteers/Volunteers/Volunteers';
import RoktokonikaCleanTeam from './Components/Home/Volunteers/RoktokonikaCleanTeam/RoktokonikaCleanTeam';
import RoktokonikaBloodDonorTeam from './Components/Home/Volunteers/RoktokonikaBloodDonorTeam/RoktokonikaBloodDonorTeam';
import RoktokonikaSupportHumanityTeam from './Components/Home/Volunteers/RoktokonikaSupportHumanityTeam/RoktokonikaSupportHumanityTeam';
import NotFound from './Components/Shared/NotFound/NotFound';


function App() {
  return (
    <div className="App">
       <AuthProvider>
         <BrowserRouter>
          
              <Routes>
                <Route path="//" element={<Posts></Posts>} />
                <Route path="//posts" element={<Posts></Posts>} />           
                <Route path="/login" element={<Login></Login>} />
                <Route path="/register" element={<Register></Register>} />
                <Route path="/teams" element={<Teams></Teams>} />   
                <Route path="/about" element={<About> </About>} />
                <Route path="/Contact" element={<Contact></Contact>} />

              
            
                <Route path="/dashboard" element={<PrivateRoute>  <Dashboard> </Dashboard> </PrivateRoute> } >

                    <Route path="/dashboard/addPost" element={<PrivateRoute><AddPost></AddPost></PrivateRoute> } />
                    <Route path="/dashboard/" element={<PrivateRoute><AddPost></AddPost></PrivateRoute> } />
                    <Route path="/dashboard/managePosts" element={<PrivateRoute><ManagePosts></ManagePosts></PrivateRoute> } />
                    <Route path="/dashboard/updatePost" element={<PrivateRoute><UpdatePost></UpdatePost></PrivateRoute>} />
                    <Route path="/dashboard/bloodDonorRegistration" element={<PrivateRoute><BloodDonorRegistration></BloodDonorRegistration></PrivateRoute>} />
                    <Route path="/dashboard/updateBloodDonorRegistration" element={<PrivateRoute><UpdateBloodDonorRegistration></UpdateBloodDonorRegistration></PrivateRoute>} />
                    <Route path="/dashboard/roktokonikaCleanTeamRegistration" element={<PrivateRoute><RoktokonikaCleanTeamRegistration></RoktokonikaCleanTeamRegistration></PrivateRoute>} />
                    <Route path="/dashboard/roktokonikaSupportHumanityTeamRegistration" element={<PrivateRoute><RoktokonikaSupportHumanityTeamRegistration></RoktokonikaSupportHumanityTeamRegistration></PrivateRoute>} />


                    <Route path="/dashboard/manageAllPosts"  element={<AdminRoute><ManageAllPosts></ManageAllPosts></AdminRoute> } />
                    <Route path="/dashboard/addTeamMembers"  element={ <AdminRoute> <AddTeamMembers></AddTeamMembers> </AdminRoute> } />
                    <Route path="/dashboard/manageTeamMembers"  element={ <AdminRoute><ManageTeamMembers></ManageTeamMembers> </AdminRoute>} />
                    <Route path="/dashboard/updateAddTeamMembers"  element={ <AdminRoute> <UpdateAddTeamMemberInfo></UpdateAddTeamMemberInfo></AdminRoute>} />
                    <Route path="/dashboard/manageAllBloodDonor"  element={<AdminRoute><ManageAllBloodDonor></ManageAllBloodDonor></AdminRoute>} />
                    <Route path="/dashboard/manageAllRoktokonikaCleanTeam"  element={<AdminRoute><ManageAllRoktokonikaCleanTeam></ManageAllRoktokonikaCleanTeam></AdminRoute>} />
                    <Route path="/dashboard/manageAllRoktokonikaSupportHumanityTeam"  element={<AdminRoute><ManageAllRoktokonikaSupportHumanityTeam></ManageAllRoktokonikaSupportHumanityTeam></AdminRoute>} />
                    <Route path="/dashboard/makeAdmin"  element={<AdminRoute><MakeAdmin></MakeAdmin></AdminRoute>} />
               
                </Route>
                    

                <Route path="/volunteers" element={<PrivateRoute><Volunteers> </Volunteers></PrivateRoute>} >
                  <Route path="/volunteers/" element={<RoktokonikaBloodDonorTeam></RoktokonikaBloodDonorTeam>} />
                  <Route path="/volunteers/roktokonikaBloodDonorTeam" element={<RoktokonikaBloodDonorTeam></RoktokonikaBloodDonorTeam>} >
                  </Route>
                  <Route path="/volunteers/roktokonikaCleanTeam" element={<RoktokonikaCleanTeam></RoktokonikaCleanTeam>} />
                  <Route path="/volunteers/roktokonikaSupportHumanityTeam" element={<RoktokonikaSupportHumanityTeam></RoktokonikaSupportHumanityTeam>} />                 
                </Route>
                <Route path="*" element={<NotFound></NotFound>}></Route>
              </Routes>
         
        </BrowserRouter>
      </AuthProvider>

    </div>
  );
}

export default App;

