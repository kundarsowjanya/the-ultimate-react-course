import {Link} from "react-router-dom"
import SearchOrder from "../features/order/SearchOrder"
function Header() {
    return (
        <header>
            <Link to="/">Fast React Pizza Co.</Link>
            <SearchOrder/>
            <p>Sowj</p>
        </header>
    )
}

export default Header
