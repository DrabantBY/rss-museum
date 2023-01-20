export const Student: React.FC<{
  date: number;
  school: string;
  name: string;
}> = ({ date, name, school }) => (
  <ul className="student footer__student">
    <li className="student-date footer__student-date">© {date}</li>
    <li className="student-school footer__student-school">{school}</li>
    <li className="student-name footer__student-name">{name}</li>
  </ul>
);
