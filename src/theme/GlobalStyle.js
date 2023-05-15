import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
* {
  -webkit-tap-highlight-color: transparent;
  -webkit-overflow-scrolling: touch;

  /* disable text selection highlighting */
  -webkit-touch-callout: none; /* iOS Safari */
    -webkit-user-select: none; /* Safari */
     -khtml-user-select: none; /* Konqueror HTML */
       -moz-user-select: none; /* Firefox */
        -ms-user-select: none; /* Internet Explorer/Edge */
            user-select: none; /* Non-prefixed version, currently
                                  supported by Chrome and Opera */
}

/* this is because mercadopago's sdk opens an iframe and it
takes height in the screen */
body>iframe {
  display: none;
}

html,
body {
  height: 100%;
  background-color: ${({ theme }) => theme.colors.WHITE};
  padding: 0;
  margin: 0 !important;
  font-family: ${({ theme }) => theme.fontFamily.primary}, sans-serif;
  font-size: 12px;

  button:focus,
  input:focus{
    outline: none;
  }

  & a,
  a:hover {
    text-decoration: none;
    cursor: pointer;
    color: inherit;
  }
  
  a:focus {
    outline: auto;
    outline-color: ${({ theme }) => theme.colors.DARK};
  }

  & #app {
    min-height: 100%;
    display: flex;
    flex-direction: column;
    /* Hack that fix bug for sticky positions items on Safari - IOS 10 */
  /* transform: translate3d(0, 0, 0); commented because breaks on Chrome 51 */
  }

  & .group {
    display: block;
    position: relative;
    padding: 20px 0;
  }

  input:-webkit-autofill,
  textarea:-webkit-autofill,
  

  input:-webkit-autofill,
  textarea:-webkit-autofill,
  select:-webkit-autofill {
    -webkit-box-shadow: 0 0 0px 1000px white inset;
  }

  button {
    height: 44px;
    background: ${({ theme }) => theme.button.primaryLarge};
    color: ${({ theme }) => theme.colors.WHITE};
    border: none;
    cursor: pointer;
  }

  .modal__overlay {
    background-color: ${({ theme }) => theme.images.blur.background};
  }

  & .full_width {
    width: 100%;
  }

  .sticky {
    position: sticky !important;
  }
}

input[type='search']::-webkit-search-decoration,
input[type='search']::-webkit-search-cancel-button,
input[type='search']::-webkit-search-results-button,
input[type='search']::-webkit-search-results-decoration {
  display: none;
}

input, textarea {
  -webkit-user-select: auto !important;
  cursor: text;
}

`;

export default GlobalStyle;