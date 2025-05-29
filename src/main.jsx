import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {QueryClient, QueryClientProvider} from '@tanstack/react-query'
import {Toaster} from "react-hot-toast";
import GlobalLoader from "./components/ui/global_loader.jsx";

const queryClient = new QueryClient();

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <QueryClientProvider client={queryClient}>
            {/*<GlobalLoader />*/}
            <Toaster position="bottom-right"/>
            <App/>
        </QueryClientProvider>
    </StrictMode>
)
