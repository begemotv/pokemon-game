import background from './img/bg1.jpg'

import Footer from './components/footer/footer';
import Header from './components/header/header';
import Layout from './components/layout/layout';

function App() {
  return (
    <>
      <Header title='This is title' descr='This is Description!' />
      <Layout id='1' title='Intro' descr='This is a Pokemon Card Game!' urlBg={background} />
      <Layout id='2' title='Enjoy!' descr='You will have fun!' colorBg='#99b3ff' />
      <Layout id='3' title='Any doubts?' descr='Please subscribe!' urlBg={background} />
      <Footer />
    </>
  );
}

export default App;
