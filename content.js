var elements = document.getElementsByTagName('*');
for (var i = 0; i < elements.length; i++) {
    var element = elements[i];
    for (var j = 0; j < element.childNodes.length; j++) {
        var node = element.childNodes[j];
        if (node.nodeType === 3) {
            var text = node.nodeValue;
            // var council = text.replace(/Republican Party/gi, 'Sith Council');
            var replacedText = text.replace(/Republican/gi, 'Sith Lord');
            if (replacedText !== text) {
                element.replaceChild(document.createTextNode(replacedText), node);
            }
            // if (council !== text){
            //     element.replaceChild(document.createTextNode(council), node);
            // }
        }
    }
}
