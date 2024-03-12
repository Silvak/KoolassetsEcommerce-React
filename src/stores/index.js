import { createWithEqualityFn } from "zustand/traditional";
import { storeUser } from "@/stores/user/storeUser";
// import { storeFavorites } from "@/stores/favorites/storeFavorites";
import { storeTheme } from "@/stores/Actions/theme/storeTheme";
import { storeHome } from "@/stores/Screens/storeHome";
import { storeModal } from "@/stores/Actions/modal/storeModal";
import { storeAlert } from "@/stores/Actions/alert/storeAlert";

export const useBoundStore = createWithEqualityFn((...a) => ({
  ...storeUser(...a),
  // ...storeFavorites(...a),
  ...storeTheme(...a),
  ...storeHome(...a),
  ...storeAlert(...a),
  ...storeModal(...a),
}));
