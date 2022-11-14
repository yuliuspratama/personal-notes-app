import { ThemeConsumer } from '../Contexts/ThemeContext';
 
function ToggleTheme() {
  return (
    <ThemeConsumer>
      {({ theme, toggleTheme }) => {
        return <button onClick={toggleTheme}>{theme === 'light' ? "Light" : "Dark"}</button>;
      }}
    </ThemeConsumer>
  );
}
 
export default ToggleTheme;