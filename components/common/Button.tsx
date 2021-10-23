import classNames from "classnames";
import Link from "next/link";

interface IButtonProps {
  href?: string;
  serverCall?: string;
  text: string;
  variants: "primary" | "secondary" | string;
  onClick?: () => any;
}

const Button = ({
  href = "#",
  serverCall,
  text,
  variants = "primary",
  onClick,
}: IButtonProps) => {
  return (
    <>
      {serverCall ? (
        <a className="w-max relative" onClick={onClick} href={serverCall}>
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
      ) : (
        <Link href={href} passHref>
          <a className="w-max relative" onClick={onClick} href={serverCall}>
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
      )}
    </>
  );
};

export default Button;
