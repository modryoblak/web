export default function(hostname: string) : string {
    return hostname.includes("github.io") ? "/concept-landing/" : "/";
}
