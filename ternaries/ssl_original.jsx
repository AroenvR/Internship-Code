// De originele HTML (met JavaScript) code:
<tr>
    <th scope="row">Support SSL 2.0</th>
    <td>{crawlResult.supportSsl_2_0 == null ? '' : crawlResult.supportSsl_2_0 ?
        ('true' + (countCipherSuites["SSL_2_0"] !== undefined ? ' (' + countCipherSuites["SSL_2_0"].count + ' cipher suites supported)' : ''))
        : 'false'}</td>
</tr>
<tr>
    <th scope="row">Support SSL 3.0</th>
    <td>{crawlResult.supportSsl_3_0 == null ? '' : crawlResult.supportSsl_3_0 ?
        ('true' + (countCipherSuites["SSL_3_0"] !== undefined ? ' (' + countCipherSuites["SSL_3_0"].count + ' cipher suites supported)' : ''))
        : 'false'}</td>
</tr>
<tr>
    <th scope="row">Support TLS 1.0</th>
    <td>{crawlResult.supportTls_1_0 == null ? '' : crawlResult.supportTls_1_0 ?
        ('true' + (countCipherSuites["TLS_1_0"] !== undefined ? ' (' + countCipherSuites["TLS_1_0"].count + ' cipher suites supported)' : ''))
        : 'false'}</td>
</tr>
<tr>
    <th scope="row">Support TLS 1.1</th>
    <td>{crawlResult.supportTls_1_1 == null ? '' : crawlResult.supportTls_1_1 ?
        ('true' + (countCipherSuites["TLS_1_1"] !== undefined ? ' (' + countCipherSuites["TLS_1_1"].count + ' cipher suites supported)' : ''))
        : 'false'}</td>
</tr>