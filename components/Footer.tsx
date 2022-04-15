import { FC } from "react";

// UTILS
import { socials } from "../data/socials";

const Footer: FC = (): JSX.Element => {
  return (
    <footer className="bg-primary bottom-0 p-3">
      <img
        className="w-6 invert mx-auto hover:-translate-y-0.5 transition-all duration-300 hover:cursor-pointer mt-2"
        src="/arrows/top-arrow.svg"
        alt="top-arrow"
        onClick={() => window.scrollTo({ top: 0, left: 0, behavior: "smooth" })}
        title="Back to top"
      />
      <div className="h-48 flex justify-center items-center pb-14">
        <div className="flex border-b border-white">
          {socials.map((social) => {
            return (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferer"
                className="hover:-translate-y-0.5 duration-100 my-4 mx-4"
                title={social.name}
              >
                <img
                  src={social.icon}
                  alt={social.name}
                  className="w-8 invert"
                />
              </a>
            );
          })}
        </div>
      </div>
      <h3 className="text-xs text-white text-center p-0">
        Copyright &copy; {new Date().getFullYear()} | Hugo Batista | All Rights
        Reserved{" "}
      </h3>
    </footer>
  );
};

export default Footer;
