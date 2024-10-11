import React from "react";
import { Unity, useUnityContext } from "react-unity-webgl";
import LoadingScreenGame from '../Loading/LoadingGame.jsx';

function  PlayToEarn() {
  const { unityProvider, loadingProgression, isLoaded } = useUnityContext({
    loaderUrl: "buildTgGameUnity/Builds.loader.js",
    dataUrl: "buildTgGameUnity/uilds.data.unityweb",
    frameworkUrl: "buildTgGameUnity/Builds.framework.js.unityweb",
    codeUrl: "buildTgGameUnity/Builds.wasm.unityweb",
  });

  
  return (
    <>
      {!isLoaded && (
        <>  
          <div style={{ 
            position: "absolute",
            top: "55vh",
            width: `${Math.round(loadingProgression * 90)}%`,
            height: "2vh",
            margin: "5%",
            borderRadius: "50vh",
            background: '#D06C24',
            zIndex: "1"}}
          /> 
          <div style={{ 
            position: "absolute",
            top: "55vh",
            width: '90%',
            margin: "5%",
            height: "2vh",
            borderRadius: "50vh",
            background: '#1A1A1A',
            zIndex: "0"}}
          /> 
          <p style={{ 
            position: "absolute",
            top: "65vh",
            alignSelf: "center"}}>
              {Math.round(loadingProgression * 100)}%
          </p> 
          <LoadingScreenGame/>
        </>
      )}
      <Unity
        unityProvider={unityProvider}
        style={{ 
          visibility: isLoaded ? "visible" : "hidden",
          height:"90%",
          width:"100%",
          justifySelf: "center",
          alignSelf: "center"}}
      />
    </>
  );
}

export default PlayToEarn;
