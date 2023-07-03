import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

import '@assets/styles/global.scss';
import StoryblokProvider from './components/providers/storyblok.component';

const Main: React.FC = () => {
  return (
    <StoryblokProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </StoryblokProvider>
  );
};

const container = document.getElementById('root');
// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
const root = createRoot(container!);

root.render(<Main />);
