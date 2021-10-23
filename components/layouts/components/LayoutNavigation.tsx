import { useUser } from "@auth0/nextjs-auth0";

import Button from "../../common/Button";
import Divider from "../../common/Divider";
import StudentoLogo from "./StudentoLogo";

const NavigationLayout = () => {
  const user = useUser();

  return (
    <div className="w-full flex h-16 bg-blue-700 justify-between items-center px-10">
      <StudentoLogo />
      <div className="w-max h-full flex items-center gap-x-4">
        <Button text="Post item" variants="primary" href="#" />
        {user.user ? (
          <Button
            text="Sign out"
            serverCall="/api/auth/logout"
            variants="secondary"
          />
        ) : (
          <>
            <Button
              serverCall="/api/auth/login"
              text="Login"
              variants="secondary"
            />
            {/* Separation Line */}
            <Divider />
            <Button href="#" text="Sign Up" variants="secondary" />
          </>
        )}
      </div>
    </div>
  );
};

export default NavigationLayout;
