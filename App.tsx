import Navigation from './src/navigation/Navigation';
import StoreProvider from './src/providers/Store';

const App = () => {
  return (
    <StoreProvider>
      <Navigation />
    </StoreProvider>
  );
};

export default App;
