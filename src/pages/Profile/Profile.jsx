import { checkToken } from '../../utilities/users-service';

export default function Profile() {
  async function handleCheckToken() {
    const dateExp = await checkToken()
    console.log(dateExp);
  }

  return (
    <main className="Profile">
      <h1>Profile</h1>
      <button color="primary" onClick={handleCheckToken}>Check When My Login Expires</button>
    </main>
  );
}