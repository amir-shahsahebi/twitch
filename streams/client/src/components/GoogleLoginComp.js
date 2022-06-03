import { useGoogleLogin } from "@react-oauth/google";
import { googleLogout } from "@react-oauth/google";
import { GoogleLogin } from "@react-oauth/google";

googleLogout();
const GoogleLoginComp = () => {
  const login = useGoogleLogin({
    onSuccess: (tokenResponse) => console.log(tokenResponse),
  });
  return (
    <div className="logIn">
      <GoogleLogin
        onSuccess={(credentialResponse) => {
          console.log(credentialResponse);
        }}
        onError={() => {
          console.log("Login Failed");
        }}
      />
      {/* <button onClick={() => login()}>Sign in with Google 🚀</button>
      <button onClick={() => googleLogout()}>log out</button> */}
    </div>
  );
};

export default GoogleLoginComp;
