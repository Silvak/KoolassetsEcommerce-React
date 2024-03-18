import SidebarProfile from "../components/profile/sidebarProfile";
import Breadcrumb from "@/components/Breadcrumb/Breadcrumb";
import { userData } from "../mock/userData";
import CancellationView from "../components/cancellations/cancellationView";

function CancellationsPage() {
  const user = userData[0];
  return (

    <div>
      <Breadcrumb path="Cancelaciones" />
      <div style={{ display: "flex" }}>
        <SidebarProfile user={user} />
        <CancellationView />
      </div>
    </div>
  )
}

export default CancellationsPage;