import classNames from "classnames";
import Link from "next/link";

interface IButtonProps {
  href: string;
  text: string;
  variants: "primary" | "secondary" | string;
}

const Button = ({ href, text, variants = "primary" }: IButtonProps) => {
  return (
    <Link href={href}>
      <a className="w-max relative">
        <div
          className={classNames(
            "py-2 px-3 text-white font-semibold rounded-md ",
            { "bg-blue-600 hover:bg-blue-500": variants === "primary" },
            {
              "bg-transparent hover:opacity-70": variants === "secondary",
            }
          )}
        >
          {text}
        </div>
      </a>
    </Link>
  );
};

export default Button;
