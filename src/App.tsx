import { AlertTriangle, Ban, Bell, CheckCheck, Info } from "lucide-react";
import Alert from "./components/Alert/Alert";
import "./index.css";

function App() {
  return (
    <div className="app-wrapper">
      <Alert
        type={"alert-default"}
        icon={<Bell size={20} />}
        title={"Upgrade your plan"}>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
          nesciunt maxime adipisci? Non placeat laudantium alias architecto
          officiis quis ea maxime quibusdam animi velit, itaque ex, ad nulla
          vero ipsam.
          <a href="/">LINK</a>
        </p>
      </Alert>

      {/* Alert-Warning */}

      <Alert
        type={"alert-warning"}
        icon={<AlertTriangle size={20} />}
        title={"Tips & Tricks"}
        description="
   Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum nesciunt
   maxime adipisci? Non placeat laudantium alias architecto officiis quis ea maxime 
   quibusdam animi velit, itaque ex, ad nulla vero ipsam.
   "
      />

      {/* Alert-info */}

      <Alert
        type={"alert-info"}
        icon={<Info size={20} />}
        title={"Note"}
        description="
   Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum nesciunt
   maxime adipisci? Non placeat laudantium alias architecto officiis quis ea maxime 
   quibusdam animi velit, itaque ex, ad nulla vero ipsam.
   "
      />

      {/* Alert-success */}
      <Alert
        type={"alert-success"}
        icon={<CheckCheck size={20} />}
        title={"Your order has been processed"}
        description="
   Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum nesciunt
   maxime adipisci? Non placeat laudantium alias architecto officiis quis ea maxime 
   quibusdam animi velit, itaque ex, ad nulla vero ipsam.
   "
      />

      {/* Alert-error */}

      <Alert
        type={"alert-error"}
        icon={<Ban size={20} />}
        title={"Someting went wrong"}
        description="
   Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum nesciunt
   maxime adipisci? Non placeat laudantium alias architecto officiis quis ea maxime 
   quibusdam animi velit, itaque ex, ad nulla vero ipsam.
   "
      />
    </div>
  );
}

export default App;
