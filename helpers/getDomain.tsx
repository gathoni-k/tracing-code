function getDomain(url:string) {
    let domainUrl = (new URL(url))
    const domain = domainUrl.hostname.replace('www.','');
    return domain
}
export default getDomain