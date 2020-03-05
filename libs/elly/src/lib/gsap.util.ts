import * as gsap from 'gsap';

export interface AnimProp {
  rotation?: string;
  translation?: string;
  transform?: string;
  scale?: string;
  'background-color'?: string;
  color?: string;
  fill?: string;
  opacity?: number;
  height?: number;
  width?: number;
}

export function animate(
  element: Element,
  duration: number,
  ease: gsap.Ease,
  animation: AnimProp,
  callback?
) {
  try {
    gsap.TweenMax.to(element, duration, {
      ease,
      ...animation,
    }).eventCallback('onComplete', callback ? callback : () => {});
  } catch (error) {
    console.error('Animation Error: ', error);
  }
}

export function set(element: Element, start: any = {}) {
  try {
    gsap.TweenMax.set(element, start);
  } catch (error) {
    console.error('Set Position Error: ', error);
  }
}

export function scaleFromCenter(center: number, offset: number) {
  const scale = (center - offset) / center;
  const transform = {
    transform: `translate( ${offset}px, ${offset}px ) scale(${scale})`,
  };
  return transform;
}
