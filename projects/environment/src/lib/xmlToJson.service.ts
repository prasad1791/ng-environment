/**
 * Changes XML to JSON
 * Modified version from here: http://davidwalsh.name/convert-xml-json
 */
export const xmlToJson =(xml)=>{
    let xmlJson = {};

    if (xml.nodeType == 1) {
      if (xml.attributes.length > 0) {
        xmlJson["@attributes"] = {};
        for (const item of xml.attributes) {
          const attribute = item;
          xmlJson["@attributes"][attribute.nodeName] = attribute.nodeValue;
        }
      }
    } else if (xml.nodeType == 3) {
      xmlJson = xml.nodeValue;
    }
    const textNodes = [].slice.call(xml.childNodes).filter((node)=> {
      return node.nodeType === 3;
    });
    if (xml.hasChildNodes() && xml.childNodes.length === textNodes.length) {
      xmlJson = [].slice.call(xml.childNodes).reduce((text, node)=> {
        return text + node.nodeValue;
      }, '');
    } else if (xml.hasChildNodes()) {
      for (const childNode of xml.childNodes) {
        const item = childNode;
        const nodeName = item.nodeName;
        if (typeof xmlJson[nodeName] == "undefined") {
          xmlJson[nodeName] = xmlToJson(item);
        } else {
          if (typeof xmlJson[nodeName].push == "undefined") {
            var old = xmlJson[nodeName];
            xmlJson[nodeName] = [];
            xmlJson[nodeName].push(old);
          }
          xmlJson[nodeName].push(xmlToJson(item));
        }
      }
    }
    return xmlJson;
}