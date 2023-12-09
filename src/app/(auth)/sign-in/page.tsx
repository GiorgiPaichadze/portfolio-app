import AppContainer from '@/components/AppContainer';
import AppSectionRow from '@/components/AppSectionRow';
import AppSignInForm from '@/components/AppSignInForm';

const SignIn: React.FC = () => {
  return (
    <AppSectionRow>
      <AppContainer>
        <div className="max-w-[468px] mx-auto">
          <AppSignInForm />
        </div>
      </AppContainer>
    </AppSectionRow>
  );
};

export default SignIn;
