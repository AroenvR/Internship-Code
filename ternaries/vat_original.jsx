// De originele HTML (met JavaScript) code:
<tr>
    <th scope="row">VAT</th>
    <td>{data.vatValues && data.vatValues.length ?
        data.vatValues.length === 1 ?
            data.vatValues
            :
            <Accordion>
                <Accordion.Toggle as={Button} className="toggle-button"
                                    id="button-vat-values"
                                    variant="link" eventKey="3"
                                    onClick={() => setOpenVatValues(!openVatValues)}>Found {data.vatValues.length} VAT
                    values</Accordion.Toggle>
                <Accordion.Collapse eventKey="3" in={openVatValues}>
                    <ul className="no-bullet mt-1 pl-0">
                        {data.vatValues.map(data => (
                            <li>{data}</li>
                        ))}
                    </ul>
                </Accordion.Collapse>
            </Accordion>
        : 'No VAT found'}</td>
</tr>
// Het gebruik van de library heb ik verwijderd en de functionaliteit ervan zelf herschreven.