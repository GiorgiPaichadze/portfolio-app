import contact from '@/assets/data/contact.json';
import AppContainer from '@/components/AppContainer';
import ContactForm from '@/components/ContactForm';
import LottieAnimation from '@/components/LottieAnimation';

const Contact = () => {
  return (
    <div className="py-20 md:py-24">
      <AppContainer>
        <div className="flex flex-col gap-16">
          <div className="flex">
            <div className="flex-1 hidden md:block">
              <LottieAnimation item={contact} />
            </div>
            <div className="flex-1 flex flex-col gap-8">
              <ContactForm />
            </div>
          </div>
        </div>
      </AppContainer>
    </div>
  );
};

export default Contact;
