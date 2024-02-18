export default async function(origin, href) {
    const pages = fetch(origin + href).then((response) => { if (response.ok) return false; return true; });
    return await pages ? "/concept-landing" + href : href;
}
