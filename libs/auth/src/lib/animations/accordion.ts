﻿import { animate, animation, style } from '@angular/animations';

export const verticalAccordionEnter = animation(
  [style({ height: 0, opacity: 0 }), animate('{{time}}', style({ height: '*', opacity: 1 }))],
  {
    params: {
      time: '250ms',
    },
  }
);

export const verticalAccordionLeave = animation(
  [style({ height: '*', opacity: 1 }), animate('{{time}}', style({ height: 0, opacity: 0 }))],
  {
    params: {
      time: '250ms',
    },
  }
);
