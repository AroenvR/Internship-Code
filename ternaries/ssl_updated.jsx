// De nieuwe HTML (met JavaScript) code:
<tr>
    <th scope="row">Support SSL 2.0</th>
    <td>
        { renderSlSupport(crawlResult.supportSsl_2_0, countCipherSuites["SSL_2_0"]) }
    </td>
</tr>
<tr>
    <th scope="row">Support SSL 3.0</th>
    <td>
        { renderSlSupport(crawlResult.supportSsl_3_0, countCipherSuites["SSL_3_0"]) }
    </td>
</tr>
<tr>
    <th scope="row">Support TLS 1.0</th>
    <td>
        { renderSlSupport(crawlResult.supportTls_1_0, countCipherSuites["TLS_1_0"]) }
    </td>
</tr>
<tr>
    <th scope="row">Support TLS 1.1</th>
    <td>
        { renderSlSupport(crawlResult.supportTls_1_1, countCipherSuites["TLS_1_1"]) }
    </td>
</tr>

//--- De functie met zijn documentatie:

// Render crawlResult.supportSsl_<version number> / crawlResult.supportTls_<version number>
const renderSlSupport = (sl, cipherSuites) => { // Inside td element
    if (sl === null || sl === '') {
        return '';
    }
    if (sl) { // supportSsl / supportTsl true or false?

        if (cipherSuites) { // Does it have cipherSuites?
            return `true (${cipherSuites.count} cipher suites supported)`;
        }
        return 'true';
    }
    return 'false';
}