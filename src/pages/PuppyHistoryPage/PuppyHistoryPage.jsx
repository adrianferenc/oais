
import { checkToken } from '../../utilities/users-service';

export default function PuppyHistoryPage() {
  async function handleCheckToken() {
    const dateExp = await checkToken()
    console.log(dateExp);
  }

  return (
    <main className="PuppyHistoryPage">
      <h1>PuppyHistoryPage</h1>
      <button onClick={handleCheckToken}>Check When My Login Expires</button>
    </main>
  );
}