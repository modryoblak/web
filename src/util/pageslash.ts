export default function(hostname: String) : String {
    return hostname.includes("github.io") ? "/concept-landing/" : "/";
}
