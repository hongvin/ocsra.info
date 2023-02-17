import React from "react";
import { useRouter } from "next/router";
import { useHotkeys } from "react-hotkeys-hook";

export default function Input({ fullAddress }) {

  const [isOpen, setIsOpen] = React.useState(false);
  const [address, setAddress] = React.useState(fullAddress ? fullAddress : "");
  const [isLoading, setIsLoading] = React.useState(false);
  const [pressed, setPressed] = React.useState(false);

  React.useEffect(() => {
    const handleStart = (url) => url !== router.asPath && setIsLoading(true);
    const handleComplete = (url) =>
      url === router.asPath && setIsLoading(false);
    router.events.on("routeChangeStart", handleStart);
    router.events.on("routeChangeComplete", handleComplete);
    router.events.on("routeChangeError", handleComplete);
    return () => {
      router.events.off("routeChangeStart", handleStart);
      router.events.off("routeChangeComplete", handleComplete);
      router.events.off("routeChangeError", handleComplete);
    };
  });

  const router = useRouter();

  const [isMac, setIsMac] = React.useState(null);
  React.useEffect(() => {
    const userAgent = window.navigator.userAgent;
    setIsMac(userAgent.search("Mac") !== -1 ? true : false);
  });

  const handleClick = () => {
    setIsLoading(true);
    router.push(`/score/${address}`);
  };

  const handleEnter = (e) => {
    if (e.keyCode === 13) {
      handleClick();
    }
  };

  const [hide, setHide] = React.useState(false);

  const inputRef = React.useRef();
  if (isMac) {
    useHotkeys("cmd+/", () => {
      inputRef.current.focus();
      setTimeout(() => setPressed(false), 500);
      setPressed(true);
    });
  } else {
    useHotkeys("ctrl+/", () => {
      inputRef.current.focus();
      setTimeout(() => setPressed(false), 500);
      setPressed(true);
    });
  }

  const ref = React.createRef();

  return (
    <div className="Input">
      <ul
        className={`blockchains ${isOpen ? "open" : ""}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <span class="material-symbols-outlined">
expand_more
</span>
        <li
          className="blockchainActive"
          onClick={() => setIsOpen(!isOpen)}
          ref={ref}
        >
          <img src="/blockchains/eth.svg" alt="Etherium" />
          <span>Etherium</span>
        </li>
        
      </ul>
      <div className="field">
        <div className="inputWrapper">
          <input
            ref={inputRef}
            type="text"
            id="fullAddress"
            placeholder="0x... or .eth address"
            name="address"
            required
            onChange={(e) => setAddress(e.target.value)}
            onKeyDown={handleEnter}
            defaultValue={address}
            autoComplete="true"
            onFocus={() => setHide(!hide)}
            onBlur={() => setHide(!hide)}
          />
          <div className={`loading${isLoading ? " isLoading" : ""}`}>
            Loading
          </div>
          <div className="shortcut">{isMac ? "cmd+/" : "ctrl+/"}</div>
        </div>
        <button onClick={handleClick} className="button callout"></button>
      </div>
    </div>
  );
}
