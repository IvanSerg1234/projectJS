'use strict';

import { tns } from "./node_modules/tiny-slider/src/tiny-slider";

tns.item({
    container: '.my-slider',
    items: 1,
    slideBy: 'page',
    autoplay: true
});