import React from 'react';
import {Route, Routes} from 'react-router-dom';
import Content from './Content/Content.js';
import Actu from './Content/Actu.js';


export default() => (
    <Routes>
        <Route path="/" exact element={<Content />}/>
        <Route path="/actu" exact element={<Actu/>}/>
    </Routes>
)