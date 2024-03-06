import SidebarProfile from "../components/profile/sidebarProfile";
import Breadcrumb from "@/components/Breadcrumb/Breadcrumb";
import { userData } from "../mock/userData";
import CancellationView from "../components/cancellations/cancellationView";

function CancellationsPage() {
  const user = userData[0];
  return (

    <div style={{ padding: "0 90px"}}>
      <Breadcrumb path="Cancelaciones" />
      <div style={{ display: "flex" }}>
        <SidebarProfile user={user} />
        <CancellationView />
      </div>
    </div>
  )
}

export default CancellationsPage;