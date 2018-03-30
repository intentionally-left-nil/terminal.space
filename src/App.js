import React, { Component } from 'react';
import Terminal from 'react-bash';
import Resume from './components/resume/Resume';

const history = [
  { cwd: '/', value: 'ls' },
  { value: 'resume' },
];

const structure = {
  resume: {
    'Resume.md': { content: 'resume goes here' },
  },
};

class App extends Component {
  render() {
    return (
      <div>
        <Terminal
          prefix="terminal.space"
          history={history}
          structure={structure}
          styles={{
            header: {
              display: 'none',
            },
            ReactBash: {
              height: '100vh',
              backgroundColor: 'black',
            },
          }}
          theme="dark"
        />
      </div>
    );
  }
}

export default App;
