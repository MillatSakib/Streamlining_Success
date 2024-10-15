import Footer from "./Footer/Footer";
import Navigation from "./Header/Navigation";
import Hero from "./Hero/Hero";
import MainBoard from "./TaskBorard/MainBoard";

function App() {
  return (
    <>
      <Navigation></Navigation>
      <div className="flex flex-col justify-center items-center">
        <Hero></Hero>
        <MainBoard></MainBoard>
      </div>
      <Footer></Footer>
    </>
  );
}

export default App;
