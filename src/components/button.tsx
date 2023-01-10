import React from "react";
import Link from "next/link";
import { StyledButton } from "../styles/componentStyles";

interface IButton {
  buttonText: string;
  buttonUrl: string;
  isLink: boolean;
  className?: string;
  target?: string;
  rel?: string;
  download?: boolean;
  children?: React.ReactNode;
}

const Button: React.FC<IButton> = ({
  buttonText,
  buttonUrl,
  className,
  target,
  rel,
  isLink,
  download,
}) => {
  return <>
    {isLink ? (
      <Link href={buttonUrl} passHref legacyBehavior>
        <StyledButton className={className}>
          <div className="btn-21">
            <span>{buttonText}</span>
          </div>
        </StyledButton>
      </Link>
    ) : (
      <StyledButton
        href={buttonUrl}
        target={target}
        rel={rel}
        className={className}
        download={download}
      >
        <div className="btn-21">
          <span>{buttonText}</span>
        </div>
      </StyledButton>
    )}
  </>;
};

export default Button;
