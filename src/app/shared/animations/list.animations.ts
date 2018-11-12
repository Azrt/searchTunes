import {
  animation, trigger, style, transition, animate, state,
 } from '@angular/animations';

 const SLIDE_IN_STYLE = {
   transform: 'translateX(0)',
   opacity: 1,
 };

 const SLIDE_OUT_STYLE = {
   transform: 'translateX(10%)',
   opacity: 0,
 };

export const slideToggleAnimaion =
  trigger('slideToggle', [
    transition(':enter', [
      style(SLIDE_OUT_STYLE),
      animate('.4s ease-in-out', style(SLIDE_IN_STYLE)),
    ]),
    transition(':leave', [
      animate('.4s ease-in-out', style(SLIDE_OUT_STYLE)),
    ]),
    transition('* => *', [
      style(SLIDE_OUT_STYLE),
      animate('.4s ease-in-out', style(SLIDE_IN_STYLE)),
    ]),
  ]);

