import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    @font-face{
        font-family: 'Roboto';
        font-style: normal;
        font-weight: normal;
        src: url('${process.env.PUBLIC_URL}/fonts/Roboto/Roboto-Regular.ttf');
    }

    @font-face{
        font-family: 'Roboto Bold';
        font-style: normal;
        font-weight: normal;
        src: url('${process.env.PUBLIC_URL}/fonts/Roboto/Roboto-Bold.ttf');
    }

    @font-face{
        font-family: 'Roboto Thin Italic';
        font-style: normal;
        font-weight: normal;
        src: url('${process.env.PUBLIC_URL}/fonts/Roboto/Roboto-ThinItalic.ttf');
    }
    body{
        padding: 0px;
        margin:0px;
        overflow-y: hidden;
        font-family: "Roboto";
    }
`;
