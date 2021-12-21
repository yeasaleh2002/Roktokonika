import { useEffect, useState } from "react";
import { getAuth, onAuthStateChanged , createUserWithEmailAndPassword ,signInWithEmailAndPassword , updateProfile , signOut } from "firebase/auth";
import initializeFirebase from "../LoginRegister/Firebase/firebase.init";





// initialize firebase app
initializeFirebase();

const useFirebase = () => {
  
     const [user, setUser] = useState({});

      // loading state declare
    const [isLoading, setIsLoading] = useState(true);
       
       // error state declare
     const [authError, setAuthError] = useState('');

     // check admin state declare
     const [admin , setAdmin] = useState(false);


     // getAuth declare
     const auth = getAuth();



     const registerUser = (email, password,name, navigate) =>{
       
       //set is loading using
       setIsLoading(true);
      
      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
           
         setAuthError('');

         const newUser = {email: email, displayName: name};
         setUser(newUser);

        // save user to the database in register time
           saveUser(email, name)
            
        // replace register user in posts page
        navigate('/');


        //send name to firebase after creation
        updateProfile(auth.currentUser, {
          displayName: name
       
        })
        .then(() => {
          
        })
        .catch((error) => {
         
        });
        
        })
        .catch((error) => {
            
                setAuthError(error.message);
        
          })
                // set is loading using
          .finally( () => setIsLoading(false));
     }





     // ---------handle login user----------
      const loginUser = ( email, password, location, navigate) => {
        
       //set is loading using
       setIsLoading(true);
      
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
        
          // redirect login user after login
          const destination = location?.state?.from || '/dashboard';
          navigate(destination);

          setAuthError('');
        })
        .catch((error) => {
        
          setAuthError(error.message);
        })        
               // set is loading using
         .finally( () => setIsLoading(false));
      }


     //------ observe user state- onAuthStateChanged  usages by useEffect
        useEffect( () => {
          const unsubscribe = onAuthStateChanged(auth, (user) => {
                if (user) {       
                  setUser(user);
                }               
               else {
                  setUser({})
                }
                 
                  //set is loading using
                  setIsLoading(false);                 
              });
               return () => unsubscribe;
        } , [auth])



        // -------- check admin useEffect declare -----------
          useEffect( () => {
             fetch(`http://localhost:5000/users/${user.email}`)
             .then(res => res.json())
             .then(data => setAdmin(data.admin))
          } , [user.email])



     // handle logOut function working
     const logOut = () => {

        signOut(auth).then(() => {
            // Sign-out successful.
          }).catch((error) => {
            // An error happened.
          })
           // set is loading 
         .finally( () => setIsLoading(false));
     }


     // save users information in database
     const saveUser = (email, displayName) => {
           const user = {email, displayName};
           fetch('http://localhost:5000/users', {
             method: 'POST',
             headers: {
               'content-type' : 'application/json'
             },
             body: JSON.stringify(user)
           })
            .then()
     }

 

     return {
             
         user,
         admin,
         isLoading,
         authError,
         registerUser,
         loginUser,
         logOut

     }
}

export default useFirebase;