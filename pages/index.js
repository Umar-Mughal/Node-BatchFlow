import Layout from "../components/layout/Layout";
import FormTabsContent from "../components/formsTabs/FormTabsContent";
import FormTabs from "../components/formsTabs/FormTabs";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Home() {
  return (
    <Layout>
      <div className="flex justify-center">
        <div className="w-full mt-[4rem] pb-[4rem]">
          <FormTabs />
          <FormTabsContent />
          <ToastContainer />
        </div>
      </div>
    </Layout>
  );
}
