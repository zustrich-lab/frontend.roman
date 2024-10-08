import React from 'react';
import { Unity, useUnityContext } from 'react-unity-webgl';
const PlayToEarn = () => {

  const { unityProvider } = useUnityContext({
    loaderUrl: "../TestGame/TG_buid.loader.js",
    dataUrl: "../TestGame/TG_buid.data.unityweb",
    frameworkUrl: "../TestGame/TG_buid.framework.js.unityweb",
    codeUrl: "../TestGame/TG_buid.wasm.unityweb",
  });

  return <Unity unityProvider={unityProvider} />;
}

export default PlayToEarn;
