"use client"
import { useState, useEffect, useMemo } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim"; // if you are going to use `loadSlim`, install the "@tsparticles/slim" package too.
import { Colors, AmongUs, Confetti, Explosions, FireWorks } from './config'
import { EventBus, EventTypes } from '@/utils/event';

export default function BackGroundComp({ theme }: { theme: string }) {

  const [init, setInit] = useState(false);
  const [type, setType] = useState<any>('Colors')
  const [myTheme, setMyTheme] = useState(theme)
  useEffect(() => {
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

  const FireWorksStyle: any = useMemo(() => {
    return AmongUs
  }, [])

  const ColorsTheme: any = useMemo(() => {
    const typeObj: any = {
      Colors,
      AmongUs,
      Confetti,
      Explosions,
      FireWorks,
    }
    const c = typeObj[type]
    if (theme == 'dark') {
      c.background.color.value = '#0b1120'
    } else {
      c.background.color.value = '#ddd'
    }
    return c
  }, [theme, type])

  useEffect(() => {
    const listenBgStyleSwitch = (data: any) => {
      setType(data.type)
    }
    EventBus.addListener(EventTypes.SwitchBgStyle, listenBgStyleSwitch)
  }, [])

  useEffect(() => {
    setMyTheme(theme)
  }, [theme])


  return (
    <>
      {
        init ? <Particles
          id="tsparticles"
          options={ColorsTheme}
        /> : null
      }
    </>
  );
}