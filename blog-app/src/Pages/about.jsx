import { Link } from 'react-router-dom';

function About() {
  return (
    <div>
      <h1>About Us</h1>
      <p>This page contains information about the blog application and its creators.</p>

      {/* Link back to home */}
      <Link to="/">← Back to Home</Link>
    </div>
  );
}

export default About;