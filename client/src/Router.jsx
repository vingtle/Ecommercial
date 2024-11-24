import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Home from "./pages/user/Home";
import AdvancedSkinCare from "./components/user/TreatmentsCards/AdvancedSkinCare";
import Waxing from "./components/user/TreatmentsCards/Waxing";
import LuxuryHair from "./components/user/TreatmentsCards/Luxuryhair"; 
import Massages from "./components/user/TreatmentsCards/Massages";
import ManicuresPedicures from "./components/user/TreatmentsCards/ManicuresPedicures";
import Eyelash from "./components/user/TreatmentsCards/Eyelash";
import Galleries from "./pages/user/Galleries";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children:[
            {
                index: true,
                element: <Home />,
            },
            { 
             path: "treatments/advanced-skin-care",
             element: <AdvancedSkinCare />,   
            },
            {
            path: "treatments/waxing",
            element: <Waxing />,
            },
            {
            path: "treatments/hair-scalp-care",
            element: <LuxuryHair />,
            },
            {
            path: "treatments/massages",
            element: <Massages />,
            },
            {
            path: "/treatments/manicures-pedicures",
            element: <ManicuresPedicures />,
            },
            {
            path: "/treatments/eyelash-extensions",
            element: <Eyelash />,
            },
            {
            path: "/galleries",
            element: <Galleries />,
            },
            {
                future: {
                    v7_normalizeFormMethod: true,
                    v7_skipActionErrorRevalidation: true,
                    v7_fetcherPersist: true,
                    v7_relativeSplathPath: true,
                },
            }            
        ],
    },
]);

export default router;