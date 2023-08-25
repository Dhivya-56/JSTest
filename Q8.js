const userList = document.getElementById('userList');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const ButtonClick = document.querySelector('.Button');
let users = [];

function Userlist() {
  userList.innerHTML = '';
  users.forEach(user => {
    const li = document.createElement('li');
    li.textContent = `${user.name} - ${user.email}`;
    userList.appendChild(li);
  });
}

ButtonClick.addEventListener('click', () => {
  const name = nameInput.value;
  const email = emailInput.value;

  if (name && email) {
    const user = { name, email };
    users.push(user);
    Userlist();
    nameInput.value = '';
    emailInput.value = '';
  }
});