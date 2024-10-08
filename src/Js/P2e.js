import React from "react";
import { Unity, useUnityContext } from "react-unity-webgl";

function  PlayToEarn() {
  const { unityProvider } = useUnityContext({
    loaderUrl: "buildTgGameUnity/TG_buid.loader.js",
    dataUrl: "buildTgGameUnity/TG_buid.data.unityweb",
    frameworkUrl: "buildTgGameUnity/TG_buid.framework.js.unityweb",
    codeUrl: "buildTgGameUnity/TG_buid.wasm.unityweb",
  });

  return (
      <Unity unityProvider={unityProvider} 
      style={{
        height:"80%",
        justifySelf: "center",
        alignSelf: "center"}}
      />
  ) ;
}

export default PlayToEarn;
