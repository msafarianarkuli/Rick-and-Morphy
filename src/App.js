import { QueryClient, QueryClientProvider } from 'react-query';
import Home from './screens/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CharacterList from './components/content/CharacterList';
import SingleCharacter from './screens/SingleCharacter';

function App() {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}>
            <Route index element={<CharacterList />} />
            <Route
              path="character/:characterId"
              element={<SingleCharacter />}
            />
          </Route>
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
