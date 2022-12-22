// fetch('https://learn.codeit.kr/api/members/3')
//  .then((response) => response.text())
//  .then((result) => { console.log(result); });

const member = {
    name: 'Alice',
    email: 'alice@codeitmall.kr',
    department: 'marketing',
};

fetch('https://learn.codeit.kr/api/members/', {
    method: 'POST',
    body: JSON.stringify(newMember),
}) 
 .then((response) => response.text())
 .then((result) => { console.log(result); });


fetch('https://learn.codeit.kr/api/members/2', {
    method: 'PUT',
    body: JSON.stringify(member),
}) 
 .then((response) => response.text())
 .then((result) => { console.log(result); });

fetch('https://learn.codeit.kr/api/members/2', {
    method: 'DELETE',
}) 
 .then((response) => response.text())
 .then((result) => { console.log(result); });
