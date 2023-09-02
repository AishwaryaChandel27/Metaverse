import { createGlobalStyle, ThemeProvider } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${(props) => props.theme.backgroundColor};
    color: ${(props) => props.theme.textColor};
  }
`;

const lightTheme = {
  backgroundColor: '#FFFFFF',
  textColor: '#000000',
};

const darkTheme = {
  backgroundColor: '#222222',
  textColor: '#FFFFFF',
};

const Theme = ({ children, isDarkMode }) => {
  const theme = isDarkMode ? darkTheme : lightTheme;

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      {children}
    </ThemeProvider>
  );
};

export default Theme;


