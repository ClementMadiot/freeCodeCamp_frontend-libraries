import './App.scss';
import Previewer from './components/Previewer';
import Textarea from './components/Textarea';

function App() {
  return (
    <main>
      <div class="grid-background">
        <div class="gradient"></div>
      </div>
      <Textarea/>
      <Previewer/>
    </main>
  );
}

export default App;
