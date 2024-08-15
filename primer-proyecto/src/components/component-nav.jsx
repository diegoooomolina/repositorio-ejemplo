export function Componente() {
    return (
        <>
        <input type="checkbox" id="menu-toggle"/>
            <label id="trigger" htmlFor="menu-toggle"></label>
            <label id="burger" htmlFor="menu-toggle"></label>
        <ul id="menu">
            <li><a href="#">inicio</a></li>
            <li><a href="#">historia</a></li>
            <li><a href="#">hipotesis</a></li>
        </ul>
        </>
    )
};