import { createBrowserRouter } from "react-router";
import App from "../App";
import Deshbord from "../Component/Deshbord";
import Agencies from "../Component/Agencies";
import Analiytics from "../Component/Analiytics";
import CoinManagement from "../Component/CoinManagement";
import GiftsAssets from "../Component/Gifts&Assets";
import KycCentre from "../Component/KycCentre";
import LiveStreams from "../Component/LiveStreams";
import Moderation from "../Component/Moderation";
import PK_masters from "../Component/PK_masters";
import Settings from "../Component/Settings";
import TransationHistroy from "../Component/TransationHistroy";
import TableDtsls from "../Component/tableDtsls";
import NotFound from "../Component/NotFound";

export const router = createBrowserRouter([
  {
    path: "/",
    Component:App,
    children:[
        {path:"/",index:true,Component:Deshbord},
        {path:'/agencies',Component: Agencies},
        {path:'/analiytics',Component: Analiytics},
        {path:'/coinManagement',Component: CoinManagement},
        {path:'/giftsAssets',Component: GiftsAssets},
        {path:'/kycCentre',Component: KycCentre},
        {path:'/liveStreams',Component: LiveStreams},
        {path:'/moderation',Component: Moderation},
        {path:'/pK_masters',Component: PK_masters},
        {path:'/settings',Component: Settings},
        {path:'/transationHistroy',Component: TransationHistroy},
        {path:'/:id',Component: TableDtsls},
        {path:'*', Component:NotFound},
    ]
    
  }
]);