import Layout from "../components/layout/Layout";
import FormTabsContent from "../components/formsTabs/FormTabsContent";
import FormTabs from "../components/formsTabs/FormTabs";

export default function Home() {
  return (
    <Layout>
      <div className="flex justify-center">
        <div className="w-full mt-[4rem] pb-[4rem]">
          <FormTabs />
          <FormTabsContent />
        </div>
      </div>
    </Layout>
  );
}
