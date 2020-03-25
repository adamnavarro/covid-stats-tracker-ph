import React, {Suspense} from 'react';
import Dashboard from './Dashboard'

function App() {
  return (
    <Suspense fallback={<span>Loading...</span>}>
      <Dashboard />
    </Suspense>
  );
}

export default App;
