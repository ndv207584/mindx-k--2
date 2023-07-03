export const False = (prop) => {
    const {contact,result} = prop
    return (
        <div className="HeaderFalse">
            <div className="FalseBlock">
                <span className="FalseSpan">Name</span>
                <input type="text" className="FalseInput" placeholder="Enter your name here..."/>
            </div>
            <div className="FalseBlock">
                <span className="FalseSpan">Amount</span>
                <input type="text" className="FalseInput" placeholder="Enter amount here..."/>
            </div>
            <div className="FalseBlock">
                <span className="FalseSpan">Date</span>
                <input type="text" className="FalseInput" placeholder="dd/mm/yyy"/>
            </div>
            <div className="FalseButton">
                <button className="FalseAdd">ADD</button>
                <button className="FalseCancel" onClick={()=>contact(!result)}>Cancel</button>
            </div>
        </div>
    )
}