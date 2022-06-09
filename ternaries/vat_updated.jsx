// De nieuwe HTML (met JavaScript) code:
<tr>
    <th scope="row">
        VAT
    </th>
    <td>
        { renderVAT() }
    </td>
</tr>

//--- De functie met zijn documentatie:

// Render data.vatValues
const renderVAT = () => { // Inside td element
    if(checkObjectIsFalsy(data.vatValues)) { // Check if data.vatValues is falsy
        return (
            <p className="mt-1">No VAT found</p>
        );
    }
    if(data.vatValues.length === 1) {
        return (
            data.vatValues
        );
    }
    return (
        <>
            <button 
                className='more-info'
                onClick={() => setOpenVatValues(openVatValues => !openVatValues)} // Toggle openVatValues boolean
> 
                More info
            </button>

            {
                openVatValues && ( // if openVatValues === true, render
                    <ul className="no-bullet mt-1 pl-0">
                        { 
                            data.vatValues.map((data, index) => {
                                return (
                                    <li key={index}>
                                        { data }
                                    </li>
                                )
                            })
                        }
                    </ul>
                )
            }
        </>
    );
}