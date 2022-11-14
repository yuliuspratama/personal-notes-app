import React from 'react';
import ToggleTheme from './ToggleTheme';
import { ThemeProvider } from '../Contexts/ThemeContext';

class Themehandler extends React.Component{
  constructor(props){
    super(props);
    this.state={
      theme: localStorage.getItem('theme') || 'light',
      toggleTheme: () => {
        this.setState((prevState) => {
          const newTheme = prevState.theme === 'light' ? 'dark' : 'light';
          localStorage.setItem('theme', newTheme);
          return {
            theme: newTheme
          };
        });
      }
    }
  }

  componentDidMount() {
    document.documentElement.setAttribute('data-theme', this.state.theme);
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.theme !== this.state.theme) {
      document.documentElement.setAttribute('data-theme', this.state.theme);
    }
  }


  render(){
    return(
      <ThemeProvider value={this.state}>
        <div className="container">
          <ToggleTheme/>
        </div>
      </ThemeProvider>
    )
  }
}
export default Themehandler;