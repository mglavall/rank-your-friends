// stitches.config.ts
import { createStyled } from '@stitches/react';

export const { styled, css } = createStyled({
    prefix: '',
    tokens: {
        fontSizes: {
            $1: '12px',
            $2: '13px',
            $3: '15px',
        },
        colors: {
            $primary: '#151515',
            $secondary: '#ffffff'
        }
    },
    breakpoints: {},
    utils: {},
});