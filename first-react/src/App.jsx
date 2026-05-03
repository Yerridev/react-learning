
import { FollowCard } from "./FollowCard";
import "./style.css";

function App() {

  //pasar funciones como props
  // const formatUserName = (username) => `@${username}`;

  //pasar elementos como props
  // const formattedUserName = <span>@yerridev</span>

  return (
    <section className="yr-app">
      <FollowCard
        isFollow
        username={'yerridev'}>
          <strong>Yerri Chilcon Ramirez</strong>
      </FollowCard>

      <FollowCard
        isFollow={false}
        username={'midudev'}>
          <strong>Miguel Ángel Durán</strong>
      </FollowCard>
    </section>
  )
}

export default App;
