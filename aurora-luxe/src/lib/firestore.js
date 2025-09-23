import { getFirestore } from "@firebase/firestore";
import app from "./fireBaseConfig";

const db = getFirestore(app)
export default db
// export default app;