// DOM - Document Object Model
// DOM is a representation fo the whole HTML page in a form of objects inside the HTML document
// document is part of the actual HTML OBJECT - WINDOW object
// so roughly Window is the current page and it is in a document structure having some objects

// discussing about 
//pointing by id,classname,tags
//query-selectors

// let elem = document.getElementById('Head1')
// elem
// elem.innerHTML -> returns all inner the <p> tags with \n(by default)
// elem.innerText -> returns all the text but without whitespaces and \n
// elem.textContent -> returns all the texts with whitespaces and \n
//  document.getElementsByClassName('Big-Heading') -> returns an HTMLCOLLECTION of all nodes having classname that
// Why ByClassName returns HTMLCOLLECTION but ById do not return such a collection ?
// -> Because In a class, there maybe several differnt Ids but every Id is unique to a certain class. Like Id A-of-class-B is different ID A-of-class-D
//document.getElementById('Head1').getAttribute('id') -> getting the 'id'
//document.getElementById('Head1').getAttribute('class') -> getting the class
//document.getElementById('Head1').setAttribute('class','test')->setting a new class to the tag where Id = 'Head1'
//document.querySelector('#Head1') -> querying and sleecting the Head1 id elements (# denotes, like . for class and tagname for tags)
//document.querySelectorAll('p') -> Reeturns a new collection 'NodeList'
//document.querySelectorAll('p').forEach(function (params) {
//     params.style.background="green"
// }) -> adding an operation on a specific query
//let elem=document.getElementById('Head1')
//elem.innerHTML="<p>PARTHIB</p>" --> changing the innerhtml