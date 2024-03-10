import DetailsOrderHeader from "@/components/DetailsOrder/DetailsOrderHeader";
import DetailsOrderTable from "@/components/DetailsOrder/DetailsOrderTable";
import DetailsOrderForm from "@/components/DetailsOrder/DetailsOrderForm";

const DetailsOrderContent = () => {
  return (
    <div style={{ width: "100%" }}>
      <DetailsOrderHeader />
      <DetailsOrderTable />
      <DetailsOrderForm />
    </div>
  );
};
export default DetailsOrderContent;
