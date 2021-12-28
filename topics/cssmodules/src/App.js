import './App.css';

function App() {
  return (
    <div className="App">
      <header> Header with a Logo Fixed to the Top</header>
      <main>
        <aside>
          Sidebar - fixed width indepently scrollable and always fils out 100% of the height of the screen
        </aside>
        <section>
          Main Content - flexible with (takes up the rest of the screen)
        </section>
      </main>
      <footer> Footer Fixed to the Bottom</footer>
    </div>
  );
}

export default App;
