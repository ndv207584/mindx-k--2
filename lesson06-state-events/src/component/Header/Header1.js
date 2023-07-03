export const Header1 = (prop) => {
    const {contact,result} = prop
    return(
        <div className="Header1">
            <button className="Button" onClick={() => contact(result)}>ADD NEW EXPENSE</button>
        </div>
    )
}