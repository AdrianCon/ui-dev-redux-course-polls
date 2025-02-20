import * as React from "react";
import { useSelector, useDispatch } from "react-redux";

export default function Leaderboard() {
  const users = useSelector((state) => state.users);
  const sortedUsers = Object.keys(users)
    .map((id) => {
      const { name, avatarURL, polls } = users[id];
      return {
        id,
        name,
        avatarURL,
        polls: polls.length,
        answers: Object.keys(users[id].answers).length,
      };
    })
    .sort((a, b) => (b.polls + b.answers > a.polls + a.answers ? 1 : -1));

  console.log(sortedUsers);

  return (
    <ul>
      {sortedUsers.map((user) => (
        <li className="user" key={user.id}>
          <img src={user.avatarURL} alt={`Avatar for ${user.name}`} />
          <div>
            <h1>{user.name}</h1>
            <p>{user.polls} Polls</p>
            <p>{user.answers} Answers</p>
          </div>
        </li>
      ))}
    </ul>
  );
}
