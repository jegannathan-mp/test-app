import './App.css';
function App() {
  return (
    <>
      <div>
        <h1>Todo Maker</h1>
        <p>
        # Ensure you're on the correct branch
git branch
git checkout -b main  # If needed

# Fetch the latest changes from the remote
git fetch origin

# Merge changes from the remote branch if needed
git merge origin/main --allow-unrelated-histories

# Set the upstream branch for your local branch
git push --set-upstream origin main

# Push your changes to the remote
git push

# Verify remote configuration
git remote -v
        </p>
      </div>
    </>
  );
}

export default App;
