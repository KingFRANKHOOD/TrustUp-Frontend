import PayScreen from 'components/pages/PayScreen';
import SignInScreen from 'components/pages/SignIn';
import './global.css';
import MainLayout from 'components/shared/MainLayout';


export default function App() {
   return (
    <MainLayout>
      <SignInScreen />
    </MainLayout>
  );
}