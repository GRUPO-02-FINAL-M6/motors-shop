
import { Main, PageContainer } from "./index";
import { LoginForm } from "../../components/Form/LoginForm";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";

const LoginPage: React.FC = () => {

  return (
    <Main>
      <Header/>
           <PageContainer>
        <LoginForm />
      </PageContainer>
      <Footer />
    </Main>
  );
};

export default LoginPage;
