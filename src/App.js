import React, { Component } from 'react';
import Terminal from '@anilredshift/react-bash';
import Resume from './components/resume/Resume';
import resumeMarkdown from './components/resume/resumeMarkdown';

const history = [
  { cwd: '/', value: 'ls' },
  { value: 'resume' },
];

const structure = {
  resume: {
    'Resume.md': { content: resumeMarkdown },
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
            body: {
              height: '100vh',
              color: '#FFF',
              backgroundColor: '#000',
            },
          }}
          theme="dark"
        />
      </div>
    );
  }
}

export default App;
