import React, { Suspense } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from './components/Home'
import List from './components/List'

const App = () => {
  // 设置路由命名空间
  return <div>
      <div>
        <div style={{marginBottom: '30px'}}>我是React第一个子应用</div>
        <Router basename={'/react'}>
          <div>
              <Link to="/">Home</Link>&nbsp;&nbsp;
              <Link to="/list">List</Link>
          </div>
          <Suspense fallback={null}>
            <Routes>
              <Route path="/" exact element={<Home />} />
              <Route path="/list" element={<List />} />
            </Routes>
          </Suspense>
        </Router>
      </div>
  </div>
};

export default App;