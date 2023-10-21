import React from 'react'
import CssBaseline from "@mui/material/CssBaseline";
import {Route, Routes, Navigate} from "react-router-dom";
import IndexPage from "../../pages/IndexPage/IndexPage";
import SecondPage from "../../pages/SecondPage/SecondPage";
import NotFoundPage from "../../pages/NotFoundPage/NotFoundPage";


const MainArea: React.FC = () => {
    return(
        <>
            <CssBaseline />
            <div>
                <Routes>
                    <Route path='/' element={ <IndexPage /> }/>
                    <Route path='/second' element={ <SecondPage />}/>
                    <Route path='/404' element={ <NotFoundPage />}/>
                    <Route path="*" element={ <Navigate to="/404" />}/>
                </Routes>
            </div>
        </>
    )
}

export default MainArea;
