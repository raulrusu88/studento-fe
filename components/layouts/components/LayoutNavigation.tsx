import Button from "../../common/Button";
import Divider from "../../common/Divider";
import StudentoLogo from "./StudentoLogo";

const buttons = [
  { id: 1, text: "Post item", href: "#", variants: "primary" },
  { id: 2, text: "Log In", href: "#", variants: "secondary" },
];

const NavigationLayout = () => {
  return (
    <div className="w-full flex h-16 bg-blue-700 justify-between items-center px-10">
      <StudentoLogo />
      <div className="w-max h-full flex items-center gap-x-4">
        {buttons.map((b) => (
          <Button key={b.id} {...b} />
        ))}
        {/* Separation Line */}
        <Divider />
        <Button href="#" text="Sign Up" variants="secondary" />
      </div>
    </div>
  );
};

export default NavigationLayout;
