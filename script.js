
  let quotes = [
    `I live my life a quarter mile at a time`,
    `I said a ten-second car, not a ten-minute car`,
    `You can have any brew you want... as long as it's a Corona.`,
    `You almost had me? You never had me - you never had your car!`,
    `I don't have friends. I have family.`,
    `It don't matter if you win by an inch or a mile. Winning's winning.`
  ];
  
  document.addEventListener("DOMContentLoaded", function(event) {
    // Random quote of the day generator
    const randomQuote = function() {
      document.querySelector('#quote-of-the-day').textContent = `"${quotes[Math.floor(Math.random() * quotes.length)]}"`;
    };
    randomQuote();
    
    // Do all of your work inside the document.addEventListener  
  
    // Part 1
    document.getElementById("main-title").textContent = 'Dom Toretto\'s Homepage';

  
    // Part 2
  let elements = document.getElementsByTagName("body")
  for (const elt of elements) {
    elt.setAttribute("style", "background-color: yellow");
  }
  
    // Part 3
    let element = document.getElementById("favorite-things");
    elements = element.getElementsByTagName("li");
    element.removeChild(elements[elements.length -1]);
  
    // Part 4
  const specialTitles = document.querySelectorAll('.special-title');

  specialTitles.forEach(title => {
    title.style.fontSize = '2em';
  });
  
    // Part 5
    let element4 = document.getElementById("past-races");
  const listItems = ul.querySelector('li');

  for (let i = 0; i < listItems.length; i++) {
    const listItem = listItems[i];
    if (listItem.textContent.includes('Chicago')) {
        listItem.remove();
    }
  }
  
    // Part 6
  const ul = document.getElementById('past-races');
  const newCity = 'Frankfurt';

  const newListItem = document.createElement('li');
  newListItem.textContent = newCity;

  ul.appendChild(newCity);
  
    // Part 7
  const blogContainer = document.querySelector('.blog-post purple');

  const newBlogPost = document.createElement('div');
  newBlogPost.classList.add('blog-post purple');

  const newHeading = document.createElement('h2');
  newHeading.textContent = 'Frankfurt';

  const newParagraph = document.createElement('p');
  newParagraph.textContent = "I DROVE ON THE AUTOBAHN AT 200 MPH!";

  newBlogPost.appendChild(newHeading);
  newBlogPost.appendChild(newParagraph);

  blogContainer.appendChild(newBlogPost);
  
    // Part 8
  const quoteTitle = document.querySelector('#quote-title');

  quoteTitle.addEventListener('click', function() {
    randomQuote();

    const randomQuote = function() {
        document.querySelector('#quote-of-the-day').innerText = `"${quotes[Math.floor(Math.random()*quotes.length)]}"`;
    }
  })
  
    // Part 9
   newBlogPost = document.querySelectorAll('.blog-post');

  blogPosts.forEach(blogPost) {
    blogPost.addEventListener('mouseout', () => {
        blogPost.classList.toggle('purple');
    });

    blogPost.addEventListener('mouseenter', () => {
        blogPost.classList.toggle('red');
    });
  });

