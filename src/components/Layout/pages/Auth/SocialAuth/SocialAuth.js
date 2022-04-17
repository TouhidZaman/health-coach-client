import { faFacebook, faGithub, faGoogle } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const SocialAuth = () => {
   const handleGoogleSignUp = () => alert("google");
   const handleFacebookSignUp = () => alert("facebook");
   const handleGitHubSignUp = () => alert("github");

   return (
      <div className="social-media-auth">
         <h5 className="my-4 ps-2 text-secondary">
            Choose one of the following methods
         </h5>
         <div className="d-flex flex-column flex-md-row justify-content-between">
            <button
               className="btn btn-lite shadow-sm px-3 py-2 rounded-pill fw-bold text-primary"
               onClick={handleGoogleSignUp}
            >
               <FontAwesomeIcon className="me-2" icon={faGoogle} size="lg" />
               Google
            </button>
            <button
               className="btn btn-lite shadow-sm my-3 my-md-0 px-3 py-2 rounded-pill fw-bold text-primary"
               onClick={handleFacebookSignUp}
            >
               <FontAwesomeIcon className="me-2" icon={faFacebook} size="lg" />
               Facebook
            </button>
            <button
               className="btn btn-lite shadow-sm px-3 py-2 rounded-pill fw-bold text-primary"
               onClick={handleGitHubSignUp}
            >
               <FontAwesomeIcon className="me-2" icon={faGithub} size="lg" />
               GitHub
            </button>
         </div>
         <div className="py-3 mx-2 d-flex align-items-center">
            <div className="border-bottom border-secondary w-50"></div>
            <span className="px-2">Or</span>
            <div className="border-bottom border-secondary w-50"></div>
         </div>
      </div>
   );
};

export default SocialAuth;
