function convertResponseToJson(response) {
  return response.json()
}

const newsneventsTable = document.getElementById("newsnevents")
const filterList = document.getElementById("filter")

// Populate News & Events Table & filter drop down list
function addNewsnEventsToSection(newsneventsArr, id, date) {
  var optionArr = [];
  for ( const newsnevent of newsneventsArr ) {
        var check = 0;
        var year = newsnevent.date;
        year = year.split(' ');

      // Loop through current ddl to check if year exist
      optionArr.forEach(function(item, index, array) {
        if(item == year[2]) {
          check = check + 1;
        }
      });

      // If none, add option html and push to optionArr
      if(check == 0) {
          optionArr.push(year[2]);
          const option = document.createElement('option')
          option.value = year[2];
          option.innerHTML = year[2];
          filterList.appendChild(option);
      }

      // Add post
      const tr = document.createElement('tr') 
      tr.id = newsnevent.id;  
      const td = document.createElement('td') 
      const post = document.createElement('div')
      post.id = "post";
      const title = document.createElement('h3')
      title.classList.add('post-title')
      title.innerHTML = newsnevent.title;
      const author = document.createElement('p')
      author.classList.add('post-author')
      author.innerHTML = newsnevent.author;
      const date = document.createElement('p')
      date.classList.add('post-date')
      date.innerHTML = newsnevent.date;
      const content = document.createElement('div')
      content.classList.add('content')
      const text = document.createElement('p')
      text.innerHTML = newsnevent.content;
      const imgDiv = document.createElement('div')
      imgDiv.classList.add('flower_img')
      const img = document.createElement('img')
      img.src = newsnevent.img
      imgDiv.appendChild(img)
      content.appendChild(text)
      post.appendChild(imgDiv)
      post.appendChild(title)
      post.appendChild(author)
      post.appendChild(date)
      post.appendChild(content)
      td.appendChild(post)
      tr.appendChild(td) 
      newsneventsTable.appendChild(tr)
  }  

  // Read More function
  var lineHeight = 20;
  var lines = 2;

  $('.content').readmore({
    speed: 500,
    collapsedHeight: lineHeight * lines,
    embedCSS: false
  });
}

// Filter News & Events Posts
function filter() {
  var input, filter, table, tr, td, i;
  input = document.getElementById("filter");
  filter = input.value.toUpperCase();
  table = document.getElementById("newsnevents");
  tr = table.getElementsByTagName("tr");
  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[0];
    if (td) {
      if (td.innerHTML.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    }       
  }
}

// Retrieve newsnevents db
function renderAllNewsnEvents(id, date) {
  fetch('/newsnevents.json')
    .then(convertResponseToJson)
    .then(function(newsneventsArr) {
      addNewsnEventsToSection(newsneventsArr, id, date)
    })
}

renderAllNewsnEvents()