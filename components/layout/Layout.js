// Packages
import React, { useEffect } from "react";
import Head from "next/head";
import useWindowSize from "../../hooks/useWindowSize";

const Layout = ({ children, title = "", bg = { url: "", cls: "" } }) => {
  const [wWidth, wHeight] = useWindowSize();
  // Background Image
  const { url, cls } = bg;
  const mainBg = url
    ? // ? `${url} bg-no-repeat bg-center bg-fixed bg-cover ${cls}`
      `${url} w-full h-screen bg-center bg-cover bg-dunes ${cls}`
    : "";

  // Screen sizes
  const screenSizes = {
    lg: 1440,
    sm: 375,
  };
  const setHTMLTagFontSize = () => {
    let el = document.getElementsByTagName("html");
    let elStyle = el[0].style;
    return (elStyle.fontSize = `${(wWidth / screenSizes.lg) * 10}px`);
  };

  useEffect(() => {
    import("tw-elements");
  }, []);

  useEffect(() => {
    setHTMLTagFontSize();
  }, [wWidth]);
  return (
    <div>
      <Head>
        <title>{`My App ${title}`}</title>
      </Head>
      <main
        style={{
          backgroundImage: "url('images/bg-image.png')",
        }}
        className={"w-full h-screen bg-center bg-cover bg-dunes"}
      >
        {children}
      </main>
    </div>
  );
};
export default Layout;
