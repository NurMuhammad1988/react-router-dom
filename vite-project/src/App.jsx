import "./App.css";
import Home from "./pages/home";
import About from "./pages/about";
import Contact from "./pages/contact";

//React router dom
import { BrowserRouter, Routes, Route, Link, NavLink } from "react-router-dom";
//bu 6 chi versiyasidan react router domni yozilishi
function App() {
    return (
        <div className="App">
            <BrowserRouter>
                {/* browserrouterni o'zini ichida doim ko'rinib turadigan narsa bo'lishilerey masalan nav va footer */}
                <nav>
                    <h1>My Articles</h1>
                    {/* link to qilib o'ralganda sahifa qayta yuklanmaydi  */}
                    {/* <Link to="/">Home</Link>
                    <Link to="about">About</Link>
                    <Link to="contact">Contact</Link> */}

                    {/*  navlinkni linkdan farqi shu yani agar class activ bo'lsa stylelarini o'zgartirib beradi linkdan navlink maqulroq */}
                    <NavLink to="/">Home</NavLink>
                    <NavLink to="about">About</NavLink>
                    <NavLink to="contact">Contact</NavLink>
                </nav>

                <Routes>
                    {/* routesga faqat o'zgaradigan yani joyi o'zgaradigan componentlar yoziladi */}
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/contact" element={<Contact />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;

//shu holatda linklar ishladiqayta yuklash bo'lmadi va linklar
