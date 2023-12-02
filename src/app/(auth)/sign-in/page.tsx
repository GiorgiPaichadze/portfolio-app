import AppContainer from '@/components/AppContainer';
import SignInForm from '@/components/SignInForm';

const SignIn = () => {
  return (
    <div className="py-20 md:py-24">
      <AppContainer>
        <div className="max-w-[468px] mx-auto">
          <SignInForm />
        </div>
      </AppContainer>
    </div>
  );
};

export default SignIn;
