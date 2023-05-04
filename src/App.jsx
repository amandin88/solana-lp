import { Routes, Route } from 'react-router-dom';

import Layout from './pages/Layout';

import { HomePage, Pages } from './routes';

function App() {
  return (
    <Routes>
      {Pages.map((page, key) => {
        return (
          <Route
            key={key}
            path={`/${page.route}`}
            element={<Layout pageName={page.name} />}
          />
        );
      })}

      <Route path='/' element={<Layout pageName={HomePage.name} />} />
    </Routes>
  );
}

export default App;
