import React from 'react';
import Header from './layouts/Header/Header';
import Footer from './layouts/Footer/Footer';
import Content from './layouts/Content/Content';
import FormSection from './components/FormSection/FormSection';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = (): JSX.Element => {
  return (
    <>
      <Header />
      <Content>
        <FormSection />
        <ToastContainer theme='colored'/>
      </Content>
      <Footer />
    </>
  );
}

export default App;
