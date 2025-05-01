import Navbar from './components/Navbar';
import Team from './components/Team';

function App() {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 transition-colors duration-300">
      <Navbar />
      <Team />
    </div>
  );
}

export default App;
