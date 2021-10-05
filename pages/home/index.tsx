import type { NextPage } from "next";
// import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  const user = "user";

  return (
    <>
      <div>Hi {user}</div>
      <div>Highlights go here</div>
      <div>Spotlight goes here</div>
    </>
  );
};

export default Home;
