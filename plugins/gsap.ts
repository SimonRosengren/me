// /plugins/gsap.js

import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Draggable } from 'gsap/Draggable'
import { Observer } from 'gsap/Observer'


export default defineNuxtPlugin(() => {


  if (process.client) {
    gsap.registerPlugin(Observer, ScrollTrigger)
    gsap.registerPlugin(Draggable)
  }

  return {
    provide: {
      gsap,
      Observer,
      ScrollTrigger,
      Draggable
    }
  }
})