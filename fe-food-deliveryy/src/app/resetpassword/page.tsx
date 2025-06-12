import { Resetpassword } from "./_components/Resetpassword";
import { RightPhoto } from "./_components/rigthPhoto";

const ResetPasswordPage = () => {
  return (
    <div className="w-screen h-screen flex p-5">
      <div className="flex-1/5 h-full justify-center">
        <Resetpassword />
      </div>

      <div className="flex-2/5 h-full">
        <RightPhoto />
      </div>
    </div>
  );
};
export default ResetPasswordPage;
