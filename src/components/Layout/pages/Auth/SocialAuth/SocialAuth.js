import { faFacebook, faGithub, faGoogle } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect } from "react";
import {
   useSignInWithFacebook,
   useSignInWithGithub,
   useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import { useLocation, useNavigate } from "react-router-dom";
import auth from "../../../../../firebase.init";

const SocialAuth = () => {
   const [signInWithGoogle, googleUser, googleLoading, GoogleError] =
      useSignInWithGoogle(auth);

   const [signInWithFacebook, fbUser, fbLoading, fbError] = useSignInWithFacebook(auth);

   const [signInWithGithub, githubUser, githubLoading, githubError] =
      useSignInWithGithub(auth);

   //handling navigation
   const navigate = useNavigate();
   const location = useLocation();
   let from = location.state?.from?.pathname || "/";

   useEffect(() => {
      if (googleUser || fbUser || githubUser) {
         console.log(googleUser || fbUser || githubUser);
         // navigate("/");
         navigate(from, { replace: true });
      }
   }, [googleUser, fbUser, githubUser, from, navigate]);

   const handleGoogleAuth = () => signInWithGoogle();
   const handleFacebookAuth = () => signInWithFacebook();
   const handleGitHubAuth = () => signInWithGithub();

   return (
      <div className="social-media-auth">
         <h5 className="my-4 ps-2 text-secondary">Choose one of the following methods</h5>
         <div className="d-flex flex-column flex-md-row justify-content-between">
            <button
               className="btn btn-lite shadow-sm px-3 py-2 rounded-pill fw-bold text-primary"
               onClick={handleGoogleAuth}
            >
               <FontAwesomeIcon className="me-2" icon={faGoogle} size="lg" />
               Google
            </button>
            <button
               className="btn btn-lite shadow-sm my-3 my-md-0 px-3 py-2 rounded-pill fw-bold text-primary"
               onClick={handleFacebookAuth}
            >
               <FontAwesomeIcon className="me-2" icon={faFacebook} size="lg" />
               Facebook
            </button>
            <button
               className="btn btn-lite shadow-sm px-3 py-2 rounded-pill fw-bold text-primary"
               onClick={handleGitHubAuth}
            >
               <FontAwesomeIcon className="me-2" icon={faGithub} size="lg" />
               GitHub
            </button>
         </div>
         {(googleLoading || fbLoading || githubLoading) && (
            <p className="text-center my-2">Please wait...</p>
         )}
         {(GoogleError || fbError || githubError) && (
            <p className="text-danger my-2 text-center ps-2">{`Failed: ${
               GoogleError?.code || fbError?.code || githubError?.code
            }`}</p>
         )}
         <div className="py-3 mx-2 d-flex align-items-center">
            <div className="opacity-50 border-bottom border-secondary w-50"></div>
            <span className="px-2 text-secondary">Or</span>
            <div className="opacity-50 border-bottom border-secondary w-50"></div>
         </div>
      </div>
   );
};

export default SocialAuth;
