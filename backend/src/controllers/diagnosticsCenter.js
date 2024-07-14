/**
 * The function searches for diagnostic centers by location and returns the matching results.
 * @param req - The `req` parameter in the `searchDiagnosticCentersByLocation` function is typically an
 * object representing the HTTP request. It contains information about the request made to the server,
 * such as the request headers, query parameters, body content, and more. In this specific function,
 * `req.query`
 * @param res - The `res` parameter in the `searchDiagnosticCentersByLocation` function is the response
 * object that will be used to send a response back to the client making the request. It is typically
 * used to send HTTP responses with data or error messages. In the provided code snippet, the `res`
 * @returns The function `searchDiagnosticCentersByLocation` is returning either a 404 status with the
 * message 'No matching diagnostic centers found.' if no centers are found for the provided location,
 * or a 200 status with an array of diagnostic centers (including their IDs and data) if matching
 * centers are found.
 */
const searchDiagnosticCentersByLocation = async (req, res) => {
    const { location } = req.query;
    const centersRef = db.collection('diagnosticCenters');
    const snapshot = await centersRef.where('location', '==', location).get();

    if (snapshot.empty) {
        return res.status(404).send('No matching diagnostic centers found.');
    }

    let centers = [];
    snapshot.forEach(doc => centers.push({ id: doc.id, ...doc.data() }));
    res.status(200).send(centers);
}
module.exports = { searchDiagnosticCentersByLocation }