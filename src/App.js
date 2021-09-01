import "./App.css";
import Card from "./components/Card";
import Profilephoto from "./assets/Profilephoto.png";

function App() {
  const recipeAuthor = "Efecan";
  const recipeItem = {
    title: "HALL OF FAME",
    image: Profilephoto,
    description: "Mohammad Ahzam",
    job_pos:"SDE @ Google",
    dept:"Computer Sciece Engineering",
    batch:"2022"  
  };

  const like= 193;
  const isLiked = true;

  return (
    <div className="App">
      <header className="App-header">
        <Card
          author={recipeAuthor}
          title={recipeItem.title}
          description={recipeItem.description}
          job_pos={recipeItem.job_pos}
          dept={recipeItem.dept}
          batch={recipeItem.batch}
          liked={isLiked}
          likeCount={like}
        />
      </header>
    </div>
  );
}

export default App;