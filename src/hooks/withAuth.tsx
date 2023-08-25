import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Home from "../pages";

const withAuth = (WrappedComponent: any) => {
  const navigate = useNavigate();

  return (props: any) => {
    const verified = false;

    useEffect(() => {
      const checkUser = async () => {
        if (!verified) {
          navigate("/");
        }
      };
      checkUser();
    }, []);

    if (verified) {
      return <WrappedComponent {...props} />;
    } else {
      return <Home />;
    }
  };
};

export default withAuth;
