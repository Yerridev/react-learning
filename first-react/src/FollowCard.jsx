import { useState } from "react";

export function FollowCard({ children, username, isFollow }) {
  // Estado único que representa todas las fases de interacción
  const [state, setState] = useState(isFollow ? 'following' : 'follow');

  const handleClick = () => {
    // Máquina de estados simple: cada click transiciona al siguiente estado
    const transitions = {
      follow: 'following',
      following: 'confirming',
      confirming: 'follow'
    };
    setState(transitions[state]);
  }

  // Derivamos texto y clases del estado único
  const texts = {
    follow: 'Seguir',
    following: 'Siguiendo',
    confirming: 'Dejar de seguir'
  };

  const text = texts[state];
  const buttonClassName = `yr-followCard-button is-${state}`;

  

  return (
    <>
      <article className="yr-followCard">
        <header className="yr-followCard-header">
          <img
            className="yr-followCard-avatar"
            src={`https://unavatar.io/github/${username}`}
            alt="avatar"
          />
          <div className="yr-followCard-info">
            {children}
            <span
              className="yr-followCard-infoUserName">@{username}</span>
          </div>
        </header>

        <aside>
          <button
            className={buttonClassName}
            onClick={handleClick}
          >
            {text}
          </button>
        </aside>
      </article>
    </>
  )
}
