"use client"
import * as React from 'react';
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim"; // if you are going to use `loadSlim`, install the "@tsparticles/slim" package too.
import { Colors } from './config'

export default function BackGroundComp() {
  const [init, setInit] = React.useState(false);

  React.useEffect(() => {
    initParticlesEngine(async (engine) => {
      // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
      // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
      // starting from v2 you can add only the features you need reducing the bundle size
      //await loadAll(engine);
      //await loadFull(engine);
      await loadSlim(engine);
      //await loadBasic(engine);
    }).then(() => {
      setInit(true);
    });
  }, [])

  const options: any = React.useMemo(
    () => (Colors),
    [],
  );


  return (
    <>
      {
        init ? <Particles
          id="tsparticles"
          options={options}
        /> : null
      }
    </>
  );
}