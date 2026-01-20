const loader = document.getElementById('loader'); 
const getCards = document.getElementById('get-cards'); 
const deleteAllCards = document.getElementById('delete-all-cards');
const deleteCard = document.getElementById('delete-card'); 
const userCards = document.getElementById('user-cards');
const userTemplate = document.getElementById('user-template');  

function checkLocalStorage(data) {
  if (!data) {
    loader.textContent = 'Данные загружаются...';
  } else {
    loader.textContent = '';
  }
}

async function fetchData() {
  try {
    loader.textContent = 'Данные загружаются...';

    const response = await new Promise((resolve, reject) => {
      setTimeout(() => {
        fetch('/async/users.json')
          .then(res => {
            resolve(res);
          })
          .catch(err => reject(err));
      }, 1000);
    });

    const data = await response.json();
    localStorage.setItem('info', JSON.stringify(data));

    checkLocalStorage(data);
    return data;

  } catch (error) {
    console.error('Ошибка загрузки данных:', error);
    loader.textContent = 'Ошибка загрузки данных';
  } finally {
    console.log('Код выполнен');
  }
}

async function getUser() {
  const data = await fetchData();
  console.log(data);
  return data;
}

const storedData = JSON.parse(localStorage.getItem('info'));
checkLocalStorage(storedData);

async function fillUserCards(users) {
  userCards.innerHTML = ""; 
  
  users.forEach(userCard => {
    const userCardClone = userTemplate.content.cloneNode(true); 
    userCardClone.querySelector('.id').textContent = userCard.id;
    userCardClone.querySelector('.name').textContent = userCard.name;
    userCardClone.querySelector('.surname').textContent = userCard.surname;
    userCardClone.querySelector('.email').textContent = userCard.email; 
    userCardClone.querySelector('.age').textContent = userCard.age;
    userCardClone.querySelector('.height').textContent = userCard.height;
    userCards.appendChild(userCardClone); 
  });
}

getCards.addEventListener('click', async () => {
  let users = JSON.parse(localStorage.getItem('info')); 
  return fillUserCards(users);
});

deleteAllCards.addEventListener('click', () => {
  localStorage.clear();
  loader.textContent = 'Карточки удалены';
});

deleteCard.addEventListener('click', () => {
  localStorage.removeItem('info');
  loader.textContent = 'Карточка удалена';
});
