import { Logo } from "../../assets/icons";
import SignForm from "../../components/SignInForm";

const SignIn = () => {
  return (
    <div className="flex items-center justify-center h-[100vh] ">
      <div className="w-[360px] mx-auto ">
        <div className="flex items-center justify-center gap-[20px] mb-[30px] text-[var(--clr-gold)]">
          <Logo />
          <p className="text-[25px] text-[#000]">Admin paneli</p>
        </div>
        <SignForm />
      </div>
    </div>
  );
};

export default SignIn;
