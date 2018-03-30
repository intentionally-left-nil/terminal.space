import React, { Component } from 'react';
import Terminal from '@anilredshift/react-bash';
import resumeData from './components/resume/resumeData';
import resumeMarkdown from './components/resume/resumeMarkdown';

const createUrlHandler = url => ((state) => {
  window.open(url, '_blank');
  return Object.assign({}, state, {
    history: state.history.concat([{ value: `Launching ${url}` }]),
  });
});

const history = [
  { cwd: '/', value: 'ls' },
  { value: 'contact projects Resume.md' },
];

const mailto = `mailto:${encodeURIComponent(resumeData.contact.email)}?subject=${encodeURIComponent('Contact request from homepage')}`;

const structure = {
  contact: { exec: createUrlHandler(mailto) },
  'Resume.md': { content: resumeMarkdown },
  projects: {
    cogrammers: { exec: createUrlHandler('https://cogrammers.community') },
    'cogrammers-github': { exec: createUrlHandler('https://github.com/cogrammers/') },
    'evil-webserver': { exec: createUrlHandler('https://github.com/AnilRedshift/evil-webserver') },
    'terminal.space': { exec: createUrlHandler('https://github.com/AnilRedshift/terminal.space') },
    yatlab: { exec: createUrlHandler('https://github.com/anilredshift/yatlab#yatlab') },
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
            ReactBash: {
              backgroundColor: '#000',
              padding: '20px',
            },
            header: {
              display: 'none',
            },
            body: {
              height: '100vh',
              color: '#33FF00',
              backgroundColor: '#000',
            },
            prefix: {
              color: '#33FF00',
              marginRight: '5px',
            },
          }}
          theme="dark"
        />
      </div>
    );
  }
}

export default App;
