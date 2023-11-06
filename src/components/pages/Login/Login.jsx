// shared component imports
import LoginForm from "../../shared/LoginForm/LoginForm";
import SectionHeading from "../../shared/SectionHeading/SectionHeading";
import LoginSuccessToast from "../../shared/LoginSuccessToast/LoginSuccessToast";

// hook
import useLoginForm from "../../../hooks/useLoginForm";

const Login = () => {
  // extract theme info

  // extract loginInfo state from this hook so that we can pass the toast show/hide state in success toast component below
  const { loginInfo } = useLoginForm();
  return (
    <div>
      <section className="mb-sectionGapSm">
        <LoginSuccessToast show={loginInfo.showSuccessToast} />
        <SectionHeading modifyClasses="mb-4" text={"Log In To Your Account"} />
        <LoginForm />
      </section>
    </div>
  );
};

export default Login;
