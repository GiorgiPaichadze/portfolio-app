import contact from '@/assets/data/lottiefiles/contact.json';
import AppContainer from '@/components/AppContainer';
import LottieAnimation from '@/components/LottieAnimation';
import AppContactForm from '@/components/AppContactForm';
import AppSectionRow from '@/components/AppSectionRow';

const Contact: React.FC = () => {
  return (
    <AppSectionRow>
      <AppContainer>
        <div className="flex flex-col gap-16">
          <div className="flex">
            <div className="flex-1 hidden md:block">
              <LottieAnimation item={contact} />
            </div>
            <div className="flex-1 flex flex-col gap-8">
              <AppContactForm />
            </div>
          </div>
        </div>
      </AppContainer>
    </AppSectionRow>
  );
};

export default Contact;
