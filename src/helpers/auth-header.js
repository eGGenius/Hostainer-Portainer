
export default function authHeader() {
    // return authorization header with jwt token
    const token = localStorage.getItem("jwt");
    if (token) {
        return { Authorization: `Bearer ${token}` };
    } else {
        // ToDo -> Nutzer ist nicht authentifiziert -> zurück zum Login
        return {};
    }
}
