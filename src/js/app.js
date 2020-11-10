import barba from '@barba/core';
import gsap from 'gsap';

const animationEnter = (container) => {
  return gsap.from(container, { autoAlpha: 0, duration: 2, clearProps: 'all', ease: 'none' });
};

const animationLeave = (container) => {
  return gsap.to(container, { autoAlpha: 0, duration: 2, clearProps: 'all', ease: 'none' });
};

barba.init({
  transitions: [
    {

      /*  Barba  Hooks   */
      once({ next }) {

        /**  Page Loading  */
        animationEnter(next.container);
      },
      leave: ({ current }) => animationLeave(current.container),
      enter({ next }) {
        console.log('entering');
        animationEnter(next.container);
      }
    }
  ]
});