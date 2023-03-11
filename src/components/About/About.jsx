import { Link, Outlet } from 'react-router-dom';

export const About = () => {
  return (
    <div>
      <h1>About page</h1>
      <ul>
        <li>
          <Link to="mission">Read about our mission</Link>
        </li>
        <li>
          <Link to="team">Get to know the team</Link>
        </li>
        <li>
          <Link to="reviews">Go through the reviews</Link>
        </li>
      </ul>
      <Outlet />
    </div>
  );
};

export const Mission = () => {
  return <span>'Mission'</span>;
};

export const Team = () => {
  return <span>'Team'</span>;
};

export const Reviews = () => {
  return <span>'Reviews'</span>;
};
