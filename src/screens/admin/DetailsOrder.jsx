import Sidebar from "@/components/Dashboard/Sidebar";
import DetailsOrderContent from "@/components/DetailsOrder/DetailsOrderContent";

const DetailsOrder = () => {
  return (
    <div style={{ display: "flex" }}>
      <Sidebar />
      <DetailsOrderContent />
    </div>
  );
};
export default DetailsOrder;
