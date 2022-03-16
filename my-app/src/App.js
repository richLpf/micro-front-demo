import { Suspense, lazy } from 'react';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import './App.css';

import Home from './pages/home'
const Main = lazy( () => import('./pages/main'))

const RouteExample = () => {
  return <BrowserRouter>
      <div style={{marginBottom: 20, color: '#fff'}}>
          <div style={{marginBottom: '20px'}}>
            <Link style={{ color: '#fff' }} to="/">主应用首页</Link>
          </div>
          <div style={{marginBottom: '20px'}}>
            <Link style={{ color: '#fff' }} to="/main">主应用main入口</Link>
          </div>
          <div style={{marginBottom: '20px'}}>
            <Link style={{ color: '#fff' }} to="/react">第一个子应用Home页面</Link>
          </div>
          <div style={{marginBottom: '20px'}}>
            <Link style={{ color: '#fff' }} to="/react/list">第一个子应用List页面</Link>
          </div>
          <div style={{marginBottom: '20px'}}>
            <a style={{ color: '#fff' }} href="/vue/">第二个子应用Home页面</a>
          </div>
          <div style={{marginBottom: '20px'}}>
            <a style={{ color: '#fff' }} href="/vue/list/">第二个子应用List页面</a>
          </div>
          <div style={{marginBottom: '20px'}}>
            <Link style={{ color: '#fff' }} to="/static">第三个子应用</Link>
          </div>
      </div>
    </BrowserRouter>
}

function App({loading}) {
  return (
    <div className="App">
      <header className="web-header">
        标题栏
      </header>
      <section className="web-section">
        <aside className="web-aside">
          <RouteExample />
        </aside>
        <div className="web-main">
          <BrowserRouter>
            <Suspense fallback={null}>
              <Routes>
                <Route path="/" exact element={<Home />} />
                <Route path="/main" element={<Main />} />
              </Routes>
            </Suspense>
          </BrowserRouter>
          <main id="subApp">
            
          </main>
        </div>
      </section>
    </div>
  );
}

export default App;
