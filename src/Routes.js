import React from "react";
import Home from "./containers/Home";
import NotFound from "./containers/NotFound"; // Import the NotFound component
import { Routes, Route } from 'react-router-dom';

export default function MyRoutes() {
    return (
        <>
            <header>
                {/* Include the NotFound component in the header */}
                <NotFound />
            </header>
            <Routes>
                <Route path="/" element={<Home />} />
                {/* Other routes */}
                {/* Finally, catch all unmatched routes */}
                {/* Place the Switch block as the last line in the Routes section */}
                <Route path="*" element={<NotFound />} />
            </Routes>
        </>
    );
}
