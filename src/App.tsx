import { Layout } from "./ui/Layout/Layout";
import { UsersPage } from "./pages/usersPage/UsersPage";
import "assets/style/main.scss";
import "assets/style/variables.scss";

function App() {
  return (
    <div>
      <Layout>
        <UsersPage />
      </Layout>
    </div>
  );
}

export default App;
