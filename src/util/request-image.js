export default async function(origin, href) {
    const x = fetch(origin + href).then((response) => { if (response.ok) return false; return true; });
    return await x ? "/concept-landing" + href : href;
}
