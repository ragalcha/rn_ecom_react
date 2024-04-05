import { toast } from 'react-hot-toast';
import '../App.css'
import { useState } from 'react'
import { useEffect } from "react";
import { Outlet, Link } from "react-router-dom";
export default function PageNotFound() {
    useEffect(() => {
        const timeoutId = setTimeout(() => {
            toast.error("Your are trying to access a 404 page");
        }, 3000); // 1 minute = 60,000 milliseconds

        // Clean up function to clear the timeout
        return () => clearTimeout(timeoutId);
    }, []);

    return (
        <>
         <section class="p-0 bg-img cover-background" style={{backgroundImage: "url(https://bootdey.com/img/Content/bg1.jpg)"}}>
                <div class="container-fluid d-flex flex-column">
                    <div class="row align-items-center justify-content-center min-vh-100">
                        <div class="col-md-9 col-lg-6 my-5">
                            <div class="text-center error-page">
                                <h1 class="mb-0 text-secondary">404</h1>
                                <h2 class="mb-4 text-white">Sorry, something went wrong!</h2>
                                <p class="w-sm-80 mx-auto mb-4 text-white">This page is incidentally inaccessible because of support. We will back very before long much obliged for your understanding</p>
                                <div>
                                <Link class="btn btn-info btn-lg me-sm-2 mb-2 mb-sm-0" to={`/home`}>Return Home</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}