import styled from "styled-components";

const StyledButton = styled.a`
  .btn-21 {
    cursor: pointer;
    letter-spacing: 2px;
    text-transform: uppercase;
    font-family: Marvel;
    font-size: 20px;
    width: 200px;
    height: 45px;
    margin: 20px;
    position: relative;
    color: ${({ theme }) => theme.textSecond};
    z-index: 1;
    transition: all 0.5s ease-in-out;
    border-radius: 0px;
    background: transparent;
    padding: 0;
    overflow: hidden;
    border: none;
  }

  .btn-21:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 2px;
    background: ${({ theme }) => theme.accentMain};
    animation: btn-21-right 2s linear infinite;
    transition: 0.5s ease-in-out;
  }

  .btn-21:after {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    width: 2px;
    height: 100%;
    background: ${({ theme }) => theme.accentMain};
    animation: btn-21-bottom 2s linear infinite;
    animation-delay: 1s;
    transform: translateY(-100%);
  }

  .btn-21 span {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
  }

  .btn-21 span:after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 2px;
    background: ${({ theme }) => theme.accentMain};
    animation: btn-21-left 2s linear infinite;
  }

  .btn-21 span:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 2px;
    height: 100%;
    background: ${({ theme }) => theme.accentMain};
    animation: btn-21-top 2s linear infinite;
    animation-delay: 1s;
    transform: translateY(-100%);
  }

  .btn-21:hover:before {
    background: linear-gradient(to right, transparent, deepblue);
  }

  .btn-21:hover:after {
    background: linear-gradient(to bottom, transparent, deepblue);
  }

  .btn-21 span:hover:before {
    background: linear-gradient(to top, transparent, deepblue);
  }

  .btn-21 span:hover:after {
    background: linear-gradient(to left, transparent, deepblue);
  }

  .btn-21:hover {
    color: ${({ theme }) => theme.textSecond};
  }

  .btn-21:active:before {
    background: linear-gradient(to right, transparent, #2a00fc);
  }

  .btn-21:active:after {
    background: linear-gradient(to bottom, transparent, #2a00fc);
  }

  .btn-21 span:active:before {
    background: linear-gradient(to top, transparent, #2a00fc);
  }

  .btn-21 span:active:after {
    background: linear-gradient(to left, transparent, #2a00fc);
  }

  .btn-21:active {
    color: ${({ theme }) => theme.textSecond};
  }

  @keyframes btn-21-right {
    0% {
      transform: translateX(-100%);
    }

    100% {
      transform: translateX(100%);
    }
  }

  @keyframes btn-21-top {
    0% {
      transform: translateY(100%);
    }

    100% {
      transform: translateY(-100%);
    }
  }

  @keyframes btn-21-left {
    0% {
      transform: translateX(100%);
    }

    100% {
      transform: translateX(-100%);
    }
  }

  @keyframes btn-21-bottom {
    0% {
      transform: translateY(-100%);
    }

    100% {
      transform: translateY(100%);
    }
  }

  .btn-21:focus {
    outline: none;
  }
  @media only screen and (max-width: 480px) {
    font-size: var(--fz-xs);
  }
`;

export default StyledButton;
