import { useParams } from "react-router-dom";
import Layout from "../../container/Layout";

const DynamicDashboard = () => {
  const { id } = useParams();

  return (
    <Layout title="React with viteJs - Dynamic">
      Dynamic Dashboard Page, Param: {id}
    </Layout>
  );
};

export default DynamicDashboard;
