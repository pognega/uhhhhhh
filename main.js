
fetch('news.json') 
    .then(response => {
        if (!response.ok) {
            throw new Error(`HTTP error: ${response.status}`);
        }
        return response.json();
    })
    .then(news => {
        const newsContainer = document.querySelector('.news');
        const newdiv = document.createElement('div');
        newdiv.className = 'news-item';

        const img =  document.createElement('img');
        img.src = `images/${news.image}`;
        img.alt = news.title;
        img.style.width = '100%';
        img.style.height = 'auto';

        const title = document.createElement('h2');
        title.innerText = news.title;
        const description = document.createElement('p');
        description.innerText = news.description;
        const date = document.createElement('p');
        date.innerText = `Published on: ${news.date}`;
        const author = document.createElement('p');
        author.innerText = `Author: ${news.author}`;

        newdiv.appendChild(title);
        newdiv.appendChild(img);
        newdiv.appendChild(description);
        newdiv.appendChild(date);
        newdiv.appendChild(author);
        newdiv.style.border = '1px solid #ccc';
        newsContainer.appendChild(newdiv);
    })
    .catch(error => {
        console.error(`Fetch problem: ${error.message}`);
    })

//function initialize(news) { }

//function search() { }