import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { Toaster } from 'react-hot-toast';
import { HelmetProvider } from 'react-helmet-async';


import {
  
  RouterProvider,
} from "react-router-dom";
import { router } from './Routes/Routes';
import AuthProvider from './Providers/AuthProvider';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';


const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    
    <AuthProvider>
    <QueryClientProvider client={queryClient}>
    <HelmetProvider>
    <div className='max-w-7xl mx-auto'>
    <RouterProvider router={router}></RouterProvider>
    </div>
    </HelmetProvider>
    <Toaster></Toaster>
    </QueryClientProvider>
    </AuthProvider>
    
   
  </React.StrictMode>,
)
